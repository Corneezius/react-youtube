import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyDUJhjfzq-80986_smoW27BTmZl_N-PR8s";

const App = () => {
  return <div>
  <SearchBar />
  </div>;
}

ReactDOM.render(<App />, document.querySelector(".container"));
