<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>clif jackson :: @yield('title')</title>
@stack('styles')
@stack('head-scripts')
</head>

<body>

<span id="page-top"></span>

<div id="content-box">
    <div id="floating-cloud-1"><img alt="" src="http://media.clifjackson.net/images/floating-cloud-BW-94x50.png"></div>
    <div id="left-side-middle-bg"></div>
    <div id="top-right-corner-bg"></div>

    <div id="main-section">
        @yield('content')
    </div>
</div>

@include('components.footer')

@include('components.header')

@stack('body-scripts')

</body>
</html>
