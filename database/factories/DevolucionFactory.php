<?php

namespace Database\Factories;

use App\Models\Devolucion;
use App\Models\Loan;
use Illuminate\Database\Eloquent\Factories\Factory;

class DevolucionFactory extends Factory
{
    protected $model = Devolucion::class;

    public function definition()
    {
        return [
            'prestamo_id' => Loan::factory(),
            'return_date' => $this->faker->dateTimeBetween('-1 week', 'now'),
            'condition' => $this->faker->randomElement(['good', 'damaged', 'lost']),
        ];
    }
}