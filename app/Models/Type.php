<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    

    protected $table = 'tipo';
    protected $primaryKey = 'idTipo';
    protected $fillable = [
        'nombre'
    ];

    public function readers()
    {
        return $this->hasMany(Reader::class);
    }
}
