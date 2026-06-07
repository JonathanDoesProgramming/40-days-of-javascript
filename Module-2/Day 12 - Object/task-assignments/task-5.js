// Book Store Inventory System
const books = {
    library: "Metro Manila Public Library",
    location: {
        city: "Pasig",
        zip: "1600"
    },
    categories: [
        {
            genre: "Fiction",
            titles: [
                { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
                { title: "1984", author: "George Orwell", year: 1949 }
            ],
            availability: true,
            stocks: 5,
        },
        {
            genre: "Science",
            titles: [
                { title: "A Brief History of Time", author: "Stephen Hawking", year: 1988 },
                { title: "The Selfish Gene", author: "Richard Dawkins", year: 1976 }
            ],
            availability: false,
            stocks: 5
        },
        {
            genre: "Philosophy",
            titles: [
                { title: "Meditations", author: "Marcus Aurelius", year: 180 },
                { title: "The Republic", author: "Plato", year: -380 }
            ],
            availability: true,
            stocks: 5
        },
    ],
    checkAvailStock: function () {
        const avail = this.categories[0].availability;
        const stock = this.categories[0].stocks;

        if (!avail && !stock) {
            return 'Out of stock, no available books'
        } else {
            return `
            Available: ${avail}
            Stocks: ${stock}
            `;
        }
    },
};
console.log(books.checkAvailStock());