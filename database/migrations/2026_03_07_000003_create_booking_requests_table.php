<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('booking_requests', function (Blueprint $table) {
            $table->id();
            $table->string('form_type', 20);
            $table->string('source_page', 20)->nullable();
            $table->string('booked_by_name');
            $table->string('booked_by_phone', 30);
            $table->string('booked_by_email')->nullable();
            $table->string('client_name')->nullable();
            $table->string('client_phone', 30)->nullable();
            $table->string('client_email')->nullable();
            $table->date('reporting_date')->nullable();
            $table->string('reporting_place')->nullable();
            $table->time('reporting_time')->nullable();
            $table->string('cab_type', 30)->nullable();
            $table->text('special_instructions')->nullable();
            $table->timestamps();

            $table->index(['form_type', 'created_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('booking_requests');
    }
};

