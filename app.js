//Завдання 1
let numbers = [2, 3, 5, 12, 45];
console.log(numbers)
function numSum(num){
   let sum = 0; 
   for(let i =0; i < num.length; i++) {
       sum += num[i]
   }
   console.log(sum);
}
numSum(numbers)


//Завдання 2

let userNumbers = prompt('Введіть делька чисел через кому.','');
let num = userNumbers.split(",");
console.log(num)
num.sort(function(min, max){
    return max - min;
});
console.log(num);


//Завдання 3
let userNum = prompt('Введіть делька чисел через кому.','');
let numUser = userNum.split(",");
console.log(numUser);
let searchNum = prompt('Яке число бажаєте знайти?','');
console.log(searchNum);
let numx = searchNum;
function findNumber(numUser,numx) {
    if (numUser.indexOf(numx) != -1) {
   console.log('true')
}
}
findNumber(numUser,numx)

//Завдання 4
let arr = [2, 5, 6]
console.log(arr)
let max = arr.reduce(function(a, b){
    return Math.max(a, b);
})
let min = arr.reduce(function(a, b){
    return Math.min(a, b);
})

console.log(max, min)


