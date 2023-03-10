<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, height=device-height">
<title>clif jackson page :: @yield('title')</title>
@stack('styles')
@stack('head-scripts')
<!-- <script src="/js/dims.test.js" type="text/javascript"></script> -->
</head>

<body>

    <span id="page-top"></span>

    <my-name>
        <p>clifjackson.net</p>
    </my-name>

    @include('components.clouds')

    <div id="content-box">
        <main-section>
            <div></div>
            <div>
                @yield('content')
            </div>
            <div></div>
        </main-section>
    </div>

    @include('components.footer')

    @include('components.header')

    @stack('body-scripts')

</body>
</html>
