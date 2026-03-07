<?php

namespace App\Http\Controllers;

use App\Models\BookingRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class BookingRequestController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'form_type' => ['required', Rule::in(['customer', 'client'])],
            'source_page' => ['nullable', Rule::in(['home', 'contact'])],
            'booked_by_name' => ['required', 'string', 'max:255'],
            'booked_by_phone' => ['required', 'string', 'max:30'],
            'booked_by_email' => ['nullable', 'email', 'max:255'],
            'client_name' => ['required_if:form_type,client', 'nullable', 'string', 'max:255'],
            'client_phone' => ['required_if:form_type,client', 'nullable', 'string', 'max:30'],
            'client_email' => ['nullable', 'email', 'max:255'],
            'reporting_date' => ['nullable', 'date'],
            'reporting_place' => ['nullable', 'string', 'max:255'],
            'reporting_time' => ['nullable', 'date_format:H:i'],
            'cab_type' => ['nullable', Rule::in(['Hatchback', 'Sedan', 'SUV/MUV'])],
            'special_instructions' => ['nullable', 'string', 'max:2000'],
        ]);

        BookingRequest::create($validated);

        return back(303)->with('success', 'Booking request submitted successfully.');
    }
}

