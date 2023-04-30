<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

abstract class ApiToken extends Model
{
    use HasFactory;

    public static function getToken() {
        return env('TOKEN_KEY');
    }
}
