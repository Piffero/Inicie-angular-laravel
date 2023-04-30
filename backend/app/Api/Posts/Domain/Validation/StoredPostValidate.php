<?php

namespace Api\Posts\Domain\Validation;

use Illuminate\Http\Request;

abstract class StoredPostValidate
{

    private static function rules() {
        return [            
            'user_id' => 'required|integer',
            'title' => 'required|string|max:255',
            'body' => 'required|string|max:255'
        ];
    }

    public static function exec(Request $request) {
        $data = $request->validate(self::rules());
        return $data;
    }

}
