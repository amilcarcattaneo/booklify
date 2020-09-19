import React, { useState } from "react";
import axios from "axios";

import ScrollMenu from "react-horizontal-scrolling-menu";

import styles from "../../styles/Home.module.css";
import searchStyles from "./Search.module.css";

import BookCard from "../../components/bookcard/index";

const MenuItem = ({ book, selected }) => {
  return (
    <BookCard
      title={book.title}
      author={book.author.name}
      thumbnail={book.thumbnail}
      key={book.id}
      className={`${searchStyles.menuItem} ${selected ? "active" : ""}`}
    />
  );
};

export const Menu = (list, selected) =>
  list.map((book) => {
    return <MenuItem book={book} key={book.id} selected={selected} />;
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchBy, setSearchBy] = useState("authors");
  const [searchResult, setSearchResult] = useState([]);
  const [selected, setSelected] = useState("");

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

  const onSelect = (key) => {
    setSelected(key);
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
        <div className={styles.container}>
          <h3>Results {searchResult.length}</h3>
          <div className={styles.grid}>
            <ScrollMenu
              data={Menu(searchResult, searchResult[0].id)}
              arrowLeft={ArrowLeft}
              arrowRight={ArrowRight}
              selected={selected}
              onSelect={onSelect}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Search;
