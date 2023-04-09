import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SerachBar/SearchBar";
import Item from "./components/Item/Item";
import { data } from "./assets/data";
import AOS from "aos";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedComparator, setSelectedComparator] = useState("");

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [searchTerm]);

  const comparePublisher = (a, b) =>
    a.publisher > b.publisher ? 1 : b.publisher > a.publisher ? -1 : 0;
  const comparePages = (a, b) => (a.pages > b.pages ? 1 : -1);
  const comparePopularity = () => {};
  const compareTitle = (a, b) =>
    a.title > b.title ? 1 : b.title > a.title ? -1 : 0;

  const comparators = {
    publisher: comparePublisher,
    pages: comparePages,
    popularity: comparePopularity,
    title: compareTitle,
  };

  return (
    <div className="App">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div
        style={{
          width: "50%",
          margin: "auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
        data-aos="fade-up"
      >
        <h5>Sort By:</h5>
        <span
          style={{
            border: "1px solid grey",
            padding: "1%",
            borderRadius: "5px",
          }}
          onClick={() => setSelectedComparator("title")}
        >
          Title
        </span>
        <span
          style={{
            border: "1px solid grey",
            padding: "1%",
            borderRadius: "5px",
          }}
          onClick={() => setSelectedComparator("pages")}
        >
          Pages
        </span>
        <span
          style={{
            border: "1px solid grey",
            padding: "1%",
            borderRadius: "5px",
          }}
          onClick={() => setSelectedComparator("publisher")}
        >
          Publisher
        </span>
        <span
          style={{
            border: "1px solid grey",
            padding: "1%",
            borderRadius: "5px",
          }}
          onClick={() => setSelectedComparator("popularity")}
        >
          Popularity
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "1%",
        }}
        data-aos="fade-down"
      >
        {data
          .sort(comparators[selectedComparator])
          .filter((e) => e.title.includes(searchTerm))
          .map((book) => (
            <Item
              bookName={book.title}
              publisher={book.publisher}
              bookPages={book.pages}
              bookCover={book.coverImage}
              searchTerm={searchTerm}
              selectedComparator={selectedComparator}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
