@extends('layouts.layout')
@section('title', 'player-producer')
@push('styles')
<link href="{{ asset('css/general.css') }}" rel="stylesheet" type="text/css">
@endpush

@section('content')
<section class="page-wrap">
    <h1>Player Producer</h1>
    @include('pages.music.components.SO')
    @include('pages.music.components.mpr')
</section>
@endsection
