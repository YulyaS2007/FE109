//1) 
console.log("***********1.");
let i=1;
while (i <= 50){
    console.log(i);
    i++
}
i=35;
while ((i <= 35) && (i>=8)){
    console.log(i);
    i--
}

//2) 
console.log("***********2. в документе");
i=89;
while (i>=11){
    document.write(i + "<br/>");
    i--
}

//3) 
console.log("***********3.");
let a=100,
    sum100=0;
for (i=0; i<=a; i++){
    sum100=sum100+i;
}
console.log(sum100);

//4) 
console.log("***********4.");
a=5,
sum=0;
for (i=1; i<=a; i++){
    sum=0;
    for (let j=1; j<=i; j++){
        sum=sum+j;
    }
    console.log("Sum" + i + "=" + sum);
}

//5) 
console.log("***********5.");
for (i=8; i<=56; i++){
    if (i%2 != 0) continue;
    console.log (i);
}   

//6) 
console.log("***********6.");
a=10;
let mult=0;
for (i=2; i<=a; i++){
    for (j=2; j<=a; j++){
    console.log(i + "*" + j + " = " + i*j);
    } 
}

//7) 
console.log("***********7.");
let n=1000,
    num=0;
while (true){
    if(n>=50){
        n=n/2;
        num++;
    } else {
        break;
    }
}
console.log(n, " num = " + num);

//8) 
console.log("***********8.");
num=0;
sum=0;
while (true) {
    let namberUser= +prompt("Please, enter the number");
    if (isNaN(namberUser)){
        alert("Please, enter the number");
    } else if(namberUser == ''  ||  namberUser == false){
        break;
    } else{
        sum=sum+namberUser;
        num++
    } 
}
console.log("Общая сумма = " + sum, "Среднее арифметическое введённых чисел = " + sum/num);

//9) 
console.log("***********9.");
let z = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57";
let massZ= z.split(" ");
let max=massZ[0], min=massZ[0];
for (i=0; i<=massZ.length; i++){
    if (massZ[i] > max){
        max=massZ[i];
    }
    if (massZ[i] < min){
        min=massZ[i];
    }
}
console.log(`MAX ${max}, MIN ${min}`); 

//10) 
console.log("***********10.");
n=+prompt("Пожалуйста, укажите число");
document.write("***********10." + "<br/>");
namb = [];
num=0;
sum=0;
let str=n.toString();
for(i=0; i<str.length; i++){
    namb.push(str.charAt(i));  //a.
    num++; //b.
    sum=sum+ +str[i];   //c.
}
document.write("a. цифры из числа = " + namb);
console.log("b. количество цифр = " + num);
console.log("c. сумма цифр = " + sum );
console.log("d. обратный порядок цифр = " + namb.reverse()); //d.
