import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { books } from "../booksJson";
import { useEffect, useState } from "react";
import { handleSearchBooks } from "../utils/handleSearch";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
    const navigate = useNavigate();

    const [currentTableData, setCurrentTableData] = useState([]);

    // on app start
    useEffect(() => {
        setCurrentTableData(books);
    }, []);

    return (
        <section cl>
            <header className="my-8 ml-8">
                <h2 className="text-4xl font-bold text-primaryColor_1 ">Book Shelf</h2>
            </header>
            <main className="w-full rounded-[16px] ">
                <div className="w-full bg-primaryColor_1  text-secondaryColor rounded-t-[16px] p-4">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-3xl font-bold">Book Shelf</h2>
                        <p className="text-lg font-medium">Get the best books from this library</p>
                    </div>

                    <div className="mt-10  flex  flex-col md:flex-row md:justify-between md:items-start  tablet:px-[8%] px-[5%] md:px-[7%]  w-[100%]">
                        <div className="w-[100%] md:w-[45%] lg:w-[40%]    h-14 relative rounded-md shadow-[1px_3px_25px_-2px_rgba(0,0,0,0.1)]">
                            <input
                                className="w-[100%] h-[100%] text-black pl-16 rounded-md focus:border-transparent focus:outline-transparent"
                                type="search"
                                name=""
                                placeholder="booknames/ authors"
                                onChange={(e) => handleSearchBooks(e.currentTarget.value, setCurrentTableData)}
                            />
                            <AiOutlineSearch className="absolute text-[18px] fill-gray-600  w-6 h-6  top-4 left-8" />
                        </div>
                        <article className="w-[65%] tablet:w-[40%] md:w-[30%]  laptop:w-[17%] lg:w-[22%] md:mt-0 mt-10 mb-12 flex-col flex gap-2">
                            <div
                                className="flex bg-mainElementColor justify-between h-14 bg-secondaryColor rounded-md shadow-[0.5px_2px_32px_-2px_rgba(0,0,0,0.1)] items-center px-[10%] cursor-pointer text-gray-700"
                                onClick={(e) => {
                                    e.currentTarget.nextElementSibling.classList.toggle("active-region-container");
                                }}
                            >
                                <h2>Filter by Genre</h2>
                                <RiArrowDropDownLine className="w-8 h-8 " />
                            </div>
                            <div className=" hidden flex-col rounded-md shadow-[0px_2px_32px_-2px_rgba(0,0,0,0.1)] bg-mainElementColor  py-4  gap-4 z-50 px-[10%] sticky top-0 left-0 right-0 -mb-64  region-lists">
                                <li>All</li>
                                <li data-id="Africa">prose</li>
                                <li data-id="Americas">America</li>
                                <li data-id="Asia">Romance</li>
                                <li data-id="Europe">Love</li>
                                <li data-id="Oceania">Oceania</li>
                            </div>
                        </article>
                    </div>

                    <div className="overflow-x-auto">
                        {currentTableData.length > 0 ? (
                            <table className="mx-auto w-full whitespace-no-wrap rounded-lg overflow-hidden sm:shadow-lg my-5">
                                <>
                                    {" "}
                                    <thead className="bg-gray-800 text-white">
                                        <tr className="text-left">
                                            <th className="py-3 px-4 uppercase font-semibold text-sm">Title</th>
                                            <th className="py-3 px-4 uppercase font-semibold text-sm">Author</th>
                                            <th className="py-3 px-4 uppercase font-semibold text-sm">
                                                Publication Date
                                            </th>
                                            <th className="py-3 px-4 uppercase font-semibold text-sm">Genre</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-gray-200 text-gray-600 text-sM">
                                        {currentTableData.map((book) => (
                                            <tr
                                                key={book.title}
                                                className="tableRow cursor-pointer"
                                                onClick={() => navigate(`/book/details/${book.id}`)}
                                            >
                                                <td className="py-3 px-4">{book.title}</td>
                                                <td className="py-3 px-4">{book.author}</td>
                                                <td className="py-3 px-4">{book.publication_date}</td>
                                                <td className="py-3 px-4">{book.genre}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </>
                            </table>
                        ) : (
                            <h2 className="text-secondaryColor text-3xl">No searched Books Currently</h2>
                        )}
                    </div>
                </div>
            </main>
        </section>
    );
};
