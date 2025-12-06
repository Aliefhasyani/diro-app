<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ReservationController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('homepage');
Route::get('/about', [HomeController::class, 'about'])->name('about');

Route::get('/reservations', [ReservationController::class, 'index'])->name('reservations');
Route::get('/reservations/{id}', [ReservationController::class, 'show'])->name('reservation-detail');
Route::get('/reservations/{id}/payment', [ReservationController::class, 'create'])->middleware('auth')->name('reservation-create');
Route::post('/reservations/{id}/payment/finish', [ReservationController::class, 'store'])->middleware('auth')->name('reservation.store');

Route::get('/admin/adminpanel',[AdminController::class,'index'])->name('admin.panel')->middleware(['auth','role:admin']);
Route::get('/admin/adminpanel/users',[AdminController::class,'create'])->name('admin.create')->middleware(['auth','role:admin']);
Route::post('/admin/adminpanel/users/create',[AdminController::class,'store'])->name('admin.store')->middleware(['auth','role:admin']);
Route::delete('/admin/adminpanel/{id}',[AdminController::class,'destroy'])->name('admin.delete')->middleware(['auth','role:admin']);

Route::get('/user/edit/{id}',[AdminController::class,'edit'])->name('user.edit')->middleware(['auth','role:admin']);
Route::put('/user/edit/{id}', [AdminController::class, 'update'])->name('user.update')->middleware(['auth', 'role:admin']);



require __DIR__.'/settings.php';
