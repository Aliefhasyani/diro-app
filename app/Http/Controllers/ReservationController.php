<?php

namespace App\Http\Controllers;

use App\Models\Court;
use App\Models\TimeSlot;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Ramsey\Uuid\Type\Time;

class ReservationController extends Controller
{
    public function index(){
        $courts = Court::all();
        
        return Inertia::render('reservations',compact('courts'));
    }

    public function show($id){
        $court = Court::findOrFail($id);

        return Inertia::render('court-details', compact('court'));
    }

    public function create(Request $request, $id){
        $court = Court::findOrFail($id);
        $timeslots = TimeSlot::all();
        

        return Inertia::render('payment',compact('court','timeslots'));
    }


    
}
