<?php

use App\Http\Controllers\Api\AreaController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\DevolucionController;
use App\Http\Controllers\Api\LoanController;
use App\Http\Controllers\Api\SanctionController;
use App\Http\Controllers\Api\SolicitudController;
use App\Http\Controllers\LibroAutorController;
use App\Http\Controllers\ProfileController;
use App\Models\Solicitud;
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
Route::get('/menudevolucion', function () {
    return Inertia::render('MenuDevoluciones/index');
})->name('menudevolucion');

Route::get('/menusanciones', function () {
    return Inertia::render('Sanciones/index');
})->name('menusanciones');

Route::get('/mainmenu', function () {
    return Inertia::render('MainMenu/index');
})->name('mainmenu');

Route::get('/menuprestamos', function () {
    return Inertia::render('MenuPrestamos/index');
})->name('menuprestamos');

Route::get('/menucatalogo', function () {
    return Inertia::render('CatalagoMenu/CatalogPage');
})->name('menucatalogo');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::apiResource('libroautor', LibroAutorController::class);
Route::apiResource('loan', LoanController::class);
Route::get('/categoria/{idCategoria?}', [LibroAutorController::class, 'index']);
Route::apiResource('category', CategoryController::class);
// Route::apiResource('sanction', SanctionController::class);
Route::apiResource('solicitud', SolicitudController::class);
Route::get('/devolucion/{idUser}', [DevolucionController::class, 'show']);
Route::get('/devolucion/search/{name}', [DevolucionController::class, 'searchByName']);
Route::get('/sanction/{idUser}', [SanctionController::class, 'show']);

require __DIR__.'/auth.php';