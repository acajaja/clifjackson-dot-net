@extends('layouts.layout')
@section('title', 'complete discography')
@push('styles')
<link href="{{ asset('css/gallery.css') }}" rel="stylesheet" type="text/css">
@endpush

@section('content')
<section class="page-wrap">
    <h1>My Complete Discography</h1>

    @include('pages.music.components.sabir-jubilee')
    @include('pages.music.components.whispering-tree')
    @include('pages.music.components.symphony-of-souls')
    @include('pages.music.components.SO')
    @include('pages.music.components.spacefaring-male')
    @include('pages.music.components.sound-gathering')
    @include('pages.music.components.ras-ensemble')

    <section class="clearfix content-entry-box">
        <div class="media-box-150">
            <img src="http://media.clifjackson.net/images/discography/bronxCD-150.jpg" alt="The Bronx New School Sings CD">
        </div>
        <div class="content-entry-info-box">
            <h2>The Bronx New School Sings</h2>
            <h3>September, 2007<br>144 Music and Arts</h3>
            <p>
                New York, NY
            </p>
            <p>A project for the young people of PS 51 in the Bronx, NY.</p>
            <p>
                <strong>The Bronx New School Sings Band</strong>
                <br>Personnel:<br>The beautiful young folks of PS 51 - vocals<br>
                Caroline Barnes - music director, acoustic guitar<br>
                Dario Boente - piano, synth<br>
                Myself - electric bass<br>
                Ravish Momin - percussion
            </p>
            <p>This band backed up the young people of PS 51 in the Bronx, NY.</p>
        </div>
    </section>

    @include('pages.music.components.zuk')

    <section class="clearfix content-entry-box">
        <div class="media-box-150">
            <img src="http://media.clifjackson.net/images/discography/mia2005_CDcvr_150x150.jpg" alt="Music Is Art 2005">
        </div>
        <div class="content-entry-info-box">
            <h2>Music Is Art 2005</h2>
            <h3>September, 2005<br>Good Charamel Records</h3>
            <p>
                Buffalo, NY
                <br><a href="https://www.musicisart.org/festival" title="Music Is Art Festival" target="_blank">https://www.musicisart.org/festival</a>
            </p>
            <p>The 3-day annual music festival put on buy some of the Goo Goo Dolls. My set with Elavation.</p>
            <p>
                <strong>Elavation</strong>
                <br>Personnel:
                <br>Shawn Prior - trumpet<br>
                Clinton Ours - vocals, keyboards<br>
                Brian Wantuch - guitar<br>
                Myself - electric bass<br>
                Benny - drums
            </p>
            <p>
                Formed by Brian and Clint, Elavation played originals as well as covers and had a unique mix of funk, R&B, Jazz
                and Latin musics.
            </p>
        </div>
    </section>

    <section class="clearfix content-entry-box">
        <div class="media-box-150">
            <img src="http://media.clifjackson.net/images/discography/mia2004_CDcvr_150x150.jpg" alt="Music Is Art 2004">
        </div>
        <div class="content-entry-info-box">
            <h2>Music Is Art 2004</h2>
            <h3>September, 2004<br>Good Charamel Records</h3>
            <p>
                Buffalo, NY
                <br><a href="https://www.musicisart.org/festival" title="Music Is Art Festival" target="_blank">https://www.musicisart.org/festival</a>
            </p>
            <p>The 3-day annual music festival put on buy some of the Goo Goo Dolls. My set with the Ron LoCurto Trio.</p>
            <p>
                <strong>The Ron LoCurto Trio</strong><br>Personnel:<br>Ron LoCurto - electric guitar<br>
                John Bacon - drums<br>
                Myself - double bass
            </p>
            <p>Playing Ron's originals and select covers.</p>
        </div>
    </section>

    @include('pages.music.components.mpr')
</section>
@endsection
