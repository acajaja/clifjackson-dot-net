@extends('layouts.layout')
@section('title', 'web')
@push('styles')
<link href="{{ mix('css/section-index-page.css') }}" rel="stylesheet" type="text/css">
@endpush

@section('content')
<page-linkbox>
    <a href="{{ route('work-samples-index') }}" title="Work Samples">
        <img class="button-image" alt="" src="{{ asset('images/AFA-theme-homepage.png') }}">
        <img class="circle-border" alt="" src="{{ asset('images/circle-1b.png') }}">
    </a>
    <a href="{{ route('work-samples-index') }}" title="Work Samples">
        <strong><span class="first-word">Work</span> <span class="second-word">Samples</span></strong>
    </a>
</page-linkbox>
<page-linkbox>
    <a href="{{ route('geeking-out') }}" title="Geeking Out">
        <img class="button-image" alt="" src="{{ asset('images/geek-out-150sq.png') }}">
        <img class="circle-border" alt="" src="{{ asset('images/circle-4.png') }}">
    </a>
    <a href="{{ route('geeking-out') }}" title="Geeking Out">
        <strong><span class="first-word">Geeking</span> <span class="second-word">Out</span></strong>
    </a>
</page-linkbox>
@endsection
