//1.
console.log("***********1.");
let massivOne= [1, 2, 3, 4, 5];
for (let i=1; i<=massivOne.length; i++){
    console.log(i);
}

//2.
console.log("***********2.");
let massivTwo=[-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (i=23; i < massivTwo.length; i++){
    if (massivTwo[i] > -10 && massivTwo[i] < -3){
        console.log(massivTwo[i]);
    }
}

//3.
console.log("***********3.");
let massivThree=[],
    result=0;
for(i=23; i<=57; i++) {
    massivThree.push(i);
    result=result+i;
}
console.log("Массив - " + massivThree, "Сумма элементов массива = " + result);

//4.
console.log("***********4.");
let massivFour=["10", "20", "30", "50", "235", "3000"];
for (i=0; i<massivFour.length; i++){
    if(massivFour[i][0]=="1" || massivFour[i][0]=="2" || massivFour[i][0]=="5"){
        console.log(massivFour[i]);
    }
}

//5.
console.log("***********5.");
let massivFive=["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
for (let i=0; i<massivFive.length; i++){
    if (massivFive[i] == "СБ"){
        document.write(massivFive[i] + "<b>" + "<br/>"); //не выводит жирным субботу
        console.log(massivFive[i].bold());
    } else if (massivFive[i] == "ВС"){
        document.write(massivFive[i] + "<b>" + "<br/>");
        console.log(massivFive[i].bold());
    } 
    else{
        document.write(massivFive[i] + "<br/>");
        console.log(massivFive[i]);
    }
}

//6.
console.log("***********6.");
let massivSix=[123, 15, "Goodbye"];
massivSix.push("world");
console.log("Последний элемент массива: " + massivSix[massivSix.length-1]);

//7.
console.log("***********7.");
num=0;
sum=0;
let massivSeven=[];
while (true) {
    let namberUser= +prompt("Please, enter the number");
    if (isNaN(namberUser)){
        alert("Please, enter the number");
    } else if(namberUser == ''  ||  namberUser == false){
        break;
    } else{
        massivSeven.push(namberUser);
    } 
}
console.log("Массив пользователя " + massivSeven);
let massivSevenS=massivSeven.sort(function(a,b){
    return a-b;
});
console.log("Отсортированный массив пользователя " + massivSevenS);

//8.
console.log("***********8.");
let massivEight=[12, false, "Текст", 4, 2, -5, 0];
let massivEightR=massivEight.reverse();
console.log(massivEightR);

//9.
console.log("***********9.");
let massivNine=[5, 9, 21, , , 9, 78, , , , 6];
    num=0;  
for(i=0; i<massivNine.length; i++){
    if(massivNine[i]==undefined){
        num++;
    }
}
console.log("Количество нулевых элементов в массиве = " + num);

//10.
console.log("***********10.");
let massivTen=[48,9,0,4,21,2,1,0,8,84,76,8,4,13,2];
sum=0;
let firstZero=massivTen.indexOf(0), //ищем первый ноль
    lastZero=massivTen.lastIndexOf(0); //ищем ноль с конца
console.log(massivTen);
for(i=firstZero; i<lastZero; i++){
    sum=sum+massivTen[i];
}
console.log("Сумма элементов массива = " + sum);

//11.
console.log("***********11.");
let userNamber= +prompt("Enter a number from 1 to 10"),
    str="";
if (isNaN(userNamber) || userNamber == ''  ||  userNamber == false){
    console.log("It is not a namber from 1 to 10");
} else { 
    for(i=1; i<=userNamber; i++){
        let j=userNamber-i,
            z=i;
        while(j !== 0){
            str=str+" ";
            j--;
        }
        while(z !== 0){
            str=str+"^ ";
            z--;
        }
    str=str+"\n";
    }
} 
console.log(str);


