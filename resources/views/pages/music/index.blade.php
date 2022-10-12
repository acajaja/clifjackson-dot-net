@extends('layouts.layout')
@section('title', 'music')
@push('styles')
<link href="{{ asset('css/section-index-page.css') }}" rel="stylesheet" type="text/css">
@endpush

@section('content')
<div class="page-wrap">
    <div>
        <a class="index-page-link" href="{{ route('discography') }}" id="disco-link" title="My complete discography">
            <img class="button-image" alt="" src="http://media.clifjackson.net/images/BrokenRecords1-240x240.jpg">
            <img class="circle-border" alt="" src="http://media.clifjackson.net/images/circle-5.png">
            <span><strong>Discography</strong></span>
        </a>
    </div>
    <div>
        <a class="index-page-link" href="{{ route('audio') }}" id="audio-link" title="Listen to my music">
            <img class="button-image" alt="" src="http://media.clifjackson.net/images/cool_ear-240x240.jpg">
            <img class="circle-border" alt="" src="http://media.clifjackson.net/images/circle-4.png">
            <span><strong>Audio</strong></span>
        </a>
    </div>
    <div>
        <a class="index-page-link" href="{{ route('scrapbook') }}" id="scrapbook-link" title="See my scrapbook">
            <img class="button-image" alt="" src="http://media.clifjackson.net/images/scarpbook-icon.jpg">
            <img class="circle-border" alt="" src="http://media.clifjackson.net/images/circle-1b.png">
            <span><strong>Scrapbook</strong></span>
        </a>
    </div>
    <div>
        <a class="index-page-link" href="{{ route('bass-player') }}" id="bass-link" title="Recordings as a sideman">
            <img class="button-image" alt="" src="http://media.clifjackson.net/images/Gretsch_Tone_King_upright_bass_f-hole-237x230.jpg">
            <img class="circle-border" alt="" src="http://media.clifjackson.net/images/circle-5.png">
            <span><strong>Bass Player</strong></span>
        </a>
    </div>
    <div>
        <a class="index-page-link" href="{{ route('producer') }}" id="producer-link" title="Recordings I've produced">
            <img class="button-image" alt="" src="http://media.clifjackson.net/images/roland-vs-880-ex-255857-240x240.jpg">
            <img class="circle-border" alt="" src="http://media.clifjackson.net/images/circle-4.png">
            <span><strong>Producer</strong></span>
        </a>
    </div>
    <div>
        <a class="index-page-link" href="{{ route('player-producer') }}" id="playprod-link" title="Recordings as both player & producer">
            <img class="button-image" alt="" src="http://media.clifjackson.net/images/roland-vs-880-ex-255857-240x240.jpg">
            <img class="circle-border" alt="" src="http://media.clifjackson.net/images/circle-5.png">
            <span><strong>Player/Producer</strong></span>
        </a>
    </div>
</div>
@endsection
