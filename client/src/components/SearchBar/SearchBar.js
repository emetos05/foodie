import React from "react";
import { useState } from "react";

import styles from "./SearchBar.module.css";

// Filter result options
const sortBy = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

// SearchBar Component
const SearchBar = ({ getRestaurants }) => {
  // state management
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sort, setSort] = useState("best_match");

  // set active sort option className
  const sortOption = (option) => {
    if (sort === option) {
      return styles.active;
    }
    return "";
  };

  // filter result based on sort option selected
  const handleSort = (option) => setSort(option);
  // Search term input
  const handleTermChange = (e) => setTerm(e.target.value);
  // Location input
  const handleLocationChange = (e) => setLocation(e.target.value);
  // Search Yelp with submitted options
  const handleSubmit = (e) => {
    e.preventDefault();
    getRestaurants(term, location, sort);
    // setTerm("");
    // setLocation("");
  };

  // Render sort options list
  const sortOptions = () => {
    return Object.keys(sortBy).map((option) => (
      <li
        className={sortOption(sortBy[option])}
        key={sortBy[option]}
        onClick={() => handleSort(sortBy[option])}
      >
        {option}
      </li>
    ));
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBarSortBy}>
        <ul>{sortOptions()}</ul>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.searchBarEntry}>
          <label htmlFor="term"></label>
          <input
            id="term"
            name="term"
            type="text"
            placeholder="Business Name"
            value={term}
            onChange={handleTermChange}
          ></input>
          <label htmlFor="location"></label>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="City"
            value={location}
            onChange={handleLocationChange}
          ></input>
        </div>
        <div className={styles.searchBarSubmit}>
          <button type="submit">Get Restaurants</button>
        </div>
      </form>
    </div>
  );
};
export default SearchBar;
