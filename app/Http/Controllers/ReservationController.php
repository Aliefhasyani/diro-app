<?php

namespace App\Http\Controllers;

use App\Models\Court;
use App\Models\Reservation;
use App\Models\TimeSlot;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReservationController extends Controller
{
    public function index(){
        $courts = Court::all();
        $timeslots = TimeSlot::all();
        return Inertia::render('reservations', compact('courts', 'timeslots'));
    }

    public function show($id){
        $court = Court::findOrFail($id);
        return Inertia::render('court-details', compact('court'));
    }

    public function create($id){
        $court = Court::findOrFail($id);
        $timeslots = TimeSlot::all();

        return Inertia::render('payment', compact('court', 'timeslots'));
    }

    public function store(Request $request, $id){
        $court = Court::findOrFail($id);

        $validated = $request->validate([
            'timeslot_id' => 'required|exists:timeslots,id',
            'date' => 'required|date',
        ]);

        try {
            DB::beginTransaction();

            $alreadyBooked = Reservation::where('court_id', $court->id)
                ->where('timeslot_id', $validated['timeslot_id'])
                ->where('date', $validated['date'])
                ->whereIn('status', ['confirmed', 'pending'])
                ->lockForUpdate()
                ->exists();

            if ($alreadyBooked) {
                DB::rollBack();
                return Redirect::back()->with('error', '⚠️ This court is already booked for that date and timeslot.');
            }

            Reservation::create([
                'user_id' => Auth::id(),
                'court_id' => $court->id,
                'timeslot_id' => $validated['timeslot_id'],
                'date' => $validated['date'],
                'status' => 'confirmed',
            ]);

            DB::commit();
            return Redirect::back()->with('success', '✅ Reservation created successfully!');
        } catch (\Exception $e) {
            DB::rollBack();
            return Redirect::back()->with('error', '❌ Something went wrong. Please try again.');
        }
    }
}
