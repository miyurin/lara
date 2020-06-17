@extends('layouts.default')

@section('title', 'New Word')

@section('content')
<h1>
    <a href="{{ url('/word') }}" class="header-menu">Back</a>
    New Word
</h1>
<form method="post" action="{{ action('WordsController@store') }}">
    {{ csrf_field() }}
    <p>
        <input id="word1" type="text" name="word1" placeholder="単語を入力してください" value="{{ old('word1') }}">
        <span id="has_duplicate1" style="color: red;"></span>
        {{-- @if ($errors->has('word1'))
        <span class="error">{{ $errors->first('word1') }}</span>
        @endif --}}
    </p>
    <p>
        <input id="word2" type="text" name="word2" placeholder="読みを入力してください" value="{{ old('word2') }}">
        <span id="has_duplicate2" style="color: red;"></span>
        {{-- @if ($errors->has('word2'))
        <span class="error">{{ $errors->first('word2') }}</span>
        @endif --}}
    </p>
    <p>
        <input type="submit" value="Add">
    </p>
</form>
@endsection