/*
Reference
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
*/
var booksdb = new Map();
// Sample Test Data 
booksdb.set("1593272820", {
    "title": "Eloquent JavaScript: A Modern Introduction to Programming",
    "author": "Marijn Haverbeke",
    "formats": {
        "kindle": {
            "price": 15.00,
            "features": [
    "voice"
    ]
        }
    },
    "price": 19.98,

});
booksdb.set("1593271069", {
    "title": "The Book of JavaScript, 2nd Edition",
    "author": "Dave Thau"
});
booksdb.set("059680279X", {
    "title": "High-Performance JavaScript, by Nicholas Zakas",
    "author": "Nicholas Zakas"
});

function UpdateBookPrice(isdn, price) {
// TODO  fetch book details and update price
return undefined;
}

function LowPriceBook() {
    var lowPriceBook;
    var minPrice;
    // TODO enumerate items findout atleast price book 
    return {
        "book": lowPriceBook,
        "price": minPrice
    };
}

describe("My Bookstore", function () {

    it("Number of books", function () {
        var size;
       //TODO findout number of books
        expect(size).toBe(3);
    });

    it("Know Book by ISDN", function () {
        var book 
        //TODO: findout book by id
        expect(book).toBeTruthy();
        expect(book.author).toBe("Nicholas Zakas");
    });
    it("Update Book Price", function () {
        var book = UpdateBookPrice('059680279X', 100); // Read Item by key
        expect(book.price).toBe(100);
    });
    it("Find Least Price Book", function () {
        var result = LowPriceBook(); // Read Item by key
        expect(result.price).toBe(15);
    });
});
