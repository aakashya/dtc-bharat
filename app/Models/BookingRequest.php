<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookingRequest extends Model
{
    use HasFactory;

    protected $fillable = [
        'form_type',
        'source_page',
        'booked_by_name',
        'booked_by_phone',
        'booked_by_email',
        'client_name',
        'client_phone',
        'client_email',
        'reporting_date',
        'reporting_place',
        'reporting_time',
        'cab_type',
        'special_instructions',
    ];

    protected $casts = [
        'reporting_date' => 'date',
    ];
}

