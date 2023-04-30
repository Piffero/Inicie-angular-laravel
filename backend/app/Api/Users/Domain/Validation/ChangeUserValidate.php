<?php

namespace Api\Users\Domain\Validation;

use App\Exceptions\ValidateException;
use Illuminate\Http\Request;

abstract class ChangeUserValidate extends ValidateException
{

    private static function rules() {
        return [            
            'name' => 'string|max:255',
            'gender' => 'string|max:255',
            'email' => 'string|max:255',
            'status' => 'string|max:255'
        ];
    }    

    public static function exec(Request $request) {        
        $data = $request->validate(self::rules());
        return $data;
    }

}
