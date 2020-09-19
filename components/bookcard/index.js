import React from "react";

import styles from "./BookCard.module.css";

const BookCard = ({ title, author, thumbnail }) => {
  return <img className={styles.bookThumbnail} src={thumbnail} />;
};

export default BookCard;
