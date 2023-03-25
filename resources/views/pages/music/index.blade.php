@extends('layouts.layout')
@section('title', 'music')
@push('styles')
<link href="{{ mix('css/section-index-page.css') }}" rel="stylesheet" type="text/css">
@endpush

@section('content')
<page-linkbox>
    <a href="{{ route('discography') }}" title="My complete discography">
        <img class="button-image" alt="" src="{{ asset('images/BrokenRecords1-240x240.jpg') }}">
        <img class="circle-border" alt="" src="{{ asset('images/circle-5.png') }}">
    </a>
    <a href="{{ route('discography') }}" title="My complete discography"><strong>Discography</strong></a>
</page-linkbox>
<page-linkbox>
    <a href="{{ route('audio') }}" title="Listen to my music">
        <img class="button-image" alt="" src="{{ asset('images/cool_ear-240x240.jpg') }}">
        <img class="circle-border" alt="" src="{{ asset('images/circle-4.png') }}">
    </a>
    <a href="{{ route('audio') }}" title="Listen to my music"><strong>Audio</strong></a>
</page-linkbox>
<page-linkbox>
    <a href="{{ route('scrapbook') }}" title="See my scrapbook">
        <img class="button-image" alt="" src="{{ asset('images/scarpbook-icon.jpg') }}">
        <img class="circle-border" alt="" src="{{ asset('images/circle-1b.png') }}">
    </a>
    <a href="{{ route('scrapbook') }}" title="See my scrapbook"><strong>Scrapbook</strong></a>
</page-linkbox>
<page-linkbox>
    <a href="{{ route('bass-player') }}" title="Recordings as a sideman">
        <img class="button-image" alt="" src="{{ asset('images/Gretsch_Tone_King_upright_bass_f-hole-237x230.jpg') }}">
        <img class="circle-border" alt="" src="{{ asset('images/circle-5.png') }}">
    </a>
    <a href="{{ route('bass-player') }}" title="Recordings as a sideman">
        <strong><span class="first-word">Bass</span> <span class="second-word">Player</span></strong>
    </a>
</page-linkbox>
<page-linkbox>
    <a href="{{ route('producer') }}" title="Recordings I've produced">
        <img class="button-image" alt="" src="{{ asset('images/roland-vs-880-ex-255857-240x240.jpg') }}">
        <img class="circle-border" alt="" src="{{ asset('images/circle-4.png') }}">
    </a>
    <a href="{{ route('producer') }}" title="Recordings I've produced"><strong>Producer</strong></a>
</page-linkbox>
<page-linkbox>
    <a href="{{ route('player-producer') }}" title="Recordings as both player & producer">
        <img class="button-image" alt="" src="{{ asset('images/roland-vs-880-ex-255857-240x240.jpg') }}">
        <img class="circle-border" alt="" src="{{ asset('images/circle-5.png') }}">
    </a>
    <a href="{{ route('player-producer') }}" title="Recordings as both player & producer">
        <strong><span class="first-word">Player/</span><span class="second-word">Producer</span></strong>
    </a>
</page-linkbox>
@endsection
