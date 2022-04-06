<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;

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

Route::get('/', [Controller::class, 'index'])
    ->name('home');

Route::get('/web/{page?}', [Controller::class, 'web'])
    ->name('web');

Route::get('/web/work-samples/{page}', [Controller::class, 'web'])
    ->name('web-work-samples');

Route::get('/music/{page?}', [Controller::class, 'music'])
    ->name('music');

Route::get('/in-between/{page?}', [Controller::class, 'inBetween'])
    ->name('in-between');
