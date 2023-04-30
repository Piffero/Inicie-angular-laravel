<?php

namespace Api\Users\Domain\Validation;

use Illuminate\Http\Request;

abstract class StoredUserValidate
{

    private static function rules() {
        return [
            'name' => 'required|string|max:255',
            'gender' => 'required|string|max:255',
            'email' => 'required|string|max:255',
            'status' => 'required|string|max:255'
        ];
    }

    public static function exec(Request $request) {
        $data = $request->validate(self::rules());
        return $data;
    }

}
