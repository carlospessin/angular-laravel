<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProgramadorTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('programador', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->string('endereco');
            $table->char('sexo')->comment('Masculino; Feminino; Outros');
            $table->date('data_nascimento');
            $table->integer('idade');
            $table->string('hobby');
            $table->unsignedBigInteger('nivel_id');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('nivel_id', 'fk_programador_nivel')->references('id')
                ->on('nivel')
                ->onDelete('NO ACTION')
                ->onUpdate('NO ACTION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('programador');
    }
}
