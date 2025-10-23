<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sanction extends Model
{
    use HasFactory;
    protected $table = 'sancion';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $fillable = [
        'lector_id',
        'reason',
        'start_date',
        'end_date'
    ];

    public function reader()
    {
        return $this->belongsTo(Reader::class, 'lector_id');
    }
}
