<?php

namespace Database\Factories;

use App\Models\Loan;
use App\Models\Book;
use App\Models\Reader;
use Illuminate\Database\Eloquent\Factories\Factory;

class LoanFactory extends Factory
{
    protected $model = Loan::class;

    public function definition()
    {
        return [
            'libro_id' => Book::factory(),
            'lector_id' => Reader::factory(),
            'loan_date' => $this->faker->dateTimeBetween('-1 month', 'now'),
            'return_date' => $this->faker->dateTimeBetween('now', '+1 month'),
            'status' => $this->faker->randomElement(['active', 'returned', 'overdue']),
        ];
    }
}