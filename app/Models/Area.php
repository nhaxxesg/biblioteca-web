<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Area extends Model
{
    use HasFactory;
    protected $table = 'area';
    protected $primaryKey = 'idArea';
    protected $fillable = [
        'nombre',
        'abreviatura'
    ];

    public function readers()
    
    {
        return $this->hasMany(Reader::class);
    }
}
