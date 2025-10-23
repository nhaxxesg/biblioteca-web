<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Devolucion extends Model
{
    use HasFactory;

    protected $table = 'devolucion';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $fillable = [ 
        'prestamo_id',
        'return_date',
        'condition'
    ];

    public function prestamo()
    {
        return $this->belongsTo(Loan::class, 'prestamo_id');
    }

    // Alias used by some tests
    public function loan()
    {
        return $this->prestamo();
    }
}
