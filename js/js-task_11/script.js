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
        let id;
        if(this.data.length == 0) {
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

let oneUser = new Contacts();

// проверяем работу нахождения пользователя по индексу
// oneUser.addUser('Alex', 'alex@gmail.com', 'address Alex', '+375331');
// oneUser.addUser('Bob', 'bob@gmail.com', 'address Bob', '+375332');
// oneUser.addUser('Stepan', 'stepan@gmail.com', 'address Stepan', '+37533');
// console.log(oneUser.getInfo(1));
// console.log(oneUser.getInfo(2));

//проверяем работу редактирования
// oneUser.edit(2, {firstName: 'StepanNew', email:'stepanNew@gmail.com', address: 'address StepanNew', phone: '+37533'});
// console.log(oneUser.getInfo(2));


class ContactsApp extends Contacts{
    constructor(data) {
        super(data);
    }

    show() {
        //document.querySelector(".contacts").classList.add("active");
        let contactTable = document.querySelector(".contactList");
        contactTable.innerHTML = "";
        this.data.forEach((elem, index) => {
            let line = document.createElement("tr");
            line.innerHTML = `
            <td class="elemId">${elem.dataUser.id}</td>
            <td class="elemFirstName">${elem.dataUser.firstName}</td>
            <td class="elemEmail">${elem.dataUser.email}</td>
            <td class="elemAddress">${elem.dataUser.address}</td>
            <td class="elemPhone">${elem.dataUser.phone}</td>
            <td class="pensil">
                <button class="btn btn-edit" type="submit">
                    <p></p>
                </button>
            </td>
            <td class="trash">
                <button data-index="${index}" onclick="deleteContact(${elem.dataUser.id})" class="btn btn-del" type="reset"><p></p></button>
            </td>`;
            contactTable.appendChild(line);
        })
    }
}
//<button data-index="${index}  onclick="editContact(${elem.dataUser.id})" class="btn btn-edit" type="submit"><p></p></button>


let checkForm = function() {
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
        }
    }

let contactBook = new ContactsApp();

//исходная информация
contactBook.addUser('Alex', 'alex@gmail.com', 'address Alex', '+375331');
contactBook.addUser('Bob', 'bob@gmail.com', 'address Bob', '+375332');
contactBook.addUser('Stepan', 'stepan@gmail.com', 'address Stepan', '+37533');

console.log(contactBook.getInfo(2));

let addNewContact = function(firstName, email, address, phone) {
        contactBook.addUser(firstName, email, address, phone);
        contactBook.show();
    }
let showContacts = function() {
        contactBook.show();
    }
let deleteContact = function(index) {
        if(confirm("Вы уверены, что хотите удалить пользователя?")) {
            contactBook.remove(index);
            contactBook.show();
        }
    }

let deleteContactAll = function(index) {
    if(confirm("Вы уверены, что хотите очистить список ВСЕХ пользователей?")) {
        contactBook.removeAll();
        contactBook.show();
    }
}

// let editContact = function(index) {
//     indexUser = index;
//     let contactList = document.querySelector(".contactList");
//     let contactForm = document.querySelector(".formForUser");

//     let firstName = contactForm.getElementById("firstNameLabel").value,
//         email = contactForm.getElementById("emailLabel").value,
//         address = contactForm.getElementById("addressLabel").value,
//         phone = contactForm.getElementById("phoneLabel").value;
//     if(confirm("Вы уверены, что хотите редактировать пользователя?")) {
//         //чтобы данные пользователя опять перенеслись в форму
//         firstName = contactList.querySelector(".elemFirstName").innerHTML;
//         email = contactList.querySelector(".elemEmail").innerHTML;
//         address = contactList.querySelector(".elemAddress").innerHTML;
//         phone = contactList.querySelector(".elemPhone").innerHTML;
//         // let firstName = document.getElementById("firstNameLabel").value,
//         // email = document.getElementById("emailLabel").value,
//         // address = document.getElementById("addressLabel").value,
//         // phone = document.getElementById("phoneLabel").value;
//         // if(!firstName || !email || !address || !phone) {
//         //     alert("Заполните все поля!");
//         //     return false;
//         // } else {
//         //     contactBook.edit(index, newInfo);;
//         //     document.querySelector(".formForUser").reset("");
//         // }
//         contactBook.edit(index, newInfo);
//         contactBook.show();
//     //}
// }

contactBook.addUser('Alex', 'alex@gmail.com', 'address Alex', '+375331');
contactBook.addUser('Bob', 'bob@gmail.com', 'address Bob', '+375332');
contactBook.addUser('Stepan', 'stepan@gmail.com', 'address Stepan', '+37533');

// добавляю нового пользователя
const addBtnSubmit = document.querySelector(".btn-submit");
addBtnSubmit.addEventListener('click', checkForm);


//РЕДАКТИРОВАНИЕ

let btnEdit = document.querySelector(".btn-edit");

btnEdit.addEventListener("click", function() {
    this.classList.add("active");
    let tdThisUser = this.closest("tr");
    let editThisUserNodelist = tdThisUser.querySelectorAll("td");
    let editThisUser = Array.prototype.slice.call(editThisUserNodelist); //преобразую Nodelist в массив
    console.log(editThisUser)
 //   let contactForm = document.querySelector(".formForUser");
    
 
    let firstName = document.getElementById("firstNameLabel").value,
        email = document.getElementById("emailLabel").value,
        address = document.getElementById("addressLabel").value,
        phone = document.getElementById("phoneLabel").value;

console.log(firstName)
    if(confirm("Вы уверены, что хотите редактировать пользователя?")) {
        //чтобы данные пользователя опять перенеслись в форму
        firstName = `${editThisUser[1].innerHTML}`;
        console.log(firstName);
        email = `${editThisUser[2].innerHTML}`;
        address = `${editThisUser[3].innerHTML}`;
        phone = `${editThisUser[4].innerHTML}`;

        // firstName = editThisUser[1].innerHTML;
        // console.log(firstName);
        // email = editThisUser[2].innerHTML;
        // address = editThisUser[3].innerHTML;
        // phone = editThisUser[4].innerHTML;

        // firstName = editThisUser[td.elemFirstName].value;
        // email = tdThisUser.querySelector(".elemEmail").value;
        // address = tdThisUser.querySelector(".elemAddress").value;
        // phone = tdThisUser.querySelector(".elemPhone").value;
    }
    // checkForm();
    // btnEdit.classList.remove("active");
    // contactBook.show();
});






const btndelAll = document.querySelector(".btn-delAll");
btndelAll.addEventListener('click', deleteContactAll);


