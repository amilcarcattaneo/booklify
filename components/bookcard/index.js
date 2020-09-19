import React from "react";

import styles from "../../styles/Home.module.css";

const BookCard = ({ title, author, thumbnail }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <img className={styles.bookThumbnail} src={thumbnail} />
      <p>{author}</p>
    </div>
  );
};

export default BookCard;
