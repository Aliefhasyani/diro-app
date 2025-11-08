<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index(){
        $users = User::all();
        $reservations = Reservation::with(['user','court','payment','timeslot'])->get();
        
        return Inertia::render('admin-panel',compact('users','reservations'));
    }

    public function destroy($id){
        $user = User::findOrFail($id);

        $user->delete();

        return redirect()->route('admin.panel');
    }

    public function create(){
        return Inertia::render('user-create');
    }
}
