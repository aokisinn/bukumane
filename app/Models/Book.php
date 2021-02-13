<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

/**
 * @property int $id
 * @property string $photo_url
 * @property string $name
 * @property string $description
 * @property string $authors
 * @property string $publisher
 * @property string $isbn10
 * @property string $isbn13
 * @property string $release_date
 * @property int $created_user_id
 * @property User $user
 * @property string $created_at
 * @property string $updated_at
 */
class Book extends Model
{
    /**
     * @var array
     */
    protected $fillable = ['photo_url', 'name', 'description', 'authors', 'publisher', 'isbn10', 'isbn13', 'release_date', 'registered_user_id'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'registered_user_id');
    }
}
