<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Nivel extends Model
{
    use SoftDeletes;

    protected $table = "nivel";

    public $timestamps = true;

    protected $fillable = [
        'nivel'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    public function programador()
    {
        return $this->hasMany(Programador::class);
    }
}
