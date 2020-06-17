<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="utf-8">
        <title>@yield('title')</title>
        <link rel="stylesheet" href="/css/styles.css">
    </head>
    <body>
        <div class="container">
        @yield('content')
        </div>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="/js/main.js"></script>
    </body>
</html>