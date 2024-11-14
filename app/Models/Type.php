<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    use HasFactory;

    protected $table = 'tipo';
    protected $primaryKey = 'idTipo';
    protected $fillable = [
        'nombreT'
    ];

    public function readers()
    {
        return $this->hasMany(Reader::class);
    }
}
