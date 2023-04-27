// console.log('Привет')
// // выводит сообщение в console
// console.log('Вячаслав')
// $('body').css('background', 'lightgray' );





// к медиа запросу 890 left 0 CSS/зверху вниз

// Событие по клику
// $('.menu-button').click(function(){
//     $('.nav').slideToggle(300);
// })

let counter = 0;
// с права на лево
$('.menu-button').click(function(){
    if (counter == 0){

         $('.nav').animate({
            'left' : "0"
            }, 500);
            counter++

        }else{

            $('.nav').animate({
                'left' : '100%'
            }, 500);
            counter--
            
        } 
        
    });

    

// // событие буду кликать на меню и оно будет менять цвет.СОБЫТИЕ
// $('header').click(function(){
//     $('header').css('background', 'green')
// });



// $('.main-head').click(function(){
//     $('.text').css('display', 'block')
// });
// при клики через css включаем показывать текст


    // плавное появление вниз 1000ms=1sek

    // .slideUp- плавный показ
    // .slideDown-плавное скрытие
    // .slideToggle-по клику плавный паказ и скрытие
    // проявление сверху вниз

     // fadeIn
    // fadeOut
    // fadeToggle
    // проявляем через opacity(прозрачность)


    // раскрытие текста при клики на main-head и закрытие его
    $('.main-head').click(function(){
        $(this).parents("main").find(".text").slideToggle(1000);
        // $('.text').slideToggle();
    });

    // кнопка по середине и header-link stick-center perehod "Оставить заявку" одинаковая функция попадаем на фору заявки .screen
    $('.picture-btn, .perehod').click(function(e){
        // отмена поведения браузера по умолчанию(например для ссылок)
        e.preventDefault()

        // console.log('click')
        // прописывать для проверки самого себя

        // $('.screen').css('display','flex')
        $('.screen').css('display', 'flex').hide().fadeIn()
    });
    // hide=css('display','none') СКРЫТЬ ЭЛЕМЕНТ
    // show=ПОКАЗАТЬ ЭЛЕМНТ

    // krestik при клики скрывается
    $('.krestik-box').click(function(){
        $(this).parents('.screen').fadeOut() 
        // $('.screen').fadeOut() 
    });
    
    // $('.perehod').click(function(e){
    //     e.preventDefault()
    //     $('.screen').css('display', 'flex').hide().fadeIn() 
    // });

    // вопрос-ответ раскрытие и закрытие ответа
    $(".faq-item-question").click(function(){
        // $(this) то на что я кликую
        // find() искать внутри элемента
        // parents() искать до ближайшего родителя
        // next добраться следующий элемент

        // $(this).css("background", "green");
        // красим тот что кликаем

        // $(this).next().slideToggle();

        // $(".faq-item-answer").slideToggle();
        // открываються все разом

        $(this).parents(".faq-item").find(".faq-item-answer").slideToggle();
    });

    // $(".header").css("display", "flex").hide().slideDown(1000);

    // уменьшаем в css bottom и для показа через js выставляем его на 0 и всплывающий низ показан
    $(".common-cookies").animate({
        "bottom": 0
    }, 1000);

    // по клику "я понял" и на крестик скрытие окна
    $(".i-understand, .krestik-box").click(function(){
        $(this).parents(".common-cookies").fadeOut()
    });
    
    // шапка всплывает
    $(".header").animate({
        "top": 0
    }, 1000);

    // кнопка вверх при загрузке на искасок вылитает
    $(".arrows").animate({
        "right": "100px",
        "bottom":"100px"
    }, 1000);

    // кнопка вверх скролит вверх
    $(".arrows").click(function(e){
        e.preventDefault();

        $('html, body').animate({
        scrollTop: 0
        }, 1000);
    });

//    header-link stick-right about-scroll"О Нас" скролит до нужного раздела .main-head
   
// $(".about-scroll").click(function(e){
//         e.preventDefault();

//         $('html, body').animate({
//             scrollTop: $('.main-head').offset().top - $('.header').outerHeight()
//         }, 1000);

//     });
// header-link faq-scroll"Вопросы и ответы" скролит до .faq вопросы и ответ
   
    // $(".faq-scroll").click(function(e){
    //     e.preventDefault();

    //     let offTop = $('.faq').offset().top
    //     let outHeight = $('.header').outerHeight()
    //     // переменная

    //     $('html, body').animate({
    //         scrollTop: offTop - outHeight
    //     }, 1000);
    // });

// общая функция
    $('a').click(function(){
        let href = $(this).attr('href');
        console.log('href');

        let offTop = $(href).offset().top;
        let outHeight = $('.header').outerHeight()

        $('html, body').animate({
            scrollTop: offTop - outHeight
        }, 1000)
        
    });
    