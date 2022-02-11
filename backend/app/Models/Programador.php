<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Programador extends Model
{
    use HasFactory;

    protected $table = "programador";

    public $timestamps = true;

    protected $fillable = [
        'nome',
        'sexo',
        'data_nascimento',
        'idade',
        'hobby',
        'nivel_id'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    protected $dates = [
        'data_nascimento'
    ];

    public function nivel()
    {
        return $this->belongsTo(Nivel::class);
    }
}