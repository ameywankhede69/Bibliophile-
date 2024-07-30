import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
        <div className="container mx-auto md:px-20 px-4 flex-1">
          <div className="mt-28 items-center justify-center text-center">
            <h1 className="text-2xl md:text-4xl text-black dark:text-white">
              We are thrilled to have you{" "}
              <span className="text-pink-500 dark:text-pink-400">Here!!!</span>
            </h1>

            <p className="mt-12 text-black dark:text-white">
              Dive into a world of knowledge and adventure with our exclusive
              collection of books available only to our members. Here, you can
              explore a vast array of genres, from timeless mythology to
              thrilling murder mysteries, and everything in between. Whether
              you're looking to expand your horizons with insightful
              non-fiction, get lost in the rich tapestry of historical novels,
              or be captivated by the latest in science fiction and fantasy, we
              have something for every reader's taste.
            </p>
            <Link to="/">
              <button className="mt-6 bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-700 duration-100 dark:bg-pink-700 dark:hover:bg-pink-800">
                Back
              </button>
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
            {book.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </div>
        </div>
        <footer className="bg-white dark:bg-gray-900 text-center py-4">
          <p className="text-black dark:text-white"></p>
        </footer>
      </div>
    </>
  );
}

export default Course;
