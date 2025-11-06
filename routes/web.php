<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ReservationController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

// Route::get('/', function () {
//     return Inertia::render('welcome', [
//         'canRegister' => Features::enabled(Features::registration()),
//     ]);
// })->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/', [HomeController::class, 'index'])->name('homepage');
Route::get('/reservations', [ReservationController::class, 'index'])->name('reservations');
Route::get('/reservations/{id}', [ReservationController::class, 'show'])->name('reservation-detail');
Route::get('/reservations/{id}/payment', [ReservationController::class, 'create'])->middleware('auth')->name('reservation-create');
Route::post('/reservations/{id}/payment/finish', [ReservationController::class, 'store'])->middleware('auth')->name('reservation.store');
Route::get('/admin/adminpanel',[AdminController::class,'index'])->middleware(['auth','role:admin']);

require __DIR__.'/settings.php';
