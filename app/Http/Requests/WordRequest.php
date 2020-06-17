<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Word;

class WordRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'word1' => [
                'required',
                'unique:words,word1',
            ],
            'word2' => [
                'required',
                'regex:/^[\p{Hiragana}|ー、。]+$/u',
            ]
        ];
    }
    public function messages() {
        return [
            'word1.required' => '入力してください!!',
            'word1.unique' => '重複があります!!',
            'word2.required' => '入力してください!!',
            'word2.regex'=> 'ひらがなで入力してください!!',
        ];
    }
}
