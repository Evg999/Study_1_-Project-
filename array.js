// let tomato = 'tomato';
// let apple = 'apple';
// let potato = 'potate';
// let pineapple = 'pineapple';

let position = 4;
// массив
let basket = ['tomato', 'apple', 'potato', 'pineapple','cheese', 'meet', 'milk'];

// обращяться к элементам к массива

console.log( basket );

console.log( basket.length );
// .length свойство масива (длинна)

console.log( basket[0] );
// обращяться к элементам к массива[0 ...]

console.log( basket[position - 1] );
// млжем подставлять переменны и производить вычисления

console.log( basket[basket.length - 1] );
// как получить последний элемент масива (длинна - 1)


// Push()добавить в конец
// Pop()удалить последний элемент 
// shift()удалить из начала масива
// unshift()добавить в начало
// splice() вырезать часть масива
// как добавить

basket.push('pizza');
basket.pop();
basket.unshift('chiken');
basket.shift();

console.log( basket );

// console.log( basket.splice(1, 2) );
// указать какие элементы вырезать


// цикл
// forEach - цикл, который переберает элементы масивы
// while-цикл перебора до срабатования определённого условия

basket.forEach(function(value, index){
    // 1. итерация value= tomato, index=0
    // 2. итерация value= apple, index=1
    // 10 % 2(как узнать чётное число число или нет)
    // 9 % 2 число не чётное

    if(index % 2 !=0){
        // !=не равнаять нулю \== равно чётное
        console.log(`${index} = ${value}`);
    }
    
});
// действия которые будут производиться с каждым элементом масивом или с отдельным элементом
// как обратиться к определённому элементы value, index(имя и числительное 0++)
// 1. итерация (первое срабатования цикла)



// чётные элементы масива

// let counter = 0;

// while( counter < basket.length ){
//     console.log(`${counter} = ${bascet[counter]}`);
//     counter++;

// }

let name = prompt('Твоё имя!');
while(name != "Алексей"){
    name = prompt('Такого имени нет. Введи имя.');
}





// let i = 0;
// while(i < 10){
//     console.log(i);
//     i++;
// }


// for(начальное состояние счётчика; условие; изменение счётчика в конце итерации)
for(let i = 0; i < 10; i++){
    console.log(i);
}

// true бесконечный цикл(не используем)








// task
// 1.	Найти сумму  1+4+7+10+...+112. 

let summa = 0;
for(let b = 1; b <= 112; b=b+3){
    summa = summa + b;
    // summa += b
}
console.log(summa);



// 2.	Найти сумму натуральных чисел от a до b, где a и b вводит пользователь. 
// В случае некорректных a и b (например, a>b) вывести сообщение 'Сумма не существует'.
// Пример: пользователь ввел числа 5 и 8. Тогда мы должны получить сумму 5+6+7+8

let f = +prompt('Введите число', "");
let s = +prompt('Введите число', "");
let sum = 0;
while(f > s){
    s = +prompt('Сумма не существует,новое значение Б');
}

for(let b = f; b <= s; b++){
    
    sum = sum + b;
}
console.log(sum)


