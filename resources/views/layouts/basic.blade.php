<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, height=device-height">
<title>clif jackson basic :: @yield('title')</title>
@stack('styles')
@stack('head-scripts')
<!-- <script src="/js/dims.test.js" type="text/javascript"></script> -->
<script src="{{ mix('js/mobile-nav.js') }}" type="text/javascript"></script>
</head>

<body class="{{ $userAgent }}">

    @yield('content')

</body>
</html>
