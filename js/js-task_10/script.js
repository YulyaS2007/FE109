"use strict";
let WorkDom = function(){
//1) create(‘tagName’) для создание и возврата новых элементов по имени тега;
    this.create = function(tagName) {
        return document.createElement(tagName);
    }
//2) attr(‘element’, ‘name’, [‘value’]) для добавления атрибута к элементу или возврата значения атрибута;
    this.attr = function(element, name, value) {
        return element.setAttribute(name,value) || element.getAttribute(name);
    }
//3) html(‘element’, [‘value’]) для добавления любого содержимого внутрь элемента или его возврата;
    this.html = function(element, value) {
        return element.innerHTML = value;
    }
//4) search(‘element’, ‘selector’) для поиска и возврата найденных элементов внутри переданного или в document по селектору CSS.
    this.search = function(element, selector) {
       // let item = element || document;
        return element.querySelectorAll(selector); //не получается!!
    }
//5) addClass(‘element’, ‘className’) для добавления класса к элементу;
    this.addClass = function(element, className) {
        return element.classList.add(className);
    }
//6) removeClass(‘element’, ‘className’) для удаления класса из элемента;
    this.removeClass = function(element, className) {
        return element.classList.remove(className);
    }
//7) toggleClass(‘element’, ‘className’) для переключения класса в элементе (добавляет или удаляет класс в эл-те в зависимости от того, есть он или нет);
    this.toggleClass = function(element, className) {
        return element.classList.toggle(className);
    }
//9) hasClass(‘element’, ‘className’) для проверки существования класса в элементе (должен вернуть true или false);
    this.hasClass = function(element, className) {
        return element.classList.contains(className);
    }
//10) append(‘element’, ‘newElement’, [‘beforeElement’]) для добавления новых элементов внутрь какого-либо после всего его содержимого, либо перед каким-то конкретным;
    this.append = function(element, newElement) {
        newElement = this.create(`${newElement}`);
        return element.appendChild(newElement);
    }
    this.appendBefore = function(element, newElement, beforeElement) {
        let bE = document.querySelector(`${beforeElement}`);
        return element.insertBefore(newElement, bE);
    }
//11) on(‘element’, ‘eventName’, ‘funcName’) для добавления к элементу события и выполнения функции (проверьте доступность контекста this и event).
    this.on = function(element, eventName, funcName) {

        return element.addEventListener(eventName, funcName);
    }
}

let workDom = new WorkDom();

let body = document.body;
// 1)
let h1 = workDom.create("h1");
console.log(h1);
let div = workDom.create("div");
console.log(div);
// 2)
let elem = workDom.attr(h1,"class","attr");
console.log(elem);
let elemDiv = workDom.attr(div,"class","all");
console.log(elemDiv);
// 3)
let elem3 = workDom.html(h1, "Hello!");
console.log(elem3);
let elem3Div = workDom.html(div, "You are in div!");
console.log(elem3Div);

// 4) не получается
let elem4 = workDom.search(body, "div");
console.log(elem4);

// 5)
let elem5 = workDom.addClass(div, "here");
// 6)
let elem6 = workDom.removeClass(div, "all");
// 7)
let elem7 = workDom.toggleClass(div, "all");
// 9)
let elem9 = workDom.hasClass(div, "all");
console.log(elem9);
// 10)
let elem10A = workDom.append(body, "h2");
console.log(elem10A);
let elem10B = workDom.appendBefore(body, h1, "h2");
console.log(elem10B);
// 11)
let log = () => {console.log("Hi!");}
let elem11 = workDom.on(h1, 'click', log); //(проверьте доступность контекста this и event)???



