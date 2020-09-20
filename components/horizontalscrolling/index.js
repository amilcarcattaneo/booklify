import React from "react";

import BookCard from "../../components/bookcard/index";

import styles from "./HorizontalScrolling.module.css";

const HorizontalScrolling = ({ booksList }) => {
  return (
    <div className={`${styles.container} ${styles.noScrollbar}`}>
      {booksList.map((book) => (
        <BookCard
          title={book.title}
          author={book.author.name}
          thumbnail={book.thumbnail}
          key={book.id}
          className={styles.card}
        />
      ))}
    </div>
  );
};

export default HorizontalScrolling;
