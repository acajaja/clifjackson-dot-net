@extends('layouts.layout')
@section('title', 'in bewteen')
@push('styles')
<link href="{{ asset('css/gallery.css') }}" rel="stylesheet" type="text/css">
@endpush

@section('content')
<div class="page-wrap">
    <h1>Other Interests</h1>
    <section class="content-entry-box">
        <h2>Skateboarding</h2>
        <p>
            I've been skateboarding most of my life but took a break for about 12 years and then came back to it in 2006.
            I came up mainly as a street skater, although we did do some transition/vert when possible. Now, I've been totally
            hooked on skating bowls (basically a wooden or cement pool)! I've also done some neat mini-ramps and a little
            half-pipe here and there with some street thrown in for old times sake. Skating can be super dangerous—even
            for the pros. I've had some injuries myself and watched others take some pretty bad spills. However, most
            of us get back up and skate... eventually. Please enjoy some pics below from my later skate period at various
            locations in NYC. Can't seem to find any from back in the day yet.
        </p>
        <div class="thumbnail-gallery">
            <a class="thumb-link" href="http://media.clifjackson.net/images/sk8/FRP_1317-321x480.jpg" title="Autumn - FS Wall Ride">
                <img src="http://media.clifjackson.net/images/sk8/thumbs/FRP_1317-150x224.jpg" alt="Autumn - FS Wall Ride">
            </a>
            <a class="thumb-link" href="http://media.clifjackson.net/images/sk8/IMG_0302.jpg" title="Autumn - FS Grind">
                <img src="http://media.clifjackson.net/images/sk8/thumbs/IMG_0302-150x113.jpg" alt="Autumn - FS Grind">
            </a>
            <a class="thumb-link" href="http://media.clifjackson.net/images/sk8/IMG_0527-640x480.jpg" title="Heli-port Bowl 3">
                <img src="http://media.clifjackson.net/images/sk8/thumbs/IMG_0527-150sq.jpg" alt="Heli-port Bowl 3">
            </a>
            <a class="thumb-link" href="http://media.clifjackson.net/images/sk8/IMG_0143-2.jpg" title="Heli-port Bowl 1">
                <img src="http://media.clifjackson.net/images/sk8/thumbs/IMG_0143-2-150x113.jpg" alt="Heli-port Bowl 1">
            </a>
            <a class="thumb-link" href="http://media.clifjackson.net/images/sk8/IMG_0132-2.jpg" title="Heli-port Bowl 2">
                <img src="http://media.clifjackson.net/images/sk8/thumbs/IMG_0132-2-150x113.jpg" alt="Heli-port Bowl 2">
            </a>
        </div>
    </section>
</div>
