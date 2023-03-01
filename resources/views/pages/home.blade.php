@extends('layouts.basic')
@section('title', 'home')
@push('styles')
<link href="{{ asset(mix('css/home.css')) }}" rel="stylesheet" type="text/css">
@endpush

@section('content')
    @include('components.clouds')

    <my-container>
        <my-rings-links>
            <my-circle-A class="circle">
                <a href="{{ route('web-index') }}" title="Web">Web</a>
            </my-circle-A>
            <my-circle-B class="circle">
                <a href="{{ route('music-index') }}" title="Music">Music</a>
            </my-circle-B>
            <my-inbetween>
                <a href="{{ route('in-between') }}" title="in between">in between</a>
            </my-inbetween>
        </my-rings-links>
    </my-container>
@endsection
