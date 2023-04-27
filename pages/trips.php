<?php
    // echo'Привет, мир!';
    // let title = 'заголовок';
    $title ='Главная страница';
    $count = 5 + 5 * 3 / 7;
    // конкатинация склеивать
    // $name = 'Алексей' . 'Соколов';
    // echo $name;
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
            <div class="picturelake">
                <div class="comon-center">
                    <div class="rocket-animation">
                        <img class="rocket" src="img/startup_rocket.png" alt="">
                        <img class="fire" src="img/startup_fire.png" alt="">
                    </div>
                    <div class="center-block">
                        <h2>Страница наших путешествий</h2>
                        <a class="link picture-btn" href="#"><?php echo'Записаться'; ?></a>
                    </div>
                    <div class="scrool">
                        <div class="line-for-scrool"></div>
                        <div class="arrow-down"></div>
                    </div>
                </div>
                <div class="social-icons">
                    <img src="/img/social/brands-and-logotypes.png" alt="">
                    <img src="/img/social/facebook.png" alt="">
                    <img src="/img/social/twitter.png" alt="">
                    <img src="/img/social/vk.png" alt="">
                </div>
            </div>
            <a href="#up" class="arrows"></a>
            <!-- стрелка вверх -->
            <!-- форма сайта -->
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
