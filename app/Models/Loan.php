<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Loan extends Model
{
    use HasFactory;
    protected $table = 'prestamo';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $fillable = [
        'libro_id',
        'lector_id',
        'loan_date',
        'return_date',
        'status'
    ];

    public function book()
    {
        return $this->belongsTo(Book::class, 'libro_id');
    }

    public function reader()
    {
        return $this->belongsTo(Reader::class, 'lector_id');
    }
}
