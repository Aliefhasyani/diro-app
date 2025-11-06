<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('court_id')->constrained('courts')->onDelete('cascade');
            $table->foreignId('timeslot_id')->constrained('timeslots')->onDelete('cascade');
            $table->date('date');
            $table->enum('status', ['pending', 'confirmed', 'cancelled'])->default('confirmed');
            $table->timestamps();

            $table->unique(['court_id', 'timeslot_id', 'date'], 'unique_court_timeslot_date');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};
