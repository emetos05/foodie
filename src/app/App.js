import React from "react";

import styles from "./App.module.css";
import BusinessList from "../components/BusinessList/BusinessList";
import SearchBar from "../components/SearchBar/SearchBar";

const App = () => {
  return (
    <div className={styles.App}>
      <h1>Foodie</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
};

export default App;
