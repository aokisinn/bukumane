<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Book;

/**
 * @property int $id
 * @property int $user_id
 * @property int $book_id
 * @property int $state
 * @property Carbon $borrow_date
 * @property Carbon $return_date
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class Rental extends Model
{
    /**
     * @var array
     */
    protected $fillable = [
        'user_id',
        'book_id',
        'state',
        'borrow_date',
        'return_date'
    ];

    protected $dates = [
        'borrow_date',
        'return_date'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function book()
    {
        return $this->belongsTo(Book::class);
    }
}
