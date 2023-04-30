import { useParams, useNavigate } from "react-router-dom";
import { books } from "../booksJson";
import bookImg from "../assets/9-open-book-drawing-for-kindergarten.webp";

export const BookDetails = () => {
    const navigate = useNavigate();
    console.log(useParams());
    const { id } = useParams();
    let selectedBook = books.find((book) => {
        return book.id === Number(id);
    });

    return (
        <>
            <button
                className="bg-primaryColor_1 hover:bg-primaryColor_1 text-secondaryColor font-bold py-2 px-4 rounded my-10"
                onClick={() => navigate("/")}
            >
                back
            </button>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row -mx-4 gap-4">
                    <div className="md:w-1/3 mx-auto md:mx-0 md:pr-4 md:pb-8">
                        <img
                            src={bookImg}
                            alt={selectedBook.title}
                            className="w-full h-full object-contain rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:w-2/3 mx-auto md:mx-0 md:pl-4">
                        <h1 className="text-4xl font-bold mb-4">{selectedBook.title}</h1>
                        <p className="text-xl font-semibold mb-4">{selectedBook.author}</p>
                        <p className="text-lg mb-4">
                            <strong>Publication Date:</strong> {selectedBook.publication_date}
                        </p>
                        <p className="text-lg mb-4">
                            <strong>Genre:</strong> {selectedBook.genre}
                        </p>
                        {/* <p className="text-lg mb-8">{selectedBook.description}</p> */}
                    </div>
                </div>
            </div>
        </>
    );
};
