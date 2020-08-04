import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
      <div className="ml-6 pt-1">
        <h1 className="text-2xl text-blue-700 leading-tight text-center">
          Trivia Bikini Queens!!!
        </h1>
        <Link
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          to="/session"
        >
          Start
        </Link>
      </div>
    </div>
  );
};

export default Home;
