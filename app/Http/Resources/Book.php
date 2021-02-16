<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class Book extends JsonResource
{
    public static $wrap = 'book';

    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'author' => $this->author,
            'caption' => $this->caption,
            'publisher' => $this->publisher,
            'isbn' => $this->isbn,
            'large_image_url' => $this->large_image_url,
            'medium_image_url' => $this->medium_image_url,
            'small_image_url' => $this->small_image_url,
            'item_url' => $this->item_url,
            'sales_date' => $this->sales_date,
            'price' => $this->price,
            'size' => $this->size,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
