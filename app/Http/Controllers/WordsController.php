<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Word;
use App\Http\Requests\WordRequest;

class WordsController extends Controller
{
    public function search() {
        $words = Word::get();
        return response()->json($words);
    }
    public function index() {
        $words = Word::latest()->paginate(60);
        return view('words.index')->with('words', $words);
    }
    public function show(Word $word) {
        return view('words.show')->with('word', $word);
    }
    public function create() {
        return view('words.create');
    }
    public function store(WordRequest $request) {
        $word = new Word();
        $word->word1 = $request->word1;
        $word->word2 = $request->word2;
        $word->level = mb_strlen($request->word2, 'UTF-8');
        $word->save();
        return redirect('/word');
    }
    public function edit(Word $word) {
        return view('words.edit')->with('word', $word);
    }
    public function update(WordRequest $request, Word $word) {
        $word->word1 = $request->word1;
        $word->word2 = $request->word2;
        $word->level = mb_strlen($request->word2, 'UTF-8');
        $word->save();
        return redirect('/word');
    }
    public function destroy(Word $word) {
        $word->delete();
        return redirect('/word');
    }
}
