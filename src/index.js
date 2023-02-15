import React from "react";
import ReactDOM from "react-dom";

// import fungsi navbar dan element
import Navbar from "./navbar";
import Element from "./element";

// fungsi untuk render
const render = (content, id) => {
  return ReactDOM.render(content, document.getElementById(id));
};

// memanggil fungsi render
render(<Element />, "root");
render(<Navbar />, "navbar");
