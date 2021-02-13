<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->text('name');
            $table->text('description')->nullable();
            $table->text('publisher')->nullable();
            $table->text('photo_url');
            $table->text('authors')->nullable();
            $table->text('isbn10')->nullable();
            $table->text('isbn13')->nullable();
            $table->datetime('release_date')->nullable();
            $table->integer('created_user_id');
            $table->foreign("created_user_id")->references("id")->on("users");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('books');
    }
}
