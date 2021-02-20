import { Tooltip, Toast, Popover } from "bootstrap";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
let root = document.getElementById("root");

function BookList() {
  return (
    <section>
      <Book code="86421" pos="1" />
      <Book code="90652" pos="2" />
      <Book code="63231" pos="3" />
      <Book code="10289" pos="4" />
      <Book code="57136" pos="5" />
      <Book code="68804" pos="6" />
      <Book code="41170" pos="7" />
      <Book code="83319" pos="8" />
      <Book code="60075" pos="9" />
      <Book code="84331" pos="10" />
    </section>
  );
}

const Book = (props) => (
  <article>
    <Position pos={props.pos} />
    <Image /> <Description code={props.code} />
  </article>
);

const Description = (props) => {
  return (
    <div className="description">
      <Title code={props.code} /> <Author />
    </div>
  );
};
const Image = (props) => (
  <img src="https://source.unsplash.com/random/150x200" alt=""></img>
);
const Title = (props) => <h1>Book {props.code}</h1>;
const Author = () => <p>Autore</p>;
const Position = (props) => <div className="position">#{props.pos}</div>;
ReactDOM.render(<BookList />, root);
