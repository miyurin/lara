@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>

                <div class="panel-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

                    You are logged in!
                </div>
            </div>
            <div class="panel">
                <a href="/type">タイピング</a>
            </div>
            <div class="panel">
                <a href="/word">ワード登録</a>
            </div>
        </div>
    </div>
</div>
@endsection
