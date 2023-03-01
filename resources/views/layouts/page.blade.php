<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, height=device-height">
<title>clif jackson :: @yield('title')</title>
@stack('styles')
@stack('head-scripts')
<script src="{{ asset('js/dims.test.js') }}" type="text/javascript"></script>
</head>

<body>

<span id="page-top"></span>

<div id="content-box">
    @include('components.clouds')

    <div id="main-section" class="page-wrap">
        <div></div>
        <div>
            @yield('content')
        </div>
        <div></div>
    </div>
</div>

@include('components.footer')

@include('components.header')

@stack('body-scripts')

</body>
</html>
