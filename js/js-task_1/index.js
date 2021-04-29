//2) результат выражений
console.log("***********2. результат выражений");
let a1=5 % 3,
    a2=3 % 5,
    a3=5 + '3',
    a4='5' - 3,
    a5=75 + 'кг',
    a6=785 * 653,
    a7=100 / 25,
    a8= 0 * 0,
    a9=0 / 2,
    a10=89 / 0,
    a11=98 + 2,
    a12=5 - 98,
    a13=(8 + 56 * 4) / 5,
    a14=(9 - 12) * 7 / (5 + 2),
    a15=+"123",
    a16=1 || 0,
    a17=false || true,
    a18=true > 0;
console.log(a1, typeof a1);
console.log(a2, typeof a2);
console.log(a3, typeof a3);
console.log(a4, typeof a4);
console.log(a5, typeof a5);
console.log(a6, typeof a6);
console.log(a7, typeof a7);
console.log(a8, typeof a8);
console.log(a9, typeof a9);
console.log(a10, typeof a10);
console.log(a11, typeof a11);
console.log(a12, typeof a12);
console.log(a13, typeof a13);
console.log(a14, typeof a14);
console.log(a15, typeof a15);
console.log(a16, typeof a16);
console.log(a17, typeof a17);
console.log(a18, typeof a18);
//3) Объем цилиндра
console.log("***********3. Объем цилиндра");
let VCilindra=(10 * a7) + "м3";
console.log(VCilindra, typeof VCilindra);
//4) Площадь круга с радиусом 5см
console.log("***********4. Площадь круга с радиусом 5см");
const p=3.14;
let r=5,
    SKruga=(r**2 * p) + "см2";
console.log(SKruga, typeof SKruga);
//5) Площадь трапеции с основаниями 5см и 7см, высотой 10см
console.log("***********5. Площадь трапеции с основаниями 5см и 7см, высотой 10см");
let aa=5,
    bb=7,
    h=10,
    STrap=(aa + bb) / 2 * h + "см2";
console.log(STrap, typeof STrap);
//6) решение уравнений
console.log("***********6. решение уравнений");
let a=8,
    b=3,
    //a+2(x-b)=16
    x1=(16-a+2*b)/2; 
    //b(x+15)=a+6x
    x2=(a-15*b) / (b-6);
    //x+2x+ax+bx=23780
    x3=23780/(3+a+b);
console.log(x1, typeof x1);
console.log(x2, typeof x2);
console.log(x3, typeof x3);
//8) функция, которая возвращает приветствие
console.log("***********8. возвращаем приветствие");
let nameUser=prompt("What is your name?");
alert(`Hello, ${nameUser} how are you doing today?`);
