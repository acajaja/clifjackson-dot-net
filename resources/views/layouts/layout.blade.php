<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1">
<title>clif jackson :: @yield('title')</title>
@stack('styles')
@stack('head-scripts')
</head>

<body>

<span id="page-top"></span>

<div id="content-box">
    @include('components.clouds')

    <div id="main-section">
        @yield('content')
    </div>
</div>

@include('components.footer')

@include('components.header')

@stack('body-scripts')

</body>
</html>
