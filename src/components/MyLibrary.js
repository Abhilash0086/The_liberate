import BookList from "../components/BookList";
import Filters from "../components/Filters";
import NavBar from "../components/NavBar";
import Pagination from "../components/Pagination";
import { useGlobalContext } from "../Context";
import BookCard from "../components/BookCard";
import Confetti from 'react-confetti'

export default function MyLibrary() {

  const {
    books,
    postsPerPage,
    setCurrentPage,
    bookLength,
    searchTerm,
    setSearchTerm,
  } = useGlobalContext();
  // console.log(books.length, postsPerPage);
  return (
    <div className="container h-screen bg-cyan-50 place-content-center fixed -p-4  ">
       
      <div className="box-content border-2 border-r-cyan-300 border-l-cyan-300  mx-auto h-full w-5/6 bg-white shadow-2xl shadow-cyan-500 ">
        <NavBar />

        <div className="grid grid-cols-5 gap-3">
          <div className="">
            <Filters />
          </div>
          <div className="col-span-3">
            <BookList />
            <div className="mx-auto flex justify-center">
              <Pagination
                totalPosts={bookLength}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
              ></Pagination>
            </div>
          </div>

          <div>
           <i><div className="ml-8 text-base font-semibold pb-3 ">Currently Reading Book</div></i> 
            <BookCard />
          </div>
        </div>
      </div>
     
    </div>
  );
}
