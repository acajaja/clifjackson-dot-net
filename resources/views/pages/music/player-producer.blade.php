@extends('layouts.page')
@section('title', 'player-producer')
@push('styles')
<link href="{{ mix('css/section-page.css') }}" rel="stylesheet" type="text/css">
@endpush

@section('content')
<h1>Player Producer</h1>

@include('pages.music.components.SO')
@include('pages.music.components.mpr')
@endsection
