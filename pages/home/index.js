import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

import BookCard from "../../components/bookcard/index";
import Panel from "../../components/panel/index";
import Search from "../../components/search/index";

import styles from "../../styles/Home.module.css";

const fetchUserBooks = async (query) => {
  // TODO: corregir esto para sacar el ID del usuario loggeado
  const arQueries = query || { user: 1 };

  const url = `${process.env.API_URL}/users/${arQueries.user}/books`;

  const books = await axios.get(url);
  return books.data;
};

class Home extends React.Component {
  static async getInitialProps({ req, query }) {
    const books = await fetchUserBooks();

    return { books, query };
  }

  constructor(props) {
    super(props);

    const { books, query } = this.props;

    this.state = {
      books: books || [],
    };
  }

  static propTypes = {
    books: PropTypes.Object,
  };

  loadNewUserBooks = async () => {
    const books = await fetchUserBooks();

    this.setState({ books });
  };

  render() {
    const { books } = this.state;

    return (
      <>
        <div className={styles.row}>
          <Panel />
          <div className={styles.column}>
            <main className={styles.main}>
              <h3>Search Books</h3>
              <div className={styles.grid}>
                <Search />
              </div>
              <h3>My Library</h3>
              <div className={styles.grid}>
                {books.map((book) => (
                  <BookCard
                    title={book.title}
                    author={book.author.name}
                    thumbnail={book.thumbnail}
                    key={book.id}
                  />
                ))}
              </div>
            </main>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
