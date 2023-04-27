<?php
//$auto = array(); вместо квадратный скобок записи масива в предыдущих версиях

    $auto = [
        // 0 => 'bmw', 
        // 1 => 'mercedes', 
        // 2 => 'Vw', 
        // 3 => 'mitsubishi', 
        // 4 => 'mazda'
        'bmw' => [
            'x1', 
            'x2', 
            'x3'
        ],
        'mercedes' => [
            'C320', 
            'E200', 
            'GLK'
        ],
        'Vw'=> [
            'polo'=> [
                'width' => 250,
                'height' => 1500,
                'power' => 140
            ],
            'toureg' => [
                'width' => 300,
                'height' => 180,
                'power' => 220
            ],
            'tiguan'=> [
                'width' => 260,
                'height' => 170,
                'power' => 160
            ]
        ], 
        'mitsubishi', 
        'mazda',
    ];

    // auto.push('lada');js
    //auto.includes('lada');js поиск

    array_push($auto, 'lada'); 

    // echo $auto[1];//доступ к элементам масива

    // echo $auto[count($auto) - 1];
    // доступ к последнему элементу масива (длина масива -1), count($auto) вернёт нам длинну масива


    // echo $auto; //функция которая принемает только строки и цифры (классы и масивы не принемает)


    // print_r($auto);
    // var_dump($auto) //позволяет вытащить длинну string
    // print_r($auto['mercedes']);//выводим именно подмасив
    // print_r($auto['Vw'][1]); //выводим определённый элемент в помасиве
    // print_r($auto['Vw']['polo']['power']);// выводим из подмасива внутри подмасива



    // array_push(); добавить в конец масива
    // array_pop(); удалить с конца масива
    // array_unshift(); добавить в начало масива
    // array_shift(); добавить в конец масива
    // array_search(); писк по масиву

    // print_r(array_search('Vw', $auto)); //получаем порядковый номер элемента в масиве



    // циклы

    // auto.eachEach(function(value, index) {

    // }); JS

    // foreach($auto as $key => $value) { //ключ и значение
    //     print_r($value); // выводим ключи или значение нашего масива

    // }

    // //перебераем вложенный масив
    // foreach($auto['Vw'] as $key => $value) { //ключ и значение
    //     print_r($value); // выводим ключи или значение нашего масива
        
    // }

    //как вывести определённый параметр
    foreach($auto['Vw'] as $key => $value) { //ключ и значение
        print_r($value['power'] . '<br>'); // выводим ключи или значение нашего масива
    }
    // foreach()
    // while()
    // for()
?>