"use strict";
/*//1.
console.log("***********1.");
let str='aaa@bbb@ccc';
console.log(str.replace(/@/g, "!"));

//2.
console.log("***********2.");
let dateNow=new Date(),
    date=dateNow.getFullYear() + "-" + (dateNow.getMonth()+1) + "-" + dateNow.getDate();
console.log("Сегодняшняя дата " + date);
console.log("Преобразованная сегодняшняя дата " + date.substr(7,2) + "/" + date.substr(5,1) + "/" + date.substr(0,4));

//3.
console.log("***********3.");
let str3= "Я учу javascript!";
console.log("Через substr: " + str3.substr(2,3) + " " + str3.substr(6,10));
console.log("Через substring: " + str3.substring(2,5) + " " + str3.substring(6,16)); //конечная не включается
console.log("Через slice: " + str3.slice(2,5) + " " + str3.slice(6,16)); //конечная не включается

//4.
console.log("***********4.");
let arr=[4, 2, 5, 19, 13, 0, 10],
    sum=0;
for(let i=0; i<=arr.length-1; i++){
    sum=sum + Math.pow(arr[i],3);
}
console.log("Сумма кубов элементов заданного массива: " + sum);
console.log("Квадратный корень: " + Math.sqrt(sum));

//5.
console.log("***********5.");
let a=3,
    b=5,
    c=Math.abs(a-b);
console.log("Результат: " + c);

//6.
console.log("***********6.");
let dateNowTime=dateNow.getHours() + ":" + dateNow.getMinutes() + ":" + dateNow.getSeconds(),
    dateNowDate=twoNambers(dateNow.getDate()) + "." + twoNambers((dateNow.getMonth()+1)) + "." + dateNow.getFullYear();

function twoNambers(param) {
    if (param<10){
        return "0" + param;
    } else{
        return param;
    }
}

console.log(''.concat(dateNowTime, " ", dateNowDate));

//7.
console.log("***********7.");
let str7='aa aba abba abbba abca abea';
console.log(str7);
console.log(str7.match(/ab{1,}a/g));

//8.
console.log("***********8.");
let str8= "test@mail.ru";
function login(email) {
    return email.substring(0,email.indexOf("@"))
}
console.log("Логин: " + login(str8));

//9.
console.log("***********9.");
function cheсkPhone(phone) {
    let phoneNamber=/^[+]{1}[1-9]{3} \([0-9]{2}\) [1-9]{3}-[1-9]{2}-[1-9]{2}$/g;
    return phoneNamber.test(phone);
}
console.log(cheсkPhone("+375 (33) 123-45-67"));

//10.
console.log("***********10.");
function cheсkEmail(mail) {
    let emailUser=/^[a-z][a-z0-9\.\_\-]{1,}@[a-z]{2,11}\.[a-z]{2,11}/gi;
    return emailUser.test(mail);
}
console.log(cheсkEmail("t2596est@mail.ru"));

//11.
console.log("***********11. 1-ый способ");
let mapUser=[1, 3, 5, 8];
let mas = [
    ['m', 'y', 'e'], 
    ['x', 'a', 'm'], 
    ['p', 'l', 'e']
];
let end=[];
let masMin=mas.flat();
masMin.unshift("");

function word1(map) { 
    let j=0;
    for (let i=0; i<=masMin.length-1; i++){
        if(i==+map[j]){
        end.push(masMin[i]);
        j++;
        }
    }
    return end;
}
console.log(word1(mapUser));

console.log("***********11. 2-ой способ");
let mas2 = [
    ['m', 'y', 'e'], 
    ['x', 'a', 'm'], 
    ['p', 'l', 'e']
];
let end2=[];
let masMin2=mas2.flat();

function word2(map) { 
    let j=0;
    for (let i=0; i<=masMin2.length-1; i++){
        if((i)==+map[j]){
        end2.push(masMin2[i-1]);
        j++;
        }
    }
    return end2;
}
console.log(word2(mapUser));

console.log("***********11. 3-ий способ(ката)");
let grid=[
    ['m', 'y', 'e'], 
    ['x', 'a', 'm'], 
    ['p', 'l', 'e']
];
let indices=[1, 3, 5, 8];

function gridIndex(grid, indices) {
    let arr=grid.flat();
    let str='';
    for (let i=0; i<indices.length; i++){
        str+=arr[indices[i]-1] //str=str+arr[indices[i]-1]
    }
    return str;
}
console.log(gridIndex(grid, indices));

//12.
console.log("***********12.");
function testit(a,b){
    let c = a.concat(b)
    return c.sort();
}

let perem=testit([5,6,,6,8,7],[3,3,2,1]),
arr12=[];
for(i=0;i<perem.length;i++){
    if(perem[i]==perem[i+1]){
        continue;
    }
    arr12.push(perem[i]);
}
console.log(arr12);

//13.
console.log("***********13.");

let mail = "text@gmail.com";
let symbol = ["-", ".", "@", "_"]
function checkMail(mail) {
    let mailBefore = mail.slice(0, mail.indexOf("@"));
    let mailAfter = mail.slice(mail.indexOf("@")+1);

    if (mailBefore.length <=2) return
    else {
        if (!isNaN(mailBefore[0])) return //первая число
        let mailBeforeArray = mailBefore.split("");
        let count=0;
        for (let i=0;i<mailBeforeArray.length;i++) {
            if (!isNaN(mailBeforeArray[i])) count++;
        }
        console.log(count);
    }
}
checkMail(mail);*/

// Домашняя работа №7
//Калькулятор.
console.log("***********Калькулятор");

let Calc = function() {

    this.get = function(){
        this.a = +prompt("Введите число a");
        this.b = +prompt("Введите число b");
        this.oper = prompt("Введите операцию: +, -, /, *.");

        this.operation();
    }

    this.operation = function(){
        switch(this.oper){
            case '+':
                this.result = this.a + this.b;
                break;
            case '-':
                this.result = this.a - this.b;
                break;
            case '/':
            this.result = this.a / this.b;
                break;
            case '*':
            this.result = this.a * this.b;
                break; 
            default: this.result = 0;
        }
        this.show();
    }

    this.show = function(){
        document.write(this.a + " " + this.oper + " " + this.b + " " + "=" + " " + this.result + "<br/>");
    }
}
let calc = new Calc();
let on = confirm("Включить калькулятор?");
if (on){
calc.get();
}

//WorldCup.
console.log("***********WorldCup");

let WorldCup = function() {

    this.get = function(){
        this.argentina = "Аргентина";
        this.germany = "Германия";
        this.brazil = "Бразилия";
        this.france = "Франция";
        this.italy = "Италия";
        this.spain = "Испания";
        this.year = prompt("Введите год из предложенного списка: 1986, 1990, 1994, 1998, 2002, 2006, 2010, 2014, 2018.");
        this.information();
    }

    this.information = function(){
        switch(this.year){
            case '1986':
                this.info = this.argentina + "<br/>" + "Капитан: " + " Diego Maradona";
                break;
            case '1990':
                this.info = this.germany + "<br/>" + "Капитан: " + " Lothar Matthaus";
                break;
            case '1994':
            this.info = this.brazil + "<br/>" + "Капитан: " + " Dunga";
                break;
            case '1998':
            this.info = this.france + "<br/>" + "Капитан: " + " Didier Deschamps";
                break; 
            case '2002':
            this.info = this.brazil + "<br/>" + "Капитан: " + " Cafu";
                break;
            case '2006':
                this.info = this.italy + "<br/>" + "Капитан: " + " Fabio Cannavaro";
            case '2010':
            this.info = this.spain + "<br/>" + "Капитан: " + " Iker Casillas";
                break;
            case '2014':
            this.info = this.germany + "<br/>" + "Капитан: " + " Phillip Lahm";
                break; 
            case '2018':
            this.info = this.france + "<br/>" + "Капитан: " + " Hugo Lloris";
                break; 
            default: this.info = "Чемпионат не проходил в этом году!";
        }
        this.show();
    }

    this.show = function(){
        document.write(this.year + "<br/>" + this.info);
    }
}
let worldCup = new WorldCup();
worldCup.get();

//Light bulb.
console.log("***********Light bulb");

let LightBulb = function() {

    this.get = function(){
        this.power = +prompt("Ввведите мощность лампочки, Вт", 12);
        this.costEnergy = +prompt("Введите стоимость электроэнергии за 1Квт", 2);
        if (confirm("Включить лампочку?")){
            this.workTime = +prompt("Сколько времени работает лампочка (часов)?")
        } else{ 
            this.workTime = 0;
        }
        this.calculation();
    }

    this.calculation = function(){
        this.result = (this.power / 1000) * this.costEnergy * this.workTime;
        this.show();
    };
     
    this.show = function () {
        if (this.workTime == 0 || this.workTime == undefined) {
            console.log("Лампочка не включена");
        } else {
            console.log("Лампочка проработала - " + this.workTime + "ч, и стоимость потраченой электроэнергии составляет = " + this.result + " усл.ед.");
            }
        };
    };
     
    let kitchen = new LightBulb("Кухня");
    kitchen.get();
     
    let bedroom = new LightBulb("Коридор");
    bedroom.get();
     
    let bathroom = new LightBulb("Ванная");
    bathroom.get();
     
    let totalCost = kitchen.result + bedroom.result + bathroom.result;
     
    console.log("Всего стоимость потраченной электроэнергии составляет - " + totalCost + "усл.ед.");
 