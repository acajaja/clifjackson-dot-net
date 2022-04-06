@extends('layouts.basic')
@section('title', 'home')
@push('styles')
<link href="{{ asset('css/home.css') }}" rel="stylesheet" type="text/css">
@endpush

@section('content')
    <div id="background-bg"></div>
    <div id="floating-cloud-1"><img alt="" src="http://media.clifjackson.net/images/floating-cloud-BW-94x50.png"></div>
    <div id="left-side-middle-bg"></div>
    <div id="top-right-corner-bg"></div>

    <div id="container">
        <div class="circle" id="circleA"><p><a href="{{ route('web') }}" title="Web">Web</a></p></div>
        <div class="circle" id="circleB"><p><a href="{{ route('music') }}" title="Music">Music</a></p></div>
        <div class="in-btwn-box"><a href="{{ route('in-between') }}" title="in between">in between</a></div>
    </div>

    <div id="my-name">
        <p>clifjackson.net</p>
    </div>
@endsection
