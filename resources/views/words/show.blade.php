@extends('layouts.default')

@section('title', $word->word1)

@section('content')
<h1>{{ $word->word1 }}</h1>
<p>{!! nl2br(e($word->word2)) !!}</p>
@endsection