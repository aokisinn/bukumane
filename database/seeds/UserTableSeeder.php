<?php

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Enums\UserRoleType;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User();
        $user->role = UserRoleType::ADMIN;
        $user->name = "aoki";
        $user->email = "aoki_s@mediaxis.jp";
        $user->password =  Hash::make('q4N7ZtvS');

        $user->save();
    }
}
