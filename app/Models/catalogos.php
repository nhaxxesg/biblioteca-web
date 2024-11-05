<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class catalogos extends Model
{
    use HasFactory;
    protected $table = 'catalogos';
    protected $fillable = ['codigo','titulo','autor','año','estado'];
    
}
