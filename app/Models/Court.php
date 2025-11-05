<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Court extends Model
{
    protected $table = 'courts';

    protected $fillable = ['name','image_path','price'];

    public function reservations(){
        return $this->hasMany(Reservation::class);
    }

}
