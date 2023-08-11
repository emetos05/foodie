import React from "react";

import styles from "./SearchBar.module.css";

const sortBy = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = () => {
  const sortOptions = () => {
    return Object.keys(sortBy).map((option) => (
      <li key={sortBy[option]}>{option}</li>
    ));
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBarSortBy}>
        <ul>{sortOptions()}</ul>
      </div>
      <div className={styles.searchBarEntry}>
        <label htmlFor="term">
          <input
            id="term"
            name="term"
            type="text"
            placeholder="Business Name"
          ></input>
        </label>
        <label htmlFor="location">
          <input
            id="location"
            name="location"
            type="text"
            placeholder="City"
          ></input>
        </label>
      </div>
      <div className={styles.searchBarSubmit}>
        <a>Search</a>
      </div>
    </div>
  );
};
export default SearchBar;
