@extends('layouts.layout')
@section('title', 'web')
@push('styles')
<link href="{{ asset('css/section-index-page.css') }}" rel="stylesheet" type="text/css">
@endpush

@section('content')
<div class="page-wrap">
    <div>
        <a class="index-page-link" href="{{ route('web', ['page' => 'work-samples']) }}" id="web-link" title="Work Samples">
            <img class="button-image" alt="" src="http://media.clifjackson.net/images/AFA-theme-homepage.png">
            <img class="circle-border" alt="" src="http://media.clifjackson.net/images/circle-1b.png">
            <span><strong>Work Samples</strong></span>
        </a>
    </div>
    <div>
        <a class="index-page-link" href="{{ route('web', ['page' => 'geeking-out']) }}" id="geek-link" title="Geeking Out">
            <img class="button-image" alt="" src="http://media.clifjackson.net/images/geek-out-150sq.png">
            <img class="circle-border" alt="" src="http://media.clifjackson.net/images/circle-4.png">
            <span><strong>Geeking Out</strong></span>
        </a>
    </div>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</div>
@endsection
