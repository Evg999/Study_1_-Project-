<?php
    // echo'Привет, мир!';
    // let title = 'заголовок';
    $title ='Главная страница';
    $count = 5 + 5 * 3 / 7;
    // конкатинация склеивать
    // $name = 'Алексей' . 'Соколов';
    // echo $name;
    
$tripItems = [
    0 => [
        'h3' => 'Путешествия по России',
        'pic' => 'img/icons/moscow.png',
        'text' => 'Самые интересные уголки России Самые необычные маршруты'
    ],
    1 => [
        'h3' => 'Путешествия по Европе',
        'pic' => 'img/icons/big-ben.png',
        'text' => 'Разныестраные страны, разные культуры, исторические места и всё самое интересное в современной Европе'
    ],
    2 => [
        'h3' => 'Путешествия по Африке',
        'pic' => 'img/icons/pyramids.png',
        'text' => 'Дикая природа, крокодилы обезьяны, сафари на джипах, гостиницы на деревьях и самые опасные приключения ждут тебя!'
    ],
    3 => [
        'h3' => 'Путешествия по Северной Америке',
        'pic' => 'img/icons//north-america.png',
        'text' => 'Конечно, мы проедем через всю Америку и побываем как в главных туристических местах, так и в уголках, где почти не ступала нога человека.'
    ],
    4 => [
        'h3' => 'Путешествия по Южной Америке',
        'pic' => 'img/icons/south-america.png',
        'text' => 'Южная Америка-место, где хочет побывать каждый. Богатые районы и заброшенные фавелы, опасности и приключения, темпераментные люди и многое другое на страницах наших путешествий.'
    ],
    5 => [
        'h3' => 'Путешествия по Австралии',
        'pic' => 'img/icons/kangaroo.png',
        'text' => 'Мы побываем на отдельном континенте. Почему то думаю об Автралии, сразу представляешь кенгуру, хотя это совершенно не символ страны.'
    ]
];
            
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <!-- user-scalbel = no -->
     <title><?php echo "[Trips]: $title"; ?></title>
     <link rel="stylesheet" href="/style.css">
</head>
<body>
    <div id="up" class="wrapper">
        <!-- "up" якорь для стрелки -->
<?php
    include('inc/nav.php')
?>
        <main>
            <div class="picturelake">
                <div class="comon-center">
                    <div class="rocket-animation">
                        <img class="rocket" src="img/startup_rocket.png" alt="">
                        <img class="fire" src="img/startup_fire.png" alt="">
                    </div>
                    <div class="center-block">
                        <h2>Только красивые путешествия!</h2>
                        <a class="link picture-btn" href="#"><?php echo'Записаться'; ?></a>
                    </div>
                    <div class="scrool">
                        <div class="line-for-scrool"></div>
                        <div class="arrow-down"></div>
                    </div>
                </div>
                <div class="social-icons">
                    <img src="img/social/brands-and-logotypes.png" alt="">
                    <img src="img/social/facebook.png" alt="">
                    <img src="img/social/twitter.png" alt="">
                    <img src="img/social/vk.png" alt="">
                </div>
            </div>
            <article>
                <h1 id="main-head" class="main-head">Путешествуй Красиво!Блог в фотографиях </h1>
                <div class="text"> 
                    <p>
                        Представьте себе все лучшее, что есть в России: широкие просторы, разнообразная природа,
                        щедрая душа, девушки особой красоты, баня в конце концов. Добавьте к этому все то, чем так
                        привлекательна Москва: гастрономические рестораны, безудержные вечеринки, звезды ТВ
                        и инстаграмма вокруг. Взболтайте, но не смешивайте и получите Розу Хутор 2017 –
                        правильный баланс здорового лайфстайла и роскоши
                    </p>

                    <p>
                        Красная поляна также радует своей доступностью: перелет занимает 2,5 часа, иметь визу
                        необходимости нет, заказать такси можно через привычное приложение за 1400 руб., а время в
                        пути от аэропорта до отеля составляет менее часа! Ну, где еще такое есть? При этом местная
                        инфраструктура не просто ничуть не уступает Альпам, но и даже предвосхищает ожидания:
                        здесь вкуснее, уютнее и веселее. Я уже не говорю об удивительном контрасте температур –
                        наверху зима, а внизу лето!
                    </p>
                    
                    <p>
                        Более того, несмотря на весну за окном, успеть все это оценить лично совсем не поздно
                        – рекордное количество снега обещает продлить сезон на весь апрель, а курорт тем временем
                        предлагает на этот период очень привлекательные цены!
                    </p>
                    
                    <p
                        >В общем, какое бы время вы ни выбрали, Роза Хутор удивит и подарит желание говорить
                        о России с восторгом!
                    </p>
                </div>
            </article>
            <!-- div.bloks>div.bloks-item*6 -->
            <div class="bloks">
                <?php foreach($tripItems as $key => $value): ?>
                <section class="bloks-item">
                    <img src=<?php echo  $value['pic']; ?> alt="moscow">
                    <h3><?=  $value['h3']; ?></h3>
                    <div class="stick"></div>
                    <p>
                    <?=  $value['text']; ?>
                    </p>
                </section>
                <?php endforeach; ?>
            </div>
                <a href="#up" class="arrows"></a>
                <!-- стрелка вверх -->
            <!-- форма сайта -->
            <div class="forma-zayavku">
                <h2>Отправте нам вопрос и мы ответим Вам в ближайшее время</h2><br>
                <a class="link picture-btn" href="#">отправить вопрос</a>
            </div>
            <div class="register">
                <form method="GET" action="form.php" autocapitalize="off">
                    <fieldset>
                            <legend>Общая информация</legend>
                        <div class="form-item">
                            <input list="names" type="text" name="UserName" placeholder="Укажите Имя" maxlength="10" minlength="3" required> Твоё Имя
                        </div>
                        <datalist id="names">
                            <option value="Катя"></option>
                            <option value="Пётр Романов"></option>
                            <option value="Руслан"></option>
                        </datalist>
                        <!-- list=\ id= \подключаем выпадающие списки -->
                        <div class="form-item">
                            <input type="number" name="age" min="18" max="60" step=""> Твой Возраст
                        </div>
                        <div class="form-item">
                            <input type="date" name="date">  Дата регистрации
                        </div>
                    </fieldset>
                    <!-- fieldset позволяет обобщить форму, legend позваляет на рамке писать текст -->
                    <!-- РАДИОКНОПКИ -->
                    <div class="form-item">
                        <label>
                            <input type="radio" name="Контакт" value="telefon"><span>по телефону</span> 
                        </label>
                        <label>
                            <input type="radio" name="Контакт" value="email" checked><span>по email</span>
                        </label>
                        <label>
                            <input type="radio" name="Контакт" value="Whatsapp"><span>по Whatsapp</span>
                        </label>
                        <!-- label строчно-блочный элемент и в css через display: block все значения записать в столбик
                        label являеться связующем для всего содержимого, теперь не только на радиокнопку нужно нажать для выбора но и текст активен -->
                    </div>
                    <div class="form-item">
                        <input type="radio" name="persent" value="5" id="persent5"> 5%<br>
                        <input type="radio" name="persent" value="10"> 10% <br>
                        <input type="radio" name="persent" value="20"> 20%
                    </div>
                    <!-- позволяют делать выбор одного из нескольких\checked делает выбранным -->
                    <div class="form-item">
                        <input type="checkbox" name="persent[]" value="5" id="persent5"> 5%<br>
                        <input type="checkbox" name="persent[]" value="10"> 10% <br>
                        <input type="checkbox" name="persent[]" value="20"> 20%
                    </div>
                    <!-- persent=5
                    persent=10
                    persent=20
                    persent[5,10,20] общий масив -->
                    <!-- checkbox позваляе делать несколько выборов или отменять сделанный -->
                    <label for="persent5">!!!!Хочу скидку 5%!!!!</label>
                    <!-- если при нажатие на текст должен выбираться чекбокс а input не в блоке находим нужный инпут по id -->
                    <div class="form-item">
                        <input type="file" name="file" multiple>
                        <!-- multiple для возможности прекрипить несколько файлов -->
                    </div>
                    <!-- Выпадающий список -->
                    <div class="form-item">
                        <select name="delevery">
                            <option hidden>--Выбери способ доставки--</option>
                            <optgroup label="Бюджетные способы">
                                <option value="curier">Курьером</option>
                                <option value="post">Почта России</option>
                            </optgroup>
                            <optgroup label="Элитные способы">
                                <option value="expres">Экспресс Доставка</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="form-item">
                        <input type="hidden" name="group">
                     </div>
                    <div class="form-item">
                        <input type="password" name="pass"> Пароль
                    </div>
                    <div class="form-item">
                        <textarea name="text"></textarea>
                    </div>
                    <!-- textarea для многострочного текста
                    cols="30" rows="10" шаирина и высота по умолчанию, чаще задают с помощью высота и ширины в css
                    -->
                    <input type="submit" value="Зарегистрироваться">
                    <!--GET /form.php?UserName=Евгений&age=26  
                    POST не видно в адресе отправку-->
                    <!--submit кнопка\value изменить текст -->
                </form>
                <!--autocapitalize свойства отключает выподающие списки\ 
                для формы тег form1метод отправки2куда отпровлять,input строчно-блочный работает br или лучше в отдельные блоки
                placeholder текст внутру поля "замещяющий"
                maxlength\minlength максимальное\минимальное число вводимых символов
                min="18" max="60" для цефрового огранечения
                step= с каким шагом\submit кнопка отправить 
                required делает форму а именно поле обезательно к заполнению-->
            </div>
        </main>
        <section class="faq" id="faq">
            <div class="faq-item">
                <div class="faq-item-question">Вопрос</div>
                <div class="faq-item-answer">Ответ</div>
            </div>   
            <div class="faq-item">
                <div class="faq-item-question">Вопрос</div>
                <div class="faq-item-answer">Ответ</div>
            </div>  
            <div class="faq-item">
                <div class="faq-item-question">Вопрос</div>
                <div class="faq-item-answer">Ответ</div>
            </div>
        </section>
<?php
    include('inc/footer.php')
?>
    </div>
<?php
    include('inc/form.php')
?>   
    <div class="common-cookies">
        <div class="blok-cookies">
            <img src="img/pizza.png" alt="" class="pizza">
            <p class="text-cookies">
                Наш сайт использует файлы cookies для получения<br>
                статистики и улучшения качества работы сайта
            </p>
            <a href="#" class="i-understand">Я понял</a>
            <div class="krestik-box"></div>
        </div>
    </div>

    <!-- <script>
        // alert("Привет Мир");
        // alert('Вячеслав');
        console.log('привет')
    </script> -->
    <script src="/jquery-3.5.1.min.js"></script>
    <!-- библиотеку подключаем над обычным js -->

    <script src="/script.js"></script>
    <!-- подключаем фаел js -->
    <!-- <script src="/new.js"></script> -->
    <!-- подключаем фаел form.js -->
    <script src="/form.js"></script>
    <!-- <script src="/array.js"></script> -->
    <!-- <script src="/game.js"></script> -->
    <script src="/task.js"></script>
</body>
</html>