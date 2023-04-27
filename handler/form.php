
    <!-- // print_r($_GET['contact']);

    // empty() проверка на пустату
    // isset() проверка на существование

    // htmlspecialchars -->
<?php
    // if ( !empty($_GET['userName']) && !empty($_GET['email']) ) {
    //     if(mb_strlen($_GET['email']) < 50) {
    //         echo"Привет, {$_GET['userName']}<br>";

    //         if(isset($_GET['contact']) ) {
    //             echo "Мы свяжемся с тобой следующим способом:<br><br>";

    //             foreach($_GET['contact'] as $value){
    //                 echo "-$value<br>";
    //             } 
    //         }else {
    //             echo 'Не станем с тобой связываться';
    //         } 
    //     }else{
    //       echo'длинный email';
    //     }
    // }else{
    //     echo'Ты не указал своё имя или email';
    // };


    // if(isset($_GET['tur']) ) {
    //     echo "Поздравляю ты выбрал один из туров";
    //     foreach($_GET['tur'] as $value){
    //      echo "-$value<br>";
    //     }
    // }else {
    //     echo 'ты не выбрал интересующий тебя тур';
    // } 
?>   
    <!-- // print_r($_SERVER);
    // echo $_SERVER; //не сработает
    // echo'привет я обработчик формы';// string

    // include($_SERVER['DOCUMENT_ROOT'] . '/inc/footer.php'); -->


    <!-- проявление картинки при выборе радиокнопки -->
<?php
    $tripPics = [
        'Путешествия по России' => '/img/Rus.jpg',
        'Путешествия по Европе' => '/img/evro.jpg',
        'Путешествия по Африке' => '/img/afrika.jpg'
    ];
    //ищем по ключу tur в массиве $tripPics и выводим картинку =>создаём новую переменную для того что бы её подставить в код для бэкраунда
        $tripPic = $tripPics[$_GET['tur']];
    
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
            include('../inc/nav.php')
        ?>
        <main>
            <div class="picturelake" style="background: url(<?php echo $tripPic ?>)"> 
                <h3 class='hi'>
                    <?php
                        if ( !empty($_GET['userName']) && !empty($_GET['email']) ) {
                            if(mb_strlen($_GET['email']) < 50) {
                                echo"Привет, {$_GET['userName']}<br>";

                                if(isset($_GET['contact']) ) {
                                    echo "Мы свяжемся с тобой следующим способом:<br><br>";

                                    foreach($_GET['contact'] as $value){
                                        echo "-$value<br>";
                                    } 
                                }else {
                                    echo 'Не станем с тобой связываться';
                                } 
                            }else{
                            echo'длинный email';
                            }
                        }else{
                            echo'Ты не указал своё имя или email';
                        };


                        if(isset($_GET['tur']) ) {
                            echo "Поздравляю ты выбрал один из туров - {$_GET['tur']}<br>";
                        }else {
                            echo 'Ты не выбрал интересующий тебя тур';
                        } 
                    ?>   
                </h3> 
            </div>
        </main>
        <?php
            include('../inc/footer.php')
        ?>
    </div>
    <script src="/jquery-3.5.1.min.js"></script>
    <!-- библиотеку подключаем над обычным js -->

    <script src="/script.js"></script>
    <!-- </script src="new.js"></script> -->
    <script src="/form.js"></script>
    <!-- <script src="/array.js"></script> -->
    <!-- <script src="/game.js"></script> -->
    <script src="/task.js"></script>
</body>
</html>