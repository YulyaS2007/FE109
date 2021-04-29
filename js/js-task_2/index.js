//1) переменные
console.log("***********1. переменные");
let name=prompt("What is your name?"),
    age=prompt("How old are you?"),
    city=prompt("Where are you from?"),
    phone=prompt("What is your telephone number?"),
    email=prompt("What is your email?"),
    company=prompt("What is your company?");
console.log (`Меня зовут ${name}. Мне ${age} лет.`);
console.log (`Я проживаю в городе ${city} и работаю в компании`); console.log (`${company}.`);
console.log (`Мои контактные данные:`);
console.log (phone + ", " + email + ".");

//2) год рождения
console.log("***********2. год рождения");
let year=2021 - age,
    month=prompt("What month were you born?");
if (month>=5){
    year=2021 - age - 1;
} else{
    year=2021 - age;
}
console.log (`${name} родился в ${year} году.`);

//3) строка из 6-ти цифр
console.log("***********3. строка из 6-ти цифр");
let nambersSix="123123";
if ((nambersSix[0] + nambersSix[1] + nambersSix[2]) == (nambersSix[3] + nambersSix[4] + nambersSix[5])){
    console.log("true");
}
else{
    console.log("false");
}

//4) работа скрипта при a, равном 1, 0, -3
console.log("***********4. работа скрипта при a, равном 1, 0, -3");
let aa=0, aa1=1, aa2=-3;
if (aa>0){
    console.log("верно");
}
else{
    console.log("неверно");
}
if (aa1>0){
    console.log("верно");
}
else{
    console.log("неверно");
}
if (aa2>0){
    console.log("верно");
}
else{
    console.log("неверно");
}

//5) сумма, разность, произведение, частное
console.log("***********5. сумма, разность, произведение, частное");
let a=10,
    b=2;
console.log((a+b), (a-b), (a*b), (a/b));
if ((a+b)>1){
    console.log((a+b)**2);
}

//6) Если переменная a или переменная b
console.log("***********6. Если переменная a или переменная b");
if ((a>2 && a<11) || (b>=6 && b<14)){
    console.log("Верно");
}
else{
    console.log("Неверно");
}


 