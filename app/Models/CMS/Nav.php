<?php

namespace App\Models\CMS;

use Illuminate\Database\Eloquent\Model;

class Nav extends Model
{
    protected $table = 'navs';
    protected $guarded = [
        'id'
    ];
}
