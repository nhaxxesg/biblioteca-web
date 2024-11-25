<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Solicitud extends Model
{
    use HasFactory;

    protected $table = 'solicitud';
    protected $primarykey = 'idSolicitud';
    // public $incrementing = true;
    protected $fillable = [
        'idLector',
        'idlibro',
        'fSolicitud'
    ];

}
