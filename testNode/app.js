// const errorArr = require('./exercise');
const { format } = require("winston");
const winston = require("winston");


// console.log(errorArr);
// const chalk = require('chalk');
//
// arr = ["yellow", 'red', 'green'];
// arr1 = ['желтый','красный','зеленый']
//
// function ranColor(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }
//
// setInterval(() => {
//     let mascol = ranColor(0, 3)
//
//     console.log(chalk[arr[mascol]]([arr1[mascol]]));
// }, 1000)

// const arr = [0, 1, 2, 3, 4].reduce(function (previousValue, currentValue, index, array) {
//     return index
// })
//
// console.log(arr);
// const arrHome = [-2,0,1,2,3,4,5,8,9,11,13,15,18,22,25,28,29,30].reduce(function (previousValue, currentValue, index, array) {
//     return previousValue + currentValue
// })
//
//
// console.log(arrHome);
//
// var ranValues = [-2,13,0,1,2,3,4,5,8,9,11,15,18,22,25,28,29,30];
// ranValues.sort(function(a,b){return a - b});

// console.log(ranValues);
// const logger  = winston.createLogger({
//     transports: [
//         new winston.transports.Console(),
//         new winston.transports.File({filename: 'time.log'}),
//
//     ]
// })
//
//
// setInterval(()=> {
//     const date = new Date();
//     const {hours, minutes, seconds, milliseconds} = {
//         hours: date.getHours(),
//         minutes: date.getMinutes(),
//         seconds: date.getSeconds(),
//         milliseconds: date.getMilliseconds()
//     }
//
//     const time = `${hours}:${minutes}:${seconds}:${milliseconds}`;
//     logger.log(chalk.blue.bold(time))
// }, 1000)


const arr = [12, 13, 14, 15, 16, 17, 18, 19];

for(let i = 0; i <= arr; i++){
    if(i % 2 === 0){

        console.log(i);
    }
}
