@extends('layouts.layout')
@section('title', 'music')
@push('styles')
<link href="{{ mix('css/section-index-page.css') }}" rel="stylesheet" type="text/css">
@endpush

@section('content')
<page-linkbox>
    <a href="{{ route('discography') }}" id="disco-link" title="My complete discography">
        <img class="button-image" alt="" src="{{ asset('images/BrokenRecords1-240x240.jpg') }}">
        <img class="circle-border" alt="" src="{{ asset('images/circle-5.png') }}">
    </a>
    <span><strong>Discography</strong></span>
</page-linkbox>
<page-linkbox>
    <a href="{{ route('audio') }}" id="audio-link" title="Listen to my music">
        <img class="button-image" alt="" src="{{ asset('images/cool_ear-240x240.jpg') }}">
        <img class="circle-border" alt="" src="{{ asset('images/circle-4.png') }}">
    </a>
    <span><strong>Audio</strong></span>
</page-linkbox>
<page-linkbox>
    <a href="{{ route('scrapbook') }}" id="scrapbook-link" title="See my scrapbook">
        <img class="button-image" alt="" src="{{ asset('images/scarpbook-icon.jpg') }}">
        <img class="circle-border" alt="" src="{{ asset('images/circle-1b.png') }}">
    </a>
    <span><strong>Scrapbook</strong></span>
</page-linkbox>
<page-linkbox>
    <a href="{{ route('bass-player') }}" id="bass-link" title="Recordings as a sideman">
        <img class="button-image" alt="" src="{{ asset('images/Gretsch_Tone_King_upright_bass_f-hole-237x230.jpg') }}">
        <img class="circle-border" alt="" src="{{ asset('images/circle-5.png') }}">
    </a>
    <span><strong><span class="first-word">Bass</span> <span class="second-word">Player</span></strong></span>
</page-linkbox>
<page-linkbox>
    <a href="{{ route('producer') }}" id="producer-link" title="Recordings I've produced">
        <img class="button-image" alt="" src="{{ asset('images/roland-vs-880-ex-255857-240x240.jpg') }}">
        <img class="circle-border" alt="" src="{{ asset('images/circle-4.png') }}">
    </a>
    <span><strong>Producer</strong></span>
</page-linkbox>
<page-linkbox>
    <a href="{{ route('player-producer') }}" id="playprod-link" title="Recordings as both player & producer">
        <img class="button-image" alt="" src="{{ asset('images/roland-vs-880-ex-255857-240x240.jpg') }}">
        <img class="circle-border" alt="" src="{{ asset('images/circle-5.png') }}">
    </a>
    <span><strong><span class="first-word">Player/</span><span class="second-word">Producer</span></strong></span>
</page-linkbox>
@endsection
