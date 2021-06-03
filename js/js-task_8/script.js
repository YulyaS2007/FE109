"use strict";
let html1 = document.querySelector(`html`);
html1.setAttribute(`lang`, `en`);

// Head

let metaUtf8 = document.createElement(`meta`);
metaUtf8.setAttribute(`charset`, `UTF-8`);
document.head.appendChild(metaUtf8);

let metaHttp = document.createElement(`meta`);
metaHttp.setAttribute(`http-equiv`, `X-UA-Compatible`);
metaHttp.setAttribute(`content`, `IE=edge`);
document.head.appendChild(metaHttp);

let metaName = document.createElement(`meta`);
metaName.setAttribute(`name`, `viewport`);
metaName.setAttribute(`content`, `width=device-width, initial-scale=1.0`);
document.head.appendChild(metaName);

let title1 = document.createElement(`title`);
title1.innerHTML = "Call_to_Action";
document.head.appendChild(title1);

let style1 = document.createElement(`style`);
style1.innerHTML = `
.mainContainer{
    width: 60%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.rightContainer,
.leftContainer{
    text-align: center;
    border-top: 2px solid lightgray;
    border-bottom: 2px solid lightgray;
    padding: 50px;
}
.rightContainer{
    background-color: rgb(166, 100, 214);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-right: 2px solid lightgray;
}
.leftContainer{
    background-color: #fffff9;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-left: 2px solid lightgray;
}

.pRight1,
.pLeft1{
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
}
.pRight1{
color: orange;
}
.pLeft1{
    color: rgb(170, 169, 169);
}

.h2Right,
.h2Left{
    font-size: 32px;
    line-height: 42px;
    padding: 0 30px;
}
.h2Right{
    color: white;
}

.pRight2,
.pLeft2{
    color: rgb(170, 169, 169);
    padding-bottom: 60px;
    font-size: 12px;
}

.buttonRight,
.buttonLeft{
    border: 3px solid orange;
    border-radius: 50px;
    text-transform: uppercase;
    padding: 15px 20px;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
}
.buttonRight{
    background-color: rgb(166, 100, 214);
    color: white;
}
.buttonLeft{
    background-color: #fffff9;
    color: black;
}
`;
document.head.appendChild(style1);

//Body
let h1 = document.createElement(`h1`);
h1.innerHTML = `Choose Your Option`;
document.body.appendChild(h1);
h1.style.cssText = `text-align: center; font-weight: bold;`;

let p1 = document.createElement(`p`);
p1.innerHTML = `But I must explain to you how all this mistaken idea of denouncing`;
document.body.appendChild(p1);
p1.style.cssText = `
text-align: center; 
color: rgb(170, 169, 169);
margin-bottom: 60px`;

// All
let divAll = document.createElement(`div`);
divAll.classList.add(`mainContainer`);
document.body.appendChild(divAll);

// Left
let divLeft = document.createElement(`div`);
divLeft.classList.add(`leftContainer`);
divAll.appendChild(divLeft);

let pLeft1 = document.createElement(`p`);
pLeft1.innerHTML = `freelancer`;
pLeft1.classList.add(`pLeft1`);
divLeft.appendChild(pLeft1);

let h2Left = document.createElement(`h2`);
h2Left.innerHTML = `Initially <br> designed to`;
h2Left.classList.add(`h2Left`);
divLeft.appendChild(h2Left);

let pLeft2 = document.createElement(`p`);
pLeft2.innerHTML = `But I must explain to you how all this <br> mistaken idea of denouncing`;
pLeft2.classList.add(`pLeft2`);
divLeft.appendChild(pLeft2);

let buttonLeft = document.createElement(`button`);
buttonLeft.innerHTML = `start here`;
buttonLeft.classList.add(`buttonLeft`);
divLeft.appendChild(buttonLeft);

// Right
let divRight = document.createElement(`div`);
divRight.classList.add(`rightContainer`);
divAll.appendChild(divRight);

let pRight1 = document.createElement(`p`);
pRight1.innerHTML = `studio`;
pRight1.classList.add(`pRight1`);
pRight1.classList.add(`pRight1`);
divRight.appendChild(pRight1);

let h2Right = document.createElement(`h2`);
h2Right.innerHTML = `Initially <br> designed to`;
h2Right.classList.add(`h2Right`);
divRight.appendChild(h2Right);

let pRight2 = document.createElement(`p`);
pRight2.innerHTML = `But I must explain to you how all this <br> mistaken idea of denouncing`;
pRight2.classList.add(`pRight2`);
divRight.appendChild(pRight2);

let buttonRight = document.createElement(`button`);
buttonRight.innerHTML = `start here`;
buttonRight.classList.add(`buttonRight`);
divRight.appendChild(buttonRight);






/*
let doc = document;

doc.querySelector("html").setAttribute("lang", "en");

let head = document.head;

let meta = doc.createElement("meta");
meta.setAttribute("charset", "UTF-8");

let title = doc.createElement("title");
title.textContent = "JS 8";

let author = doc.createElement("meta");
author.setAttribute("name","author");
author.setAttribute("content","N.Huryan");

//шрифты
let link = doc.createElement("link");
link.setAttribute("href","https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap");
link.setAttribute("rel","stylesheet");
let style = doc.createElement("style");

let arrayHead = [meta, title, author, link, style];
for (let i=0; i<arrayHead.length; i++) {
    head.append(arrayHead[i]);
}

//body

let page = doc.createElement("div");
page.classList.add("page");

let script = doc.querySelector("script");

script.before(page);

let header = doc.createElement("header");
header.classList.add("header");
let containerHeader = doc.createElement("div");
containerHeader.classList.add("container");
let h1 = doc.createElement("h1");
h1.textContent = "Choose Your Option";
let pHeader = doc.createElement("p");
pHeader.textContent = "But I must explain to you how all this mistaken idea of denouncing"
;

containerHeader.append(h1);
containerHeader.append(pHeader);
header.append(containerHeader);
page.append(header);

let section = doc.createElement("section");
section.classList.add("creator");
let containerSection = containerHeader.cloneNode();

let sectionWrapper = doc.createElement("div");
sectionWrapper.classList.add("creator__wrapper");

let creatorBlock = doc.createElement("div");
creatorBlock.classList.add("creator__block");

let creatorName = doc.createElement("div");
creatorName.classList.add("creator_name");
creatorName.innerHTML = "<b>Freelancer</b>";

let h2 = doc.createElement("h2");
h2.innerHTML = "Initially designed to";

let pName = doc.createElement("p");
pName.innerHTML = "But I must explain to you how all this mistaken idea of denouncing";

let button = doc.createElement("button");
button.classList.add("button");
button.innerHTML = "Start here";

creatorBlock.append(creatorName);
creatorBlock.append(h2);
creatorBlock.append(pName);
creatorBlock.append(button);

let creatorBlock2 = creatorBlock.cloneNode(true);
creatorBlock2.classList.add("creator__block_active");

creatorBlock2.querySelector(".creator_name").innerHTML = "Studio";

sectionWrapper.append(creatorBlock);
sectionWrapper.append(creatorBlock2);
containerSection.append(sectionWrapper)
section.append(containerSection);

header.after(section);

style.innerHTML = `
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;
    color: #9FA3A7;
}
h1, h2 {
    font-size: 36px;
    line-height: 48px;
    color: #212121;
} 
h1 {margin-bottom: 10px;}
h2 {margin-bottom: 25px;} 
button {
    background: none;
    border: 0;
}
.button {
    font-family: "Open Sans", sans-serif;
    border: 3px solid #FFC80A;
    padding: 17px 33px;
    font-weight: bold;
    color: #212121;
    text-transform: uppercase;
    border-radius: 50px;
}      
.page {
    min-width: 800px;
}
.container {
    width: 800px;
    margin: 0 auto;
    text-align: center;
}
.header {
    margin-top: 122px;
    margin-bottom: 55px;
}
.creator {
    margin-bottom: 122px;
}
.creator__wrapper {
    display: flex;
}
.creator__block {
    border: 1px solid #E8E9ED;
    padding: 81px;
}
.creator__block:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
.creator__block:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
.creator__block_active {
    border-color: #8F75BE;
    background: #8F75BE;
    color: #FFFFFF;
}
.creator_name {
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 19px;
}
.creator__block_active .creator_name {
    color: #FFC80A;
}
.creator__block_active .button {
    color: #fff;
}
.creator__block p {
    margin-bottom: 58px;
}
*/
