<?php

use App\Http\Controllers\Api\AreaController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\LoanController;
use App\Http\Controllers\LibroAutorController;
use App\Http\Controllers\ProfileController;
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
})->name('devolucion');

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
Route::apiResource('loan', LoanController::class);
Route::get('/categoria/{idCategoria?}', [LibroAutorController::class, 'index']);
Route::apiResource('category', CategoryController::class);

require __DIR__.'/auth.php';