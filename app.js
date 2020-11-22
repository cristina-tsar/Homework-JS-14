//Завдання 1

function ask(num1,num2,answer) {
    if (confirm(answer)) {
        return num1()
    } else {
        return num2()
    }
}

function showNum1() {
    console.log (8)
}

function showNum2() {
    console.log (6)
}

ask(showNum1, showNum2,"Are you confirm?")

//Задання 2.1
let askYear = +prompt('When were you born?','');
let yearNow = 2020;
function calcAge() {
    yearOld = yearNow - askYear;
    return yearOld;
}
console.log(calcAge())

//2.2
let userName = prompt('Як, Вас, звати?','');
let year = 60 - yearOld;
function yearUntilRetirement(year,userName) {
    if (yearOld < 60) {
        console.log (`${userName} вийде на пенсію через ${year} років`)

    } else if(yearOld >= 60){
        console.log (`${userName} вже пенсіонер.`) 
    }

}
console.log(yearUntilRetirement())

//Заввдання 3

let n = +prompt('Введіть порядковий номер дня.','');

function weekFn(n) {
    switch (n){
        case 1:
            console.log('Понеділок');
            break;
        case 2:
            console.log('Вівторок');
            break;
        case 3:
            console.log('Середа');
            break;
        case 4:
            console.log('Четвер');
            break;
        case 5:
            console.log('П"ятниця');
            break;
        case 6:
            console.log('Субота');
            break;
        case 7:
            console.log('Неділя');
            break;
        default:
            console.log(null);
    }
}
console.log(weekFn(n))








