//Завдання 1

let num1 = +prompt("","");
let num2 = +prompt ("","");

function foo(num1,num2,answer) {
    if (confirm(answer)) {
        if (num1 > num2){
        return num1;
    } else if ( num1 < num2) {
        return num2;
    }
    } else {
        if (num1 < num2){
            return num1;
        } else {
            return num2;
        }
    }  
}
console.log(foo(num1, num2,"Are you confirm?"));


//Задання 2.1
let askYear = +prompt('When were you born?','');
let yearNow = 2020;
function calcAge(yearOld) {
    yearOld = yearNow - askYear;
    return yearOld;
}
console.log(calcAge());

//2.2
let userName = prompt('Як, Вас, звати?','');
let year = calcAge();

function yearUntilRetirement(year,userName) {
    
    if (year < 60) {
        console.log (`${userName} вийде на пенсію через ${60 - year} років`)
    } else {
        console.log (`${userName} вже пенсіонер.`) 
    }
}

yearUntilRetirement(year,userName);
  

          







