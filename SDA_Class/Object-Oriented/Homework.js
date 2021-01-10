// library-Homework

class BookFinder {
    constructor() {
        let _books = [];
        this.getAllBooks =  () => _books
        this.addBook = book => _books.push(book)
        
        this.findBookById = (bookId) => _books.find(currentBook => currentBook.Id === bookId)  
        this.deleteFunction = (bookId) => _books.splice(findBookById, 1)    
    }
}

class Book {
    constructor(title, author, year, Id) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.Id = Id;
    }
}

const listOfBooks = new BookFinder();

listOfBooks.addBook(new Book("The Bloomsbury Anthology of Great Indian Poems","Abhay K.","2020","001A"))
listOfBooks.addBook(new Book("Karmayoddha Granth","Amit Shah.","2020","002B"))
listOfBooks.addBook(new Book("Politics of Opportunism","R P N Singh","2019","003C"))
listOfBooks.addBook(new Book("Karmayoddha Granth","Amit Shah.","2020","004D"))

let bookSearch = listOfBooks.findBookById("001A")
console.log(` 
    Title: ${bookSearch.title}
    Author: ${bookSearch.author} 
    Year: ${bookSearch.year}`);
console.log(deleteFunction(_books))