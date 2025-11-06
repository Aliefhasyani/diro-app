<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class RoleAuth
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next, $role){
        $user = $request->user();

        if($user->role != $role){
            abort(403,'unathorized');
        }
        return $next($request);
    }

}
