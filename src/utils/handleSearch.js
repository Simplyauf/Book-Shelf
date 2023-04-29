import { books } from "../booksJson";

export const handleSearchBooks = (searchValue, setCurrentTableData) => {
    let searchInput = searchValue.toUpperCase().trim();
    const searchedBooks = books.filter((books) => {
        return (
            books.title.toUpperCase().trim().includes(searchInput) ||
            books.author.toUpperCase().trim().includes(searchInput)
        );
    });
    console.log(searchedBooks);
    setCurrentTableData(searchedBooks);
};
