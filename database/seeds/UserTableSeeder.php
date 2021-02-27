<?php

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Enums\UserRoleType;

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
        $user->email = "aoki@test.jp";
        $user->password = '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'; // password

        $user->save();
    }
}
