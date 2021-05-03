//1.
console.log("***********1.");
let massivOne= [1, 2, 3, 4, 5];
for (let i=1; i<=massivOne.length; i++){
    console.log(i);
}

//2.
console.log("***********2.");
let massivTwo=[-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
let j;
for (i=0; i < massivTwo.length; i++){
    if (massivTwo[i] > -10 && massivTwo[i] < -3){
        console.log(massivTwo[i]);
    }
}

//3.
console.log("***********3.");
let massivThree=[];
for(i=0; i<=57, i++;) {
    massivThree.push(i);
}
console.log(massivThree);

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
for (i=0; i<=massivFive.length; i++){
    if (massivFive[i] == "СБ" || massivFive[i] == "ВС")
    massivFive[5].bold();
    massivFive[6].bold();
}
console.log(massivFive);
document.write(massivFive);

//6.
console.log("***********6.");
let massivSix=[123, 15, "Goodbye"];
massivSix.push("world");
console.log(massivSix[massivSix.length-1]);

//7.
console.log("***********7.");

//8.
console.log("***********8.");
let massivEight=[12, false, "Текст", 4, 2, -5, 0];
let massivEightR=massivEight.reverse();
console.log(massivEightR);

