<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Programador;
use Illuminate\Http\Request;

class ProgramadorController extends Controller
{
    public function getAll(){
        $data = Programador::get();
        return response()->json($data, 200);
      }
  
      public function create(Request $request){
        $data['nome'] = $request['nome'];
        $data['sexo'] = $request['sexo'];
        $data['data_nascimento'] = $request['data_nascimento'];
        $data['idade'] = $request['idade'];
        $data['hobby'] = $request['hobby'];
        $data['nivel_id'] = $request['nivel_id'];
        Programador::create($data);
        return response()->json([
            'message' => "Criado com sucesso",
            'success' => true
        ], 200);
      }
  
      public function delete($id){
        $res = Programador::find($id)->delete();
        return response()->json([
            'message' => "Excluído com sucesso",
            'success' => true
        ], 200);
      }
  
      public function get($id){
        $data = Programador::find($id);
        return response()->json($data, 200);
      }
  
      public function update(Request $request,$id){
        $data['programador'] = $request['programador'];
        Programador::find($id)->update($data);
        return response()->json([
            'message' => "Atualizado com sucesso",
            'success' => true
        ], 200);
      }
}
