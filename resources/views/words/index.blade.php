@extends('layouts.default')

@section('title', 'Words')

@section('content')
<div id="result"></div>
<h1>
    <a href="{{ action('TypesController@index') }}">Game Start</a>
    <a href="{{ action('WordsController@create') }}" class="header-menu">新規登録</a>
</h1>
<ul class="clearfix">
    @forelse ($words as $word)
    <li class="menu">
        <p><a href="{{ action('WordsController@show', $word) }}">{{ $word->word1 }}</a></p>
        <p><a href="{{ action('WordsController@show', $word) }}">{{ $word->word2 }}</a></p>
        <a href="{{ action('WordsController@edit', $word) }}">[編集]</a>
        <a href="#" class="del" data-id="{{ $word->id }}">[削除]</a>
        <form method="post" action="{{ action('WordsController@destroy', $word) }}" id="form_{{ $word->id }}">
            {{ csrf_field() }}
            {{ method_field('delete') }}
        </form>
    </li>
    @empty
    <li>No words yet</li>
    @endforelse
</ul>
<div>{{ $words->links() }}</div>
@endsection