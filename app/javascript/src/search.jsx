// home.jsx
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout";
import logo from "./corona.jpg";

import "./styles.scss";
import "./search.scss";
import SmallSearch from "./small_search";

const Search = () => (
  <Layout>
    <SmallSearch />
    Search results will go here
  </Layout>
);

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Search />,
    document.body.appendChild(document.createElement("div"))
  );
});
