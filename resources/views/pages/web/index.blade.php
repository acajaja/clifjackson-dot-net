@extends('layouts.layout')
@section('title', 'web')
@push('styles')
<link href="{{ asset('css/section-index-page.css') }}" rel="stylesheet" type="text/css">
@endpush

@section('content')
<page-linkbox>
    <a href="{{ route('work-samples-index') }}" id="web-link" title="Work Samples">
        <img class="button-image" alt="" src="http://media.clifjackson.net/images/AFA-theme-homepage.png">
        <img class="circle-border" alt="" src="http://media.clifjackson.net/images/circle-1b.png">
    </a>
    <span><strong><span class="first-word">Work</span> <span class="second-word">Samples</span></strong></span>
</page-linkbox>
<page-linkbox>
    <a href="{{ route('geeking-out') }}" id="geek-link" title="Geeking Out">
        <img class="button-image" alt="" src="http://media.clifjackson.net/images/geek-out-150sq.png">
        <img class="circle-border" alt="" src="http://media.clifjackson.net/images/circle-4.png">
    </a>
    <span><strong><span class="first-word">Geeking</span> <span class="second-word">Out</span></strong></span>
</page-linkbox>
<!-- <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br> -->
@endsection
