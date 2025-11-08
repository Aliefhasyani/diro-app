<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
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

    public function store(Request $request){
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'password' => 'required|string|min:8',
            'role' => 'required|in:admin,user'
        ]);

        $data['password'] = Hash::make($data['password']);

        User::create($data);

        return redirect()->route('admin.panel');
    }
}
