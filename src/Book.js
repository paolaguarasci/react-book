import React from "react";

export const Book = ({ pos, code, title, author, image }) => {
  const clickHandler = (author) => {
    console.log("Click " + author);
  };
  return (
    <article className="book" onClick={() => clickHandler(author)}>
      <div className="position">#{pos}</div>
      <div className="cover">
        <img src={image} alt=""></img>
      </div>
      <div className="description">
        <p>{code}</p>
        <h1>{title}</h1>
        <p>{author.toUpperCase()}</p>
      </div>
    </article>
  );
};
