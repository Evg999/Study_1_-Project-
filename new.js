// переменные
let num = 47, num2 = 10, result;

result = num + num2;

console.log(result)
// код читаеться сверху вниз

let years = 34;
let daysInYear = years * 365;
let hoursInMyAge = daysInYear * 24;
let secondsInMyAge = hoursInMyAge * 60 * 60;
console.log(hoursInMyAge)


let seconds = 425734850;
let fullSeconds = seconds % 60;
// %остаток от деления, какой остаток не поделился
// + - * / **возведение в степень 


// parseInt округляем до целых
let minutes = parseInt(seconds / 60) % 60;
// сколько минут не попало в час
let hours = parseInt(seconds / 60 / 60) % 24;
// сколько часов не поместилось в день
let days = parseInt(seconds / 60 / 60 / 24) % 31;
// сколько дней
let year = parseInt(seconds/ 60 / 60 / 24 / 31) % 365;
// сколько лет
console.log(secondsInMyAge);
// 12 лет 112 дней 7 часов 3 минуты 24 сек
// let text = '12 лет 112 дней ' + hours + ' часов ' + minutes + ' мин ' + fullSeconds + ' сек';
let text = `${year} лет ${days} дней ${hours} часов ${minutes} минуты ${fullSeconds} сек`;

// `апостроф позваляет подстовлять переменные`


console.log(text);
// конкатенация соеденение

let num3 = 7
if (num3 > 5) {
    console.log('super');
} else if (num3 < 5){
    console.log("супер второе условие сработало");
} else if (nam3 == 5){
    console.log("супер третье условие сработало");
} else {
    console.log("такого не может быть");
}



// prompt('Укажи сколько тебе лет');

let age = prompt('Укажи сколько тебе лет');
let word;
let lustNumber = age % 10;
let exception = age % 100 

if (exception >=11 && exception <= 14 ){
    // console.log(`${age} года`);
     word = 'лет'
} else if(lustNumber == 1) {
     word = 'год'
    // console.log(`${age} год`);
} else if (lustNumber >=2 && lustNumber <= 4 ){
    // console.log(`${age} года`);
     word = 'года'
}  else {
    // console.log(`${age} лет`);
     word = 'лет'
}

$('.center-block h2').text(`Мне ${age} ${word}`);

console.log(`Мне ${age} ${word}`);

// коньюнкция && И 
// дезъюнкция || ИЛИ