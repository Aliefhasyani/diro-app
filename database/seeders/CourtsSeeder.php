<?php

namespace Database\Seeders;

use App\Models\Court;
use Illuminate\Database\Seeder;

class CourtsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $courts = [
            [
                'name' => 'Court 1',
                'image_path' => './images/court1.png',
                'price' => 50000,
            ],
            [
                'name' => 'Court 2',
                'image_path' => './images/court1.png',
                'price' => 60000,
            ],
            [
                'name' => 'Court 3',
                'image_path' => './images/court1.png',
                'price' => 70000,
            ],
            [
                'name' => 'Court 4',
                'image_path' => './images/court1.png',
                'price' => 80000,
            ],
            [
                'name' => 'Court 5',
                'image_path' => './images/court1.png',
                'price' => 90000,
            ],
        ];

        foreach ($courts as $court) {
            Court::create($court);
        }
    }
}
