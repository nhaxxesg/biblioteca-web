<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('categoria', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });

        Schema::create('autor', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('nationality')->nullable();
            $table->timestamps();
        });

        Schema::create('libro', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('isbn')->unique();
            $table->integer('publication_year');
            $table->integer('stock');
            $table->foreignId('category_id')->constrained('categoria');
            $table->timestamps();
        });

        Schema::create('libro_autors', function (Blueprint $table) {
            $table->id();
            $table->foreignId('libro_id')->constrained('libro')->onDelete('cascade');
            $table->foreignId('autor_id')->constrained('autor')->onDelete('cascade');
            $table->timestamps();
        });

        Schema::create('lector', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('APaterno');
            $table->string('AMaterno');
            $table->string('DNI');
            $table->string('codigoLec');
            $table->string('semestre');
            $table->integer('idTipo');
            $table->integer('idArea');
            $table->timestamps();
        });

        Schema::create('prestamo', function (Blueprint $table) {
            $table->id();
            $table->foreignId('libro_id')->constrained('libro');
            $table->foreignId('lector_id')->constrained('lector');
            $table->dateTime('loan_date');
            $table->dateTime('return_date');
            $table->string('status')->default('active');
            $table->timestamps();
        });

        Schema::create('devolucion', function (Blueprint $table) {
            $table->id();
            $table->foreignId('prestamo_id')->constrained('prestamo');
            $table->dateTime('return_date');
            $table->string('condition');
            $table->timestamps();
        });

        Schema::create('sancion', function (Blueprint $table) {
            $table->id();
            $table->foreignId('lector_id')->constrained('lector');
            $table->string('reason');
            $table->dateTime('start_date');
            $table->dateTime('end_date');
            $table->timestamps();
        });

        Schema::create('solicitud', function (Blueprint $table) {
            $table->id();
            $table->foreignId('lector_id')->constrained('lector');
            $table->foreignId('libro_id')->constrained('libro');
            $table->string('status');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('solicitud');
        Schema::dropIfExists('sancion');
        Schema::dropIfExists('devolucion');
        Schema::dropIfExists('prestamo');
        Schema::dropIfExists('lector');
        Schema::dropIfExists('libro_autors');
        Schema::dropIfExists('libro');
        Schema::dropIfExists('autor');
        Schema::dropIfExists('categoria');
    }
};