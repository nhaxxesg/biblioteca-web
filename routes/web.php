<?php

use App\Http\Controllers\Api\AutorController;
use App\Http\Controllers\Api\BookController;
use App\Http\Controllers\Api\LoanController;
use App\Http\Controllers\Api\SanctionController;
use App\Http\Controllers\LibroAutorController;
use App\Http\Controllers\ProfileController;
use App\Models\Book;
use App\Models\LibroAutor;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get('/Devolucion', function () {
    return Inertia::render('MenuDevoluciones/index');
})->name('Devolucion');

Route::get('/sanciones', function () {
    return Inertia::render('Sanciones/index');
})->name('sanciones');

Route::get('/mainmenu', function () {
    return Inertia::render('MainMenu/index');
})->name('mainmenu');

Route::get('/menuprestamos', function () {
    return Inertia::render('MenuPrestamos/index');
})->name('menuprestamos');

Route::get('/catalogo', function () {
    return Inertia::render('CatalagoMenu/CatalogPage');
})->name('catalogo');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::apiResource('libroautor', LibroAutorController::class);
Route::apiResource('autor', AutorController::class);
Route::apiResource('loan', LoanController::class);
Route::apiResource('sanction', SanctionController::class);
Route::apiResource('libro', BookController::class);
Route::get('libroautor/loans', [LibroAutorController::class, 'index_loans']);

require __DIR__.'/auth.php';