
//8.1) функция, которая возвращает приветствие
console.log("***********8. функция, которая возвращает приветствие");
function greet(nameUser2){
return "Hello, "+nameUser2+" how are you doing today?";
};
//9) функция, которая возвращает периметр прямоугольника
console.log("***********9. функция, которая возвращает периметр прямоугольника");
const areaOrPerimeter = function(l , w) {
return (l+w)*2;
};
//10) сколько бутылок беспошлинного виски придется купить
console.log("***********10. сколько бутылок беспошлинного виски придется купить");
function dutyFree(normPrice, discount, hol){
    return Math.floor(hol/(normPrice*discount/100));
};

