<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\Nivel;
Use Log;

class NivelController extends Controller
{

    public function getAll(){
      $data = Nivel::get();
      return response()->json($data, 200);
    }

    public function create(Request $request){
      $data['nivel'] = $request['nivel'];
      Nivel::create($data);
      return response()->json([
          'message' => "Criado com sucesso",
          'success' => true
      ], 200);
    }

    public function delete($id){
      $res = Nivel::find($id)->delete();
      return response()->json([
          'message' => "Excluído com sucesso",
          'success' => true
      ], 200);
    }

    public function get($id){
      $data = Nivel::find($id);
      return response()->json($data, 200);
    }

    public function update(Request $request,$id){
      $data['nivel'] = $request['nivel'];
      Nivel::find($id)->update($data);
      return response()->json([
          'message' => "Atualizado com sucesso",
          'success' => true
      ], 200);
    }
}