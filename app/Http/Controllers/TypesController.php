<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Word;

class TypesController extends Controller
{
    public function index() {
        $words = Word::get();
        $array1 = [];
        $length = Word::count('id');
        for($i=1; $i<=$length; $i++) {
            $arr = $words->where('id', $i)->toArray();//未修正
            if(empty($arr)) {
                continue;
            }
            $array1[] = $words->where('id',$i)->shuffle();
        }
        $collection = [];
        for($i=0; $i<count($array1); $i++) {
            for($t=0; $t<count($array1[$i]); $t++) {
                $collection[] = $array1[$i][$t];
            }
        }
        return view('types.index',compact('words', 'collection'));
    }
}
