<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        return Inertia::render('homepage');
    }

    public function about(){
        return Inertia::render('about');
    }
}
