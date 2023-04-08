@extends('layouts.page')
@section('title', 'producer')
@push('styles')
<link href="{{ mix('css/section-page.css') }}" rel="stylesheet" type="text/css">
@endpush

@section('content')
<h1>Producer</h1>

@include('pages.music.components.zuk')
@endsection
