import { Tooltip, Toast, Popover } from "bootstrap";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BookList } from "./BookList";
import { books } from './books'

let root = document.getElementById("root");
ReactDOM.render(<BookList />, root);
