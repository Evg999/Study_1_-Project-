$('#questionForm').submit(function(e) {

    $('.error').remove();
    // удаление ошибки

    let fieldName = $('[name="userName"]');
    let fieldEmail = $('[name="email"]');
    let fieldNumber = $('[name="number"]');
    let fieldText = $('[name="texts"]');
    let fieldNameValue = fieldName.val();
    let fieldEmailValue = fieldEmail.val();
    let fieldNumberValue = fieldNumber.val();
    let fieldTextValue = fieldText.val();
    
    // []обращаемся 
    // val-value какое значение поля
    // полученный ответ запишем в переменную

    if (fieldNameValue === '' || fieldNameValue.length >= 10) {
        if (fieldNameValue === '') fieldName.before('<div class="error">Заполни поле!</div>');
        if (fieldNameValue.length >= 10) fieldName.before('<div class="error">Слишком длинное имя!</div>');
        
        e.preventDefault();
    }
    // // length кол-во букв и пробелов

    if (fieldEmailValue === '' || fieldEmailValue.length >= 30) {
        if (fieldEmailValue === '') fieldEmail.before('<div class="error">Заполни поле!</div>');
        if (fieldEmailValue.length >= 30) fieldEmail.before('<div class="error">Слишком длинное Email!</div>');
        
        e.preventDefault();
    }

    if (fieldNumberValue === '' || fieldNumberValue.length >= 20) {
        if (fieldNumberValue === '') fieldNumber.before('<div class="error">Заполни поле!</div>');
        if (fieldNumberValue.length >= 20) fieldNumber.before('<div class="error">Слишком длинный телефонный номер!</div>');
        
        e.preventDefault();
    }
    if (fieldTextValue === '' || fieldTextValue.length >= 50) {
        if (fieldTextValue === '') fieldText.before('<div class="error">Заполни поле!</div>');
        if (fieldTextValue.length >= 50) fieldText.before('<div class="error">Слишком длинный текст!</div>');
        
        e.preventDefault();
    }

});


// keyup - событие нажатие на клавишу
// $('[name="userName"]').keyup(function(e){
    $('input, textarea').keyup(function(e){
        

    let field = $(this);
    let len = field.attr('data-length')
    // .attr() позволяет получать значение атрибута в данном случае мы узнаём в выбранном поле атрибут data-length
    // относительно len будут считаться параметры заполнения
    let fieldValue = field.val();

    // prev() - предыдущий элемент
    // next()- следующий элемент

    field.prev('.error').remove();

    if (fieldValue === '' || fieldValue.length >= len) {

        if (fieldValue === ''){
            let fieldName = field.attr('placeholder');

            field.before(`<div class="error">Заполни поле <b>${fieldName}</b>!</div>`);
        } 
        if (fieldValue.length >= len) field.before('<div class="error">Слишком длинный текст!</div>');
        
        e.preventDefault();
    }
//  console.log(e.keyCode);
// е выступает как объект
});

// $('[name="email"]').keyup(function(e){


//     let fieldEmail = $('[name="email"]');
//     let fieldEmailValue = fieldEmail.val();

//     // prev() - предыдущий элемент
//     // next()- следующий элемент

//     fieldEmail.prev('.error').remove();

//     if (fieldEmailValue === '' || fieldEmailValue.length >= 30) {
//         if (fieldEmailValue === '') fieldEmail.before('<div class="error">Заполни поле!</div>');
//         if (fieldEmailValue.length >= 30) fieldEmail.before('<div class="error">Слишком длинный текст!</div>');
        
//         e.preventDefault();
//     }
// });

// $('[name="number"]').keyup(function(e){


//     let fieldNumber = $('[name="number"]');
//     let fieldNumberValue = fieldNumber.val();

//     // prev() - предыдущий элемент
//     // next()- следующий элемент

//     fieldNumber.prev('.error').remove();

//     if (fieldNumberValue === '' || fieldNumberValue.length >= 20) {
//         if (fieldNumberValue === '') fieldNumber.before('<div class="error">Заполни поле!</div>');
//         if (fieldNumberValue.length >= 20) fieldNumber.before('<div class="error">Слишком длинный текст!</div>');
        
//         e.preventDefault();
//     }
// });

// $('[name="texts"]').keyup(function(e){


//     let fieldText = $('[name="texts"]');
//     let fieldTextValue = fieldText.val();

//     // prev() - предыдущий элемент
//     // next()- следующий элемент

//     fieldText.prev('.error').remove();

//     if (fieldTextValue === '' || fieldTextValue.length >= 50) {
//         if (fieldTextValue === '') fieldText.before('<div class="error">Заполни поле!</div>');
//         if (fieldTextValue.length >= 50) fieldText.before('<div class="error">Слишком длинный текст!</div>');
        
//         e.preventDefault();
//     }
// });
    
// // нажатие на esc убирает .screen
$(window).keyup(function(eventObject){
        if( eventObject.which == 27 ){
            $('.screen').css('display', 'none');
        };
	
});


