<?php

namespace Api\Comments\Domain\Validation;

use App\Exceptions\ValidateException;

abstract class IdCommentValidate extends ValidateException
{

    private static function rules_myValidate(array $fields): array {
        return [
            'id' => ['rules' => 'required|integer', 'postdata' => $fields['nId']]
        ];
    }

    public static function exec(int $id) {
        $fields = self::rules_myValidate(['id' => $id]);
        self::validate($fields);
        if (!self::run()) {
            self::xErrorReporting();
        };

        return self::getFields();
    }

}
