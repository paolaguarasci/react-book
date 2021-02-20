import { Tooltip, Toast, Popover } from "bootstrap";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

let root = document.getElementById("root");
const books = [
  {
    pos: 1,
    code: 9712802837379,
    title: "Tinico Lewis Townsend hrS",
    author: "Sarah Page",
    image: "https://source.unsplash.com/random/200x201",
  },
  {
    pos: 2,
    code: 5577249070211,
    title: "Tijojje Derek Carr Xov",
    author: "Victor Hart",
    image: "https://source.unsplash.com/random/200x202",
  },
  {
    pos: 3,
    code: 1644482241990,
    title: "Ugumefev Logan Hunter sXM",
    author: "Roxie Carr",
    image: "https://source.unsplash.com/random/200x203",
  },
  {
    pos: 4,
    code: 4574467214127,
    title: "Tuhhuoku Rose Joseph sxZ",
    author: "Cameron Holloway",
    image: "https://source.unsplash.com/random/200x204",
  },
  {
    pos: 5,
    code: 4482016520141,
    title: "Ricobju Mollie Johnston Gpk",
    author: "Verna Jimenez",
    image: "https://source.unsplash.com/random/200x205",
  },
  {
    pos: 6,
    code: 4825669006863,
    title: "Rigihi Antonio Sandoval Opo",
    author: "Edward Matthews",
    image: "https://source.unsplash.com/random/200x206",
  },
  {
    pos: 7,
    code: 8761028378341,
    title: "Hopluhuf Hattie Klein mZx",
    author: "Frederick Norman",
    image: "https://source.unsplash.com/random/200x207",
  },
  {
    pos: 8,
    code: 5076617590607,
    title: "Mudepal Johnny Blair oeO",
    author: "Micheal Guzman",
    image: "https://source.unsplash.com/random/200x208",
  },
  {
    pos: 9,
    code: 5497993028916,
    title: "Hunrehfev Chester Boone ZTZ",
    author: "Rosa Stone",
    image: "https://source.unsplash.com/random/200x209",
  },
  {
    pos: 10,
    code: 3909342559696,
    title: "Uhwetuc Adele Shelton lNV",
    author: "Philip Gregory",
    image: "https://source.unsplash.com/random/200x210",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((e) => {
        return <Book props={e} key={e.code} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { pos, code, title, author, image } = props.props;
  return (
    <article className="book">
      <div className="position">#{pos}</div>
      <div className="cover">
        <img src={image} alt=""></img>
      </div>
      <div className="description">
        <p>{code}</p>
        <h1>
         {title}
        </h1>
        <p>{author.toUpperCase()}</p>
      </div>
    </article>
  );
};

ReactDOM.render(<BookList />, root);
