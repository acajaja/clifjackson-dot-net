@extends('layouts.layout')
@section('audio')
@push('styles')
<link href="{{ asset('css/audio-page.css') }}" rel="stylesheet" type="text/css">
@endpush

@section('content')
    @include('pages.music.components.audio-player')
    
    <br><br><br><br><br><br><br><br>
@endsection