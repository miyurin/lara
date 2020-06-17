<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Word;

class SampleController extends Controller
{
    public function ajaxtest_get() {
        $words = Word::get();
        
        return response()->json([
            'words' => $words,
        ]);
    }
}
