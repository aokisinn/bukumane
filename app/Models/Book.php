<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

/**
 * @property int $id
 * @property string $title
 * @property string $author
 * @property string $caption
 * @property string $publisher
 * @property string $isbn
 * @property string $large_image_url
 * @property string $medium_image_url
 * @property string $small_image_url
 * @property string $sales_date
 * @property int $price
 * @property string $size
 * @property string $item_url
 * @property int $created_user_id
 * @property User $user
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class Book extends Model
{
    /**
     * @var array
     */
    protected $fillable = [
        'title',
        'author',
        'caption',
        'publisher',
        'isbn',
        'large_image_url',
        'medium_image_url',
        'small_image_url',
        'sales_date',
        'price',
        'size',
        'item_url',
        'created_user_id'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'registered_user_id');
    }
}
