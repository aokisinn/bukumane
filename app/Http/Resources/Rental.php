<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class Rental extends JsonResource
{
    public static $wrap = 'rental';

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
            'user' => $this->user()->get()[0],
            'book_id' => $this->book_id,
            'state' => $this->state,
            'borrow_date' => $this->borrow_date,
            'return_date' => $this->return_date,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
