<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

$userAgent = (
    Agent::isDesktop() ? 'desktop' :
        (
            Agent::isTablet() && !Agent::isMobile() ? 'tablet' :
                (
                    Agent::isMobile() && !Agent::isTablet() ? 'mobile' : ''
                )
        )
);

Route::view('/', 'pages.home')
    ->name('home');

Route::prefix('web')
    ->group(function() use ($userAgent) {
        Route::view('/', 'pages.web.index', ['userAgent' => $userAgent])
            ->name('web-index');
        Route::view('/work-samples', 'pages.web.work-samples')
            ->name('work-samples-index');
        Route::view('/geeking-out', 'pages.web.geeking-out')
            ->name('geeking-out');

        Route::prefix('work-samples')
            ->group(function() {
                Route::view('/canvas-app', 'pages.web.canvas-app')
                    ->name('canvas-app');
                Route::view('/interactive-map', 'pages.web.interactive-map')
                    ->name('interactive-map');
            });
    });

Route::prefix('music')
    ->group(function() use ($userAgent) {
        Route::view('/', 'pages.music.index', ['userAgent' => $userAgent])
            ->name('music-index');
        Route::view('/discography', 'pages.music.complete-discography')
            ->name('discography');
        Route::view('/audio', 'pages.music.audio')
            ->name('audio');
        Route::view('/scrapbook', 'pages.music.scrapbook')
            ->name('scrapbook');
        Route::view('/bass-player', 'pages.music.bass-player')
            ->name('bass-player');
        Route::view('/producer', 'pages.music.producer')
            ->name('producer');
        Route::view('/player-producer', 'pages.music.player-producer')
            ->name('player-producer');
    });

Route::view('/in-between', 'pages.in-between.index', ['userAgent' => $userAgent])
    ->name('in-between');
