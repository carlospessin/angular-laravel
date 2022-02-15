<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use phpDocumentor\Reflection\Types\Nullable;

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
            $table->string('nome')->nullable();
            $table->string('endereco')->nullable();
            $table->char('sexo')->comment('Masculino; Feminino; Outros')->nullable();
            $table->date('data_nascimento')->nullable();
            $table->integer('idade')->nullable();
            $table->string('hobby')->nullable();
            $table->unsignedBigInteger('nivel_id')->nullable();
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
