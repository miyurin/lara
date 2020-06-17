<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');

// 全ユーザ
Route::group(['middleware' => ['auth', 'can:user-higher']], function () {
// ユーザ一覧
    Route::get('/account', 'AccountController@index')->name('account.index');
    Route::get('type','TypesController@index');
    
});

// 管理者以上
Route::group(['middleware' => ['auth', 'can:admin-higher']], function () {
// ユーザ登録
    Route::get('/account/regist', 'AccountController@regist')->name('account.regist');
    Route::post('/account/regist', 'AccountController@createData')->name('account.regist');

// ユーザ編集
    Route::get('/account/edit/{user_id}', 'AccountController@edit')->name('account.edit');
    Route::post('/account/edit/{user_id}', 'AccountController@updateData')->name('account.edit');

// ユーザ削除
    Route::post('/account/delete/{user_id}', 'AccountController@deleteData');
    
    // Route::get('ajaxtest' ,'SampleController@ajaxtest_get');
    Route::get('word','WordsController@index');
    Route::get('word/words/{word}', 'WordsController@show')->where('word', '[0-9]+');
    Route::get('word/words/create', 'WordsController@create');
    Route::post('word/words', 'WordsController@store');
    Route::get('word/words/{word}/edit', 'WordsController@edit');
    Route::patch('word/words/{word}', 'WordsController@update');
    Route::delete('word/words/{word}', 'WordsController@destroy');
});

// システム管理者のみ
Route::group(['middleware' => ['auth', 'can:system-only']], function () {
    
});