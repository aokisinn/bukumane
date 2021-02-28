<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class Me extends Controller
{
    public function __invoke(Request $request)
    {
        return $request->user();
    }
}
