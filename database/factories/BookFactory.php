<?php

namespace Database\Factories;

use App\Models\Book;
use Illuminate\Database\Eloquent\Factories\Factory;

class BookFactory extends Factory
{
    protected $model = Book::class;

    public function definition()
    {
        return [
            'title' => $this->faker->sentence(3),
            'isbn' => $this->faker->isbn13(),
            'publication_year' => $this->faker->year(),
            'stock' => $this->faker->numberBetween(0, 10),
            'category_id' => \App\Models\Category::factory(),
        ];
    }
}