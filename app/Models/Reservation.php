<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
   

    protected $fillable = ['user_id','court_id','timeslot_id','date','status'];
    protected $table = 'reservations';

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function court(){
        return $this->belongsTo(Court::class);
    }

    public function payment(){
        return $this->hasOne(Payment::class);
    }

    public function timeslot(){
        return $this->belongsTo(TimeSlot::class);
    }

}
