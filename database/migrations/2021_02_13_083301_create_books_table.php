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
            $table->text('title');
            $table->text('author');
            $table->text('caption');
            $table->text('publisher');
            $table->text('isbn');
            $table->text('large_image_url');
            $table->text('medium_image_url');
            $table->text('small_image_url');
            $table->text('sales_date');
            $table->text('price');
            $table->text('size');
            $table->text('item_url');
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
