<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Book;
use App\Models\Autor;
use App\Models\Reader;
use App\Models\Loan;
use App\Models\Solicitud;
use App\Models\Sanction;
use App\Models\Category;
use App\Models\LibroAutor;
use App\Models\Devolucion;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

class ModelsTest extends BaseTestCase
{
    use RefreshDatabase;

    // 1. Prueba de creación de libro
    public function test_can_create_book()
    {
        $bookData = [
            'title' => 'El Quijote',
            'isbn' => '978-84-376-0494-7',
            'publication_year' => 2020,
            'stock' => 5,
            'category_id' => Category::factory()->create()->id
        ];

        $book = Book::factory()->create($bookData);

        $this->assertInstanceOf(Book::class, $book);
        $this->assertEquals($bookData['title'], $book->title);
        $this->assertEquals($bookData['isbn'], $book->isbn);
    }

    // 2. Prueba de relación libro-autor
    public function test_book_author_relationship()
    {
        $book = Book::factory()->create();
        $autor = Autor::factory()->create();

        LibroAutor::create([
            'libro_id' => $book->id,
            'autor_id' => $autor->id
        ]);

        $this->assertTrue($book->autores->contains($autor));
    }

    // 3. Prueba de préstamo de libro
    public function test_can_create_loan()
    {
        $book = Book::factory()->create(['stock' => 1]);
        $reader = Reader::factory()->create();

        $loan = Loan::create([
            'libro_id' => $book->id,
            'lector_id' => $reader->id,
            'loan_date' => now(),
            'return_date' => now()->addDays(7)
        ]);

        $this->assertInstanceOf(Loan::class, $loan);
        $this->assertEquals($book->id, $loan->book_id);
    }

    // 4. Prueba de verificación de stock
    public function test_book_stock_verification()
    {
        $book = Book::factory()->create(['stock' => 0]);
        
        $this->assertEquals(0, $book->stock);
        $this->assertFalse($book->isAvailable());
    }

    // 5. Prueba de creación de solicitud
    public function test_can_create_solicitud()
    {
        $reader = Reader::factory()->create();
        $book = Book::factory()->create();

        $solicitud = Solicitud::create([
            'lector_id' => $reader->id,
            'libro_id' => $book->id,
            'status' => 'pending'
        ]);

        $this->assertInstanceOf(Solicitud::class, $solicitud);
        $this->assertEquals('pending', $solicitud->status);
    }

    // 6. Prueba de sanción a lector
    public function test_can_create_sanction()
    {
        $reader = Reader::factory()->create();

        $sanction = Sanction::create([
            'lector_id' => $reader->id,
            'reason' => 'Libro dañado',
            'start_date' => now(),
            'end_date' => now()->addDays(30)
        ]);

        $this->assertInstanceOf(Sanction::class, $sanction);
        $this->assertEquals($reader->id, $sanction->reader_id);
    }

    // 7. Prueba de categorización de libros
    public function test_book_category_assignment()
    {
        $category = Category::create(['name' => 'Ficción']);
        $book = Book::factory()->create();

        $book->category_id = $category->id;
        $book->save();

        $this->assertEquals($category->id, $book->category_id);
    }

    // 8. Prueba de devolución de libro
    public function test_can_create_devolution()
    {
        $loan = Loan::factory()->create();

        $devolucion = Devolucion::create([
            'prestamo_id' => $loan->id,
            'return_date' => now(),
            'condition' => 'good'
        ]);

        $this->assertInstanceOf(Devolucion::class, $devolucion);
        $this->assertEquals('good', $devolucion->condition);
    }

    // 9. Prueba de actualización de usuario
    public function test_can_update_user()
    {
        $user = User::factory()->create();
        
        $updatedData = [
            'name' => 'Nuevo Nombre',
            'email' => 'nuevo@email.com'
        ];

        $user->update($updatedData);

        $this->assertEquals($updatedData['name'], $user->name);
        $this->assertEquals($updatedData['email'], $user->email);
    }

    // 10. Prueba de búsqueda de libro por ISBN
    public function test_can_find_book_by_isbn()
    {
        $book = Book::factory()->create(['isbn' => '123-456-789']);

        $foundBook = Book::where('isbn', '123-456-789')->first();

        $this->assertNotNull($foundBook);
        $this->assertEquals($book->id, $foundBook->id);
    }

    // 11. Prueba de validación de fecha de devolución
    public function test_loan_return_date_validation()
    {
        $loan = Loan::factory()->create([
            'loan_date' => now(),
            'return_date' => now()->addDays(7)
        ]);

        $this->assertTrue($loan->return_date->gt($loan->loan_date));
    }

    // 12. Prueba de conteo de préstamos activos
    public function test_active_loans_count()
    {
        $reader = Reader::factory()->create();
        Loan::factory()->count(3)->create([
            'reader_id' => $reader->id,
            'status' => 'active'
        ]);

        $activeLoansCount = $reader->loans()->where('status', 'active')->count();

        $this->assertEquals(3, $activeLoansCount);
    }

    // 13. Prueba de verificación de sanciones activas
    public function test_active_sanctions_verification()
    {
        $reader = Reader::factory()->create();
        Sanction::factory()->create([
            'reader_id' => $reader->id,
            'start_date' => now()->subDay(),
            'end_date' => now()->addDays(5)
        ]);

        $hasActiveSanctions = $reader->sanctions()
            ->where('end_date', '>', now())
            ->exists();

        $this->assertTrue($hasActiveSanctions);
    }

    // 14. Prueba de creación de autor
    public function test_can_create_autor()
    {
        $autorData = [
            'name' => 'Gabriel García Márquez',
            'nationality' => 'Colombiano'
        ];

        $autor = Autor::create($autorData);

        $this->assertInstanceOf(Autor::class, $autor);
        $this->assertEquals($autorData['name'], $autor->name);
    }

    // 15. Prueba de múltiples autores por libro
    public function test_multiple_authors_per_book()
    {
        $book = Book::factory()->create();
        $authors = Autor::factory()->count(3)->create();

        foreach ($authors as $author) {
            LibroAutor::create([
                'book_id' => $book->id,
                'autor_id' => $author->id
            ]);
        }

        $this->assertEquals(3, $book->autores()->count());
    }

    // 16. Prueba de historial de préstamos
    public function test_reader_loan_history()
    {
        $reader = Reader::factory()->create();
        Loan::factory()->count(5)->create(['reader_id' => $reader->id]);

        $this->assertEquals(5, $reader->loans()->count());
    }

    // 17. Prueba de actualización de stock
    public function test_book_stock_update()
    {
        $book = Book::factory()->create(['stock' => 10]);
        
        $book->stock -= 1;
        $book->save();

        $this->assertEquals(9, $book->fresh()->stock);
    }

    // 18. Prueba de validación de email único
    public function test_unique_user_email()
    {
        $user1 = User::factory()->create(['email' => 'test@example.com']);
        
        $this->expectException(\Illuminate\Database\QueryException::class);
        
        User::factory()->create(['email' => 'test@example.com']);
    }

    // 19. Prueba de eliminación de libro
    public function test_can_delete_book()
    {
        $book = Book::factory()->create();
        $bookId = $book->id;

        $book->delete();

        $this->assertNull(Book::find($bookId));
    }

    // 20. Prueba de relación entre devolución y préstamo
    public function test_devolution_loan_relationship()
    {
        $loan = Loan::factory()->create();
    $devolucion = Devolucion::factory()->create(['prestamo_id' => $loan->id]);

    $this->assertEquals($loan->id, $devolucion->loan()->first()->id);
    }
}