@extends('layouts.page')
@section('title', 'producer')
@push('styles')
<link href="{{ asset('css/gallery.css') }}" rel="stylesheet" type="text/css">
@endpush

@section('content')
<section>
    <h1>Producer</h1>

    @include('pages.music.components.zuk')
</section>
@endsection
