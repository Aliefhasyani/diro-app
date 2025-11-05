<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ReservationController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/homepage',[HomeController::class,'index'])->name('homepage');
Route::get('/reservations',[ReservationController::class,'index'])->name('reservations');
Route::get('/reservations/{id}',[ReservationController::class,'show'])->name('reservation-detail');
Route::get('/reservations/{id}/payment',[ReservationController::class,'create'])->name('reservation-create');

require __DIR__.'/settings.php';
