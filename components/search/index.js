import React, { useState } from "react";
import axios from "axios";

import searchStyles from "./Search.module.css";

import HorizontalScrolling from "../../components/horizontalscrolling/index";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchBy, setSearchBy] = useState("authors");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearchBook = async (event) => {
    event.preventDefault();

    const url = `http://localhost:8080/${searchBy}/${searchValue}${
      searchBy === "authors" ? "/books" : ""
    }`;

    const { status, data } = await axios.get(url, {
      validateStatus: false,
    });
    if (status === 200) {
      setSearchResult(Array.isArray(data) ? data : [data]);
    }
  };

  return (
    <>
      <form onSubmit={handleSearchBook}>
        <label>
          <input
            type="text"
            name="BookName"
            placeholder={
              searchBy === "authors" ? "Author's name" : "Book's name"
            }
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            className={searchStyles.searchInput}
          />
        </label>
        <select
          onChange={(e) => setSearchBy(e.target.value)}
          className={searchStyles.search}
        >
          <option value="authors">Author</option>
          <option value="books">Book</option>
        </select>
        <button type="submit" className={searchStyles.search}>
          Submit
        </button>
      </form>
      {searchResult.length > 0 ? (
        <>
          <h3>Results {searchResult.length}</h3>
          <HorizontalScrolling booksList={searchResult} />
        </>
      ) : null}
    </>
  );
};

export default Search;
