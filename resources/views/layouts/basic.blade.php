<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, height=device-height">
<title>clif jackson basic :: @yield('title')</title>
@stack('styles')
@stack('head-scripts')
<script src="{{ mix('js/dims.test.js') }}" type="text/javascript"></script>
</head>

<body>

@yield('content')

</body>
</html>
