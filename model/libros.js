class Libro {
    titulo
    autor
    genero
    paginas
    fechaPublicacion = new Date()
   
    constructor(titulo, autor, genero, paginas) {
        this.titulo = titulo
        this.autor = autor
        this.genero = genero
        this.paginas = paginas
       
    }
}



const libro1 = new Libro("El señor de los anillos", "J.R.R. Tolkien", "Fantasía", 1200, 5)
const libro2 = new Libro("Cien años de soledad", "Gabriel García Márquez", "Realismo mágico", 432, 4)
const libro3 = new Libro("1984", "George Orwell", "Ciencia ficción", 328, 4.5)
const libro4 = new Libro("Orgullo y prejuicio", "Jane Austen", "Romance", 416, 4.8)
const libro5 = new Libro("Harry Potter y la piedra filosofal", "J.K. Rowling", "Fantasía", 336, 4.7)
console.log(libro1)
console.log(libro2)
console.log(libro3)
console.log(libro4)
console.log(libro5)