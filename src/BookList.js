import React from "react";
import { Book } from "./Book";
import { books } from "./books";

export function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={index} {...book} />;
      })}
    </section>
  );
}
