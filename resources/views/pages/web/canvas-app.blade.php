@extends('layouts.layout')
@section('title', 'canvas app')
@push('styles')
<link href="{{ mix('css/general.css') }}" rel="stylesheet" type="text/css">
@endpush

@section('content')
<iframe class="samples-iframe" id="canvas-iframe" seamless="seamless" src="{{ url('/samples/canvas-app') }}" width="100%"></iframe>
@endsection

@push('body-scripts')
<script type="text/javascript">
document.getElementById('canvas-iframe').style.height = document.documentElement.clientHeight + 'px';
</script>
@endpush
