<?php

namespace Api\Comments\Domain\Validation;

use Illuminate\Http\Request;

abstract class StoredCommentValidate
{

    private static function rules() {
        return [            
            'post_id' => 'required|integer',
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255',
            'body' => 'required|string|max:255'
        ];
    }

    public static function exec(Request $request) {
        $data = $request->validate(self::rules());
        return $data;
    }

}
