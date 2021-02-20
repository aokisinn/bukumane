<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterBookRequest extends FormRequest
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
            'title' => 'required',
            'author' => 'required',
            'caption' => '',
            'publisher' => 'required',
            'isbn' => 'required',
            'largeImageUrl' => 'required',
            'mediumImageUrl' => '',
            'smallImageUrl' => '',
            'itemUrl' => 'required',
            'salesDate' => '',
            'price' => '',
            'size' => ''
        ];
    }
}
