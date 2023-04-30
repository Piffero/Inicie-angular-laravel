<?php

namespace Api\Comments\Domain\Validation;

use App\Exceptions\ValidateException;
use Illuminate\Http\Request;

abstract class ChangeCommentValidate extends ValidateException
{

    private static function rules() {
        return [                        
            'post_id' => 'integer',
            'name' => 'string|max:255',
            'email' => 'string|max:255',
            'body' => 'string|max:255'
        ];
    }    

    public static function exec(Request $request) {        
        $data = $request->validate(self::rules());
        return $data;
    }

}
