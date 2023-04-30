<?php

namespace Api\Posts\Domain\Validation;

use App\Exceptions\ValidateException;

abstract class IdPostValidate
{

    private static function rules_myValidate(array $fields): array {
        return [
            'id' => ['rules' => 'required|integer', 'postdata' => $fields['id']]
        ];
    }

    public static function exec(int $id) {
        $fields = self::rules_myValidate(['id' => $id]);
        $extends = new ValidateException();
        $extends->validate($fields);
        if (!$extends->run()) {
            $extends->xErrorReporting();
        };

        return $extends->getFields();
    }

}
