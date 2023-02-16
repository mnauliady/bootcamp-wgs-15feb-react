import React from "react";
import ReactDOM from "react-dom/client";

import Form from "./Form";
import Navbar from "./navbar";
// Navbar
const nav = document.getElementById("navbar");

// tell react to take control
const navs = ReactDOM.createRoot(nav);

// form
const form = document.getElementById("form");

// tell react to take control
const forms = ReactDOM.createRoot(form);

forms.render(<Form />);
navs.render(<Navbar />);
