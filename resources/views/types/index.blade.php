<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="utf-8">
        <title>Typing Game</title>
        <link rel="stylesheet" href="css/typing.css">
    </head>
    <body>
        <header class="container">
            <div id="target">Enterを押して開始します!!</div>
            <div id="hiragana">fight!!!</div>
            <div id="reading">fight!!!</div>
            <div class="info clearfix">
                <div class="letter">正答数: <span id="score">0</span></div>
                <div class="miss">ミス数: <span id="miss">0</span></div>
            </div>
        </header>
        <main class="container">
            <div class="enemy-area clearfix"></div>
        </main>
        <footer>
            <div class="enemys"></div>
        </footer>
        <video id="video">
            <source src="music/swing2.mp3">
        </video>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script>
            let words = {!! json_encode($collection) !!};
        </script>
        <script src="js/typing.js"></script>
    </body>
</html>