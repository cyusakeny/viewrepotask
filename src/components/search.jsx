import React from "react";
import { FaSortDown } from "react-icons/fa";
import "../css/search.css";
const Search = () => {
  return (
    <div className="container">
      <input
        type="text"
        className="inputfield"
        placeholder="Find a repository"
      />
      <button>
        Type
        <FaSortDown className="faicon" />
      </button>
      <button>
        Language
        <FaSortDown className="faicon" />
      </button>
      <button>
        Sort
        <FaSortDown className="faicon" />
      </button>
    </div>
  );
};
export default Search;
