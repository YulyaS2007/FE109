"use strict";

let indexUser = null;
class User {

    constructor(id, firstName, email, address, phone) {
        this.dataUser = {id, firstName, email, address, phone};
    }

    edit(newInfo) {
        this.dataUser = {
            id: this.dataUser.id,
            firstName: newInfo.firstName || this.dataUser.firstName,
            email: newInfo.email || this.dataUser.email,
            address: newInfo.address || this.dataUser.address,
            phone: newInfo.phone || this.dataUser.phone}
    }

    get info() {
        return this.dataUser;
    }
}

class Contacts {
    constructor() {
        this.data = [];
    }

    addUser(firstName, email, address, phone) {

        //if (!this.data) this.data = []; //без этой записи массив почему-то равен нулю
        let id;
        if(this.data && this.data.length == 0) {
            id = 1;
        } else {
            id = this.data[this.data.length-1].dataUser.id + 1;
        }
        let newUser = new User(id, firstName, email, address, phone);
        this.data.push(newUser);
    }

    edit(id, newInfo) {
        let index = this.data.findIndex(elem => elem.dataUser.id == id);
        this.data[index].edit(newInfo);
    }

    getInfo(id) {
        let index = this.data.findIndex(elem => elem.dataUser.id == id);
        return this.data[index];
    }

    get() {
        return this.data;
    }

    remove(id) {
        this.data = this.data.filter(elem => elem.dataUser.id !== id);
    }

    removeAll() {
        this.data = [];
    }
}

class ContactsApp extends Contacts{

    constructor() {
        super();
        
        this.updateLocal()

        // if (!this.getCookie('')) {
        //     localStorage.removeItem('');
        // }
    }

    get storage() {
        return localStorage.getItem('contactsData');
    }

    set storage(data) {
        localStorage.setItem('contactsData', data);
    }

   // 7. обновление информации, которую забираем из localStorage
    updateLocal = function() {
        this.data = JSON.parse(this.storage) || []; // .parse - метод для преобразования JSON опять в объект
        this.show();
    }

    // getCookie(name) {
    //     let matches = document.cookie.match(new RegExp(
    //         "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    //     ));
    //     return matches ? decodeURIComponent(matches[1]) : undefined;
    // }
    

    show() {
        //document.querySelector(".contacts").classList.add("active");
        let contactTable = document.querySelector(".contactList");
        contactTable.innerHTML = "";

        if (this.data) this.data.forEach((elem, index) => {
            let btnEdit = document.createElement("button");
            btnEdit.classList.add("btn-edit");
            btnEdit.classList.add("btn");
            btnEdit.innerHTML = "<p></p>";

            let line = document.createElement("tr");
            line.innerHTML = `
            <td class="elemId">${elem.dataUser.id}</td>
            <td class="elemFirstName">${elem.dataUser.firstName}</td>
            <td class="elemEmail">${elem.dataUser.email}</td>
            <td class="elemAddress">${elem.dataUser.address}</td>
            <td class="elemPhone">${elem.dataUser.phone}</td>
            <td class="pensil">
            
            </td>
            <td class="trash">
                <button data-index="${index}" onclick="deleteContact(${elem.dataUser.id})" class="btn btn-del" type="reset"><p></p></button>
            </td>`;

            line.querySelector(".pensil").appendChild(btnEdit);
            btnEdit.addEventListener("click", editContact);
            contactTable.appendChild(line);
        })
    }
}



//создаю медоды для работы с объектом:
//1. проверка формы для создания нового пользователя
let checkForm = function() {
    if (this.dataset.action != "edit") {
        let firstName = document.getElementById("firstNameLabel").value,
            email = document.getElementById("emailLabel").value,
            address = document.getElementById("addressLabel").value,
            phone = document.getElementById("phoneLabel").value;

        if(!firstName || !email || !address || !phone) {
            alert("Заполните все поля!");
            return false;
        } else {
            addNewContact(firstName, email, address, phone);  
            document.querySelector(".formForUser").reset("");

            localStorage.setItem('contactsData', JSON.stringify(contactBook.data));
        }

    } else {
        let firstName = document.getElementById("firstNameLabel").value,
            email = document.getElementById("emailLabel").value,
            address = document.getElementById("addressLabel").value,
            phone = document.getElementById("phoneLabel").value;

        let id = this.dataset.id;

        let newInfo = {
            firstName: firstName,
            email: email,
            address: address,
            phone: phone
        };

        contactBook.edit(id, newInfo);        

        localStorage.setItem('contactsData', JSON.stringify(contactBook.data));

        // удаление data из кнопки
        let submit = document.querySelector(".formForUser .btn-submit");
        submit.removeAttribute("data-action");
        submit.removeAttribute("data-id");

        contactBook.show();
        document.querySelector(".formForUser").reset("");
    }
}

//2. добавление нового пользователя
let addNewContact = function(firstName, email, address, phone) {
        contactBook.addUser(firstName, email, address, phone);
        contactBook.show();
    }

//3.РЕДАКТИРОВАНИЕ
const editContact = function() {
    let elemId = this.closest("tr").querySelector(".elemId").innerHTML;

    let user = contactBook.data.filter(function(user) {
        if (+user.dataUser.id == +elemId) return user.dataUser;
    });

    let firstName = document.getElementById("firstNameLabel"),
        email = document.getElementById("emailLabel"),
        address = document.getElementById("addressLabel"),
        phone = document.getElementById("phoneLabel");
    
        firstName.value = user[0].dataUser.firstName;
        email.value = user[0].dataUser.email;
        address.value = user[0].dataUser.address;
        phone.value = user[0].dataUser.phone;

    let submit = document.querySelector(".formForUser .btn-submit");
    submit.dataset.action = "edit";
    submit.dataset.id = user[0].dataUser.id; //добавляю id в атрибут
}

//4. удаление пользователя
let deleteContact = function(index) {
        if(confirm("Вы уверены, что хотите удалить пользователя?")) {
            contactBook.remove(index);
            
            localStorage.setItem('contactsData', JSON.stringify(contactBook.data));

            localStorage.removeItem("contactsData")

            contactBook.show();
        }
    }

//5. удаление всех пользователей
let deleteContactAll = function(index) {
    if(confirm("Вы уверены, что хотите очистить список ВСЕХ пользователей?")) {
        contactBook.removeAll();
        
        localStorage.clear();

        contactBook.show();
    }
}

//6. отрисовка таблицы с контактами
let showContacts = function() {
        contactBook.show();
    }

// //7. обновление информации, которую забираем из localStorage
// let updateLocal = function() {
//     contactBook.data = JSON.parse(localStorage.getItem('contactsData')); // .parse - метод для преобразования JSON опять в объект
//     contactBook.show();
//     }




//СОЗДАЮ ОБЪЕКТ
let contactBook = new ContactsApp();

//исходная информация 
// contactBook.addUser('Alex', 'alex@gmail.com', 'address Alex', '+375331');
// contactBook.addUser('Bob', 'bob@gmail.com', 'address Bob', '+375332');
// contactBook.addUser('Stepan', 'stepan@gmail.com', 'address Stepan', '+37533');
//showContacts();

// добавляю событие на кнопку для добавления нового пользователя
const addBtnSubmit = document.querySelector(".btn-submit");
addBtnSubmit.addEventListener('click', checkForm);

// добавляю событие на кнопку для удаления полностью списка пользователей
const btndelAll = document.querySelector(".btn-delAll");
btndelAll.addEventListener('click', deleteContactAll);




//???????????????
//не получается правильная выгрузка данных в форме, если снять комментарии с исходных данных (стр.247-251), при удалении добавляются исходные