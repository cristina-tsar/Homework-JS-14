/*let age = prompt ('Please, enter your age!','');
if (age < 18 || age > 45) {
    console.log ('You are good for us!');
} else {
    console.log ('Sorry, you are not the rigth man.');
}


let minute = prompt ('Enter number from 0 to 59.','');
if (minute >= 0 && minute <= 14) {
    console.log ('the first quarter of an hour.');
} else if (minute >= 15 && minute <= 29) {
    console.log ('the second quarter of an hour.');
} else if (minute >= 30 && minute <= 44){
    console.log ('the third quarter of an hour.');
} else if (minute >= 45 && minute <= 59) {
    console.log ('the last quarter of an hour.');
}

let a = prompt('Entre number a.','');
let b = prompt ('Enter number b.','');

if ((a > 3 && a < 12) && ( b >= 5 && b < 13)) {
    console.log ('true') 
}   else {
    console.log ("false");
}

 let userName = prompt ("Доброго дня! Введіть, будь ласка, Ваше ім'я!", "");//ім'я клієнта
 let userDeposit = prompt("Яку суму, Ви, бажаєте внести?", "");// сума депозиту
 let userMonth = prompt("На який термір, Ви, бажаєте внести цю суму? (Введіть кількість місяців)", "");//строк дії депозиту
 let userInterest = '';
 if (userMonth < 6) {
     userInterest = 15;
 } else if ( userMonth >= 6 && userMonth < 9) {
     userInterest = 16;
 } else if ( userMonth >= 9) {
     userInterest = 17;
 }
 let userPercentage =  ((userDeposit*(userInterest/100)/12)*userMonth);//зароблені гроші
 
 alert('Шановний '+ userName +', Ви внесли '
 + userDeposit +' грн., під '+userInterest
 +'% річних, на термін '+ userMonth 
 +' місяців. За цей період часу, Ви, заробите '
 + userPercentage +' грн.');*/
//Задача 1

let sale = 20;
let price = +prompt('Яка ціна товару в грн.?','');

function calcSum() {
   return price - price*(sale/100)
}

console.log (calcSum() + ' грн.')

//Задача 2

function max(a,b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log (max( 2,10));
console.log (max( 8,1));
console.log (max( 22,21));


//Задача 3

let a = +prompt ('Введіть ціну товару!','');
let b = +prompt ('Введіть кількість товарів!','');

function calcSum (a,b) {

    console.log (a * b)
}
calcSum(a,b)

//Задача 4

let a = +prompt('Введіть загальну суму покупок!','');
let sale;
function calcSum(a,sale) {
    
        if ( a < 1000) {
        console.log ( a = a - a * 0.03);
        sale = 3;
    } else if ( a >= 1000 && a < 5000) {

        console.log ( a = a - a * 0.05);
        sale = 5;    

    } else if ( a >= 5000) {
        console.log (a = a - a * 0.1);
        sale = 10;
    }
    console.log ('Ваша знижка -'+ sale + '%.'
    + ' Сума оплати становить - ' +  a );
}

calcSum(a, sale);
    






