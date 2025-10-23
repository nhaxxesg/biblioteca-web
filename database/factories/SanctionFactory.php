<?php

namespace Database\Factories;

use App\Models\Sanction;
use App\Models\Reader;
use Illuminate\Database\Eloquent\Factories\Factory;

class SanctionFactory extends Factory
{
    protected $model = Sanction::class;

    public function definition()
    {
        return [
            'lector_id' => Reader::factory(),
            'reason' => $this->faker->sentence(),
            'start_date' => $this->faker->dateTimeBetween('-1 month', 'now'),
            'end_date' => $this->faker->dateTimeBetween('now', '+1 month'),
        ];
    }
}