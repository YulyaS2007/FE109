//1.
console.log("***********1.");
function calculation1 (a,b) {
    return (a-b)/2;    
}
console.log("результат вычисления = " + calculation1(10,4));

//2.
console.log("***********2.");
function calculation2 (c) {
    console.log("результат возведения в квадрат = " + c**2);
    console.log("результат возведения в куб = " + c**3);
}
calculation2(3);

//3.
console.log("***********3.");
function MinMax (d,v) {
    if (d<v){
        console.log("Меньшее из двух чисел = " + d);
        console.log("Наибольшее из двух чисел = " + v);
    } else if (d>v){
        console.log("Меньшее из двух чисел = " + v);
        console.log("Наибольшее из двух чисел = " + d);
    } else{
        console.log("заданные числе равны");
    }
}
MinMax(5,9);

//3.2.
console.log("***********3.2.");
function min(x,y) {
    if ((x-y) < 0){
    return x;
    }else{
        return y;
    }
}
console.log("Меньшее из двух чисел = " + min(5,7));

function max(x,y) {
    if ((x-y) > 0){
        return x;
        }else{
            return y;
        }
    }
console.log("Наибольшее из двух чисел = " + max(5,7));

//4.
console.log("***********4.");
let array = [],
    cMax,
    userNamber1=+prompt("Введите первое целое число"),
    userNamber2=+prompt("Введите второе целое число");

if (userNamber1>userNamber2){ //проверяем условие, первое число должно быть меньше
    cMax=userNamber1;
    userNamber1=userNamber2;
    userNamber2=cMax;
}

function fits(param) { //определяем целое ли число ввели
    if (Number.isInteger(param) == false){
    return false;
    } else{
    return true;
    }
} 
function returnMass(userNamber1, userNamber2) {  //пушим в массив
    for(let i=userNamber1; i<=userNamber2; i++){
            array.push(i);
        }
    return array;
}

function userNamberEnter (){    //выводим полученный массив
    returnMass(userNamber1, userNamber2);
    console.log("Полученный массив = " + array);
}

if(fits(userNamber1) == true && fits(userNamber2) == true){
    userNamberEnter ();
} else {
    console.log("Вы ввели неверное значение");
}

//5.
console.log("***********5.");

let userNamb=prompt("Введите число");
function isEven(param){
    if (Number.isInteger(param) == false && param == 0){ //считает ноль четным???
        console.log("Вводимое значение не является целым числом");
    } else if(param % 2 != 0){
        return false;
    }else if(param % 2 == 0){
        return true;
    }
}

if (isEven(userNamb)==true){
    console.log("Введенное число - четное: true");
} else {
    console.log("Введенное число - нечетное: false");
};

//6.
console.log("***********6.");
arrEven = [];
function massFits(argue) {
    for(let i=0; i<=argue; i++){
        if (isEven(i) == true){
            arrEven.push(i);
        } 
    }
    return arrEven;
}
console.log(massFits(20));

//7.
console.log("***********7."); //Если пользователь ввел доп.параметр, непредусмотренный ф-цией по умолчанию - один любой символ,кроме пробела, то пирамида должна быть нарисована этим символом

let userNamberTree= +prompt("Enter a number from 1 to 10"),
    str="";
function pyramid(userNamberTree) {
    for(let i=1; i<=userNamberTree; i++){
        let j=i;
        while(j !== 0){
            str=str+i;
            j--;
        }
    str=str+"\n";
    }
}
if (isNaN(userNamberTree) || userNamberTree == ''  ||  userNamberTree == false){
    console.log("It is not a namber from 1 to 10");
} else { 
    pyramid(userNamberTree)
} 
console.log(str);

//8.
console.log("***********8. рекрусия");
function enterArr(array) {
    console.log(array[i]);
    i++;
    if (i<array.length){
        enterArr(array);
    }
}
let i=0;
enterArr([2, 5, -9, 15, 25,-8]);

//9.
console.log("***********9.");
function nowDate () {
    let dateNow = new Date(),
    hoursDay = dateNow.getHours();
    if(hoursDay>=6 && hoursDay<12){
        return ("Доброе утро, ") 
    } else if(hoursDay>=12 && hoursDay<18){
        return ("Добрый день, ");
    }
    else if(hoursDay>=18 && hoursDay<00){
        return ("Добрый вечер, " + hoursDay);
    } else{
        return ("Доброй ночи, " + hoursDay);
    }
}
let whatName = prompt("Как тебя зовут?");
console.log(nowDate () + whatName + " =)");