<?php

namespace App\Http\Requests;

use App\Enums\BlogPostStatus;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Validator;

class UpdateBlogPostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user() !== null;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'excerpt' => ['required', 'string', 'max:2000'],
            'category' => ['nullable', 'string', 'max:120'],
            'status' => ['nullable', Rule::in(BlogPostStatus::values())],
            'featured_image' => ['nullable', 'image', 'max:5120'],
            'remove_featured_image' => ['nullable', 'boolean'],
            'content' => ['required', 'array'],
            'content.heading' => ['nullable', 'string', 'max:255'],
            'content.blocks' => ['nullable', 'array'],
            'content.blocks.*.type' => ['required_with:content.blocks', Rule::in(['paragraph', 'list'])],
            'content.blocks.*.text' => ['nullable', 'string', 'max:5000'],
            'content.blocks.*.items' => ['nullable', 'array'],
            'content.blocks.*.items.*' => ['nullable', 'string', 'max:500'],
        ];
    }

    protected function prepareForValidation(): void
    {
        $content = $this->input('content');

        if (is_string($content)) {
            $decodedContent = json_decode($content, true);
            if (json_last_error() === JSON_ERROR_NONE && is_array($decodedContent)) {
                $content = $decodedContent;
            }
        }

        $this->merge([
            'title' => trim((string) $this->input('title', '')),
            'excerpt' => trim((string) $this->input('excerpt', '')),
            'category' => trim((string) $this->input('category', '')),
            'remove_featured_image' => $this->boolean('remove_featured_image'),
            'status' => $this->input('status') ?: BlogPostStatus::DRAFT->value,
            'content' => is_array($content) ? $content : [],
        ]);
    }

    public function withValidator(Validator $validator): void
    {
        $validator->after(function (Validator $validator): void {
            foreach ((array) $this->input('content.blocks', []) as $index => $block) {
                $type = $block['type'] ?? null;

                if ($type === 'paragraph' && trim((string) ($block['text'] ?? '')) === '') {
                    $validator->errors()->add("content.blocks.{$index}.text", 'Paragraph text is required.');
                }

                if ($type === 'list') {
                    $items = collect($block['items'] ?? [])
                        ->map(static fn ($item): string => trim((string) $item))
                        ->filter();

                    if ($items->isEmpty()) {
                        $validator->errors()->add("content.blocks.{$index}.items", 'At least one list item is required.');
                    }
                }
            }
        });
    }
}
