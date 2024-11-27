<?php

namespace Database\Factories;

use App\Models\Reader;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class UsuarioFactory extends Factory
{
    protected $model = Reader::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nombre' => $this->faker->name(),
            'APaterno' => $this->faker->lastName(),
            'AMaterno' =>  $this->faker->lastName(),
            'DNI' => $this->faker->randomNumber(8),
            'codigoLec' => $this->faker->sentence(10),
            'semestre' => $this->faker->sentence(10),
            'idTipo' => $this->faker->numberBetween(1,2),
            'idArea' => $this->faker->numberBetween(1,10),
            'created_at' => $this->faker->dateTimeThisYear(),
            'updated_at' => $this->faker->dateTimeThisMonth()
        ];
    }
}
