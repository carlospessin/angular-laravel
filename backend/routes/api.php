<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\NivelController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('nivel')->group(function () {
    Route::get('/',[ NivelController::class, 'getAll']);
    Route::post('/',[ NivelController::class, 'create']);
    Route::delete('/{id}',[ NivelController::class, 'delete']);
    Route::get('/{id}',[ NivelController::class, 'get']);
    Route::put('/{id}',[ NivelController::class, 'update']);
});