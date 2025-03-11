import React from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onSearchChange }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={value}
        onChange={onSearchChange}
        placeholder="Search by name"
        className={styles.searchInput}
      />
      <FaSearch className={styles.searchIcon} />
    </div>
  );
};
export default SearchBox;
