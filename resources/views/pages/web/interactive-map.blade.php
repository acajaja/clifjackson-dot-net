@extends('layouts.layout')
@section('title', 'interactive map')
@push('styles')
<link href="{{ mix('css/general.css') }}" rel="stylesheet" type="text/css">
@endpush

@section('content')
<iframe class="samples-iframe" id="map-iframe" src="{{ url('/samples/interactive-map') }}" width="100%"></iframe>
@endsection

@push('body-scripts')
<script type="text/javascript">
document.getElementById('map-iframe').style.height = document.documentElement.clientHeight + 'px';
</script>
@endpush
