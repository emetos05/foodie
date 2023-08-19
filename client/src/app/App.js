import { React, useState } from "react";

import styles from "./App.module.css";
import BusinessList from "../components/BusinessList/BusinessList";
import SearchBar from "../components/SearchBar/SearchBar";
import getListings from "../utils/http-request";

const App = () => {
  const [businesses, setBusinesses] = useState([]);

  const getRestaurants = async (term, location, sort) => {
    const businesses = await getListings(term, location, sort);
    setBusinesses(businesses);
  };

  return (
    <div className={styles.App}>
      <h1>Foodie</h1>
      <SearchBar getRestaurants={getRestaurants} />
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default App;
