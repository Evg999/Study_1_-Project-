// let slides = $('.slider-line-item');
// let counter = 0;


// $('.slider-line').click(function(){
//     slides.eq(counter).css('display', 'none');
//         // первый скрываем, второй показываем, первый элемент в js начанается с 0      let counter = 0;
//         // eq даёт возможность обратиться к нужному элементу в группе

//         // counter++;
//         // counter += 1;
//         // counter = counter + 1;
//         // перезаписываем значение 1
//         // пребавить единицу ++ увеличивает значение на единицу

//         // если значение counter равен 4 то мы пакажем 0 слайд
//     if (counter == slides.length - 1){
//         // slides.length (.length) -(минус) 1 = последний порядковый номер последнего элемента в масиве
//         slides.eq(0).css('display', 'flex');
//         counter = 0;
//         // counter опять равен 0
//     } else {
//         slides.eq(++counter).css('display', 'flex');
//     }
//         // а в иных случаях то что делали ранее 
//         // ++counter записываем ++ до переменной , тогда переменную counter++;counter += 1; НЕ НУЖНО создавать

// });

// зацикленный горизонтальный слайдер справа
let counter = 0;
// cчетчик

let slidesAll = $('.slider-line-item').length
// длинна всего масива слайдов

let firstSlide = $('.slider-line-item').eq(0).clone();
//clone() кланируем элемент eq(0)выбрали какой элемент
$('.slider-line').append(firstSlide);
// prepend вставка в начало\ append вставка в конец
// какой элемент мы вставляем

$('.slider-right-button').click(function(){

    if (counter != 6){
        counter++;  //если != не равно  тогда мы прибавляем +100

        $('.slider-line').animate({
            'left' : (-100 * counter) + '%'
        }, 500);
    }else{
        counter++;

        $('.slider-line').animate({
            'left' : (-100 * counter) + '%'
        }, 500, function(){
            $('.slider-line').css('left', 0);
        }); //function(){}); функция по заверщению другой функции

        counter = 0; //если равен 6 возвращяем в 0
    } 
    
});

$('.slider-left-button').click(function(){

    if(counter == 0){
        counter = slidesAll;
        // счётчик высчитает \= slidesAll(справа) всю длинну масива и подставит её в counter т.к. мы кланировали элемент задаёт знаечение -700
        //let firstSlide = $('.slider-line-item').eq(0).clone();
        //clone() кланируем элемент eq(0)выбрали какой элемент

        $('.slider-line').animate({
            'left' : (-100 * counter) + '%' //при клики с первого слайда (значение его 0 перескакиваем на 700(клон) мнгновенно)
        }, 0, function(){ // и далее делаем функцию по звершению для плавного переходна на 600
            $('.slider-line').animate({
                'left' : (-100 * --counter) + '%'//-100 * 700=600(это ) (--counter для уменьшения на 1или100) делаем это уже за 500мсек
            }, 500);
        })

    } else{
        // во всех остальных случаях counter--;( на одно значение меньше)
        counter--;
        $('.slider-line').animate({
        'left' : (-100 * counter) + '%'
        }, 500);
    }
    
});

