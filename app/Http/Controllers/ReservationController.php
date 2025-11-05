<?php

namespace App\Http\Controllers;

use App\Models\Court;
use App\Models\Reservation;
use App\Models\TimeSlot;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Ramsey\Uuid\Type\Time;

class ReservationController extends Controller
{
    public function index(){
        $courts = Court::all();
        $timeslots = TimeSlot::all();
        return Inertia::render('reservations',compact('courts','timeslots'));
    }

    public function show($id){
        $court = Court::findOrFail($id);

        return Inertia::render('court-details', compact('court'));
    }

    public function create( $id){
        $court = Court::findOrFail($id);
        $timeslots = TimeSlot::all();
        

        return Inertia::render('payment',compact('court','timeslots'));
    }

    public function store(Request $request, $id){
        $court = Court::findOrFail($id);

        $validated = $request->validate([
            'timeslot_id' => 'required|exists:timeslots,id',
            'date' => 'required|date',
        ]);

        $reservations = Reservation::create([
            'user_id' => Auth::id(), 
            'court_id' => $court->id,
            'timeslot_id' => $validated['timeslot_id'],
            'date' => $validated['date'],
            'status' => 'pending',
        ]);

        return redirect()->route('homepage')->with('success', 'Reservation created successfully!');

    }


    
}
