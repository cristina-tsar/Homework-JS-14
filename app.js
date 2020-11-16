let age = prompt ('Please, enter your age!','');
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
 
 alert('Шановний '+ userName +', Ви внесли '+ userDeposit +' грн., під '+userInterest+'% річних, на термін '+ userMonth +' місяців. За цей період часу, Ви, заробите '+ userPercentage +' грн.');
    






