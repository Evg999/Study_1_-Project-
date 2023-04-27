//игра висилица


// 1. 1 игрок загадывает слово . через promt
//корова
let word = prompt('Загадай слово:');
// ['к', 'о', 'р', 'о', 'в', 'а']

// split() разбить строку на масив(внутрь указываем разделительнапример пробел в ковычках(' '),по буквам разделить(''))
// join() объединить элементы масива в строку
word = word.split('');
// console.log(word)



// ['_', '_', '_', '_', '_', '_']
let userWord =[];

let usedLetters = [];


for(let i = 0; i < word.length; i++){
    userWord.push('_');
};
// console.log(userWord)



//2. 2 пользователь (вводит букву)угадывает слово по буквам
let letter = prompt('Угадай первую букву:');

    word.forEach(function(value, index){
        if(value == letter){
            userWord[index] = letter;
        }  
    });
// пушим в пустой масив первую букву   
usedLetters.push(letter);

// console.log(userWord);

// _ о _ о _ _

// ограничение по попыткам к длине слова +3
let attempts = word.length + 3;
let counter = 1;

//3. Пока пользователь 2 не угадал слово, мы просим его ввести очередную букву


while(word.join('') != userWord.join('')){
    
    if(counter < attempts){
        letter = prompt(`
        Угаданные буквы: ${userWord.join(' ')} 
        Попытки: ${attempts - counter} 
        Угадай следующую букву:
        `);
        if(usedLetters.indexOf(letter) != -1){
            while(usedLetters.indexOf(letter) != -1){
            letter = prompt(`
            такая буква уже вводилась
            Угаданные буквы: ${userWord.join(' ')} 
            Попытки: ${attempts - counter} 
            Попробуй ещё раз:
        `);
            }
        }
        counter++;
        
        word.forEach(function(value, index){

            if(value == letter){
                userWord[index] = letter;
            }
            
        });  
        //проверяем не победил ли пользователь
        if(word.join('') == userWord.join('')){
            alert('Ты победил')
            break
        }
    } 
    else{
        alert('Попытки закончены, вы проиграли.')
        break
    }

}
// break; цикл оборвать
// alert('Ты победил!');

//4. введи букву.угаданные буквы:_ о _ о _ _


// доп фунуциональность.
// 1. ограничение по попыткам         обязательно
// 2. коментарий о загаданном слове
// 3. запись уже использованных букв и вывод ошибки при случае повтора        обязательно
// 4. в случае победы выводим кол-во попыток и само слово
// 5. в случае проигрыша выводим само слво и информацию о проигрыше