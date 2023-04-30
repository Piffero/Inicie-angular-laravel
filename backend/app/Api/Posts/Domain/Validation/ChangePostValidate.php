<?php

namespace Api\Posts\Domain\Validation;

use App\Exceptions\ValidateException;
use Illuminate\Http\Request;

abstract class ChangePostValidate extends ValidateException
{

    private static function rules() {
        return [                        
            'user_id' => 'integer',
            'title' => 'string|max:255',
            'body' => 'string|max:255'
        ];
    }    

    public static function exec(Request $request) {        
        $data = $request->validate(self::rules());
        return $data;
    }

}
