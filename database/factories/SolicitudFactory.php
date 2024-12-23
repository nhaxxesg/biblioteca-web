<?php

namespace Database\Factories;

use App\Models\Solicitud;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Solicitud>
 */
class SolicitudFactory extends Factory
{
    protected $model = Solicitud::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'fsolicitud' => $this->faker->date(),
            'idLector' => $this->faker->numberBetween(100,500),
            'idLibro' =>  $this->faker->numberBetween(100,500),
            'estado' => $this->faker->sentence(),
            'created_at' => $this->faker->dateTimeThisYear(),
            'updated_at' => $this->faker->dateTimeThisMonth()
        ];
    }
}
