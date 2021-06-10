// Домашняя работа №7
//Калькулятор.
/*console.log("***********Калькулятор");

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
*/
//Light bulb.
console.log("***********Light bulb");

let LightBulb = function(name) {

    this.onOf = function() {
        this.name = name;
        if (confirm(`Включить лампочку (${name})?`)){ //да
            this.workTime = +prompt(`Сколько времени работает лампочка (${name}) (часов)?`);
            this.get();            
        } else{ // нет
            this.workTime = 0 || this.workTime == undefined;
            console.log(`Лампочку (${name}) не включили!`);
            this.result = 0;
        }
    }

    this.get = function(){     
        this.power = +prompt(`Ввведите мощность лампочки (${name}), Вт`, 12);
        this.costEnergy = +prompt(`Введите стоимость электроэнергии лампочки (${name}) за 1Квт`, 2);
    
        this.calculation();
    }

    this.calculation = function(){
            this.result = (this.power / 1000) * this.costEnergy * this.workTime;
            this.show();  
    };
     
    this.show = function () {
        if (this.workTime == 0 || this.workTime == undefined) {
            console.log(`Лампочка (${name}) не включена`);
        } else {
            console.log(`Лампочка (${name}) проработала - ` + this.workTime + "ч, и стоимость потраченой электроэнергии составляет = " + this.result + " усл.ед.");
            }
        };
    };
     
let kitchen = new LightBulb("Кухня");
kitchen.onOf();
    
let bedroom = new LightBulb("Коридор");
bedroom.onOf();

// Домашняя работа №10: 1-ая часть:
    
/*let Lamp = function(name) {
    this.name = name;
}*/

let Bathroom = function(name){

    LightBulb.apply(this, arguments);

    this.workTime = 24;

    this.onOf = function() {
        this.name = name;
        this.get();  
    }

    this.show = function() {
        console.log(`Лампочка (${name}) работает постоянно, и стоимость потраченой электроэнергии в сутки составляет = ` + this.result + " усл.ед.");
    }
}

let bathroom = new Bathroom("Ванная");
bathroom.onOf();
    
let totalCost = kitchen.result + bedroom.result + bathroom.result;
    
console.log("Всего стоимость потраченной электроэнергии составляет - " + totalCost + "усл.ед.");
 