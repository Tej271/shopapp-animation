import React from "react";
import { motion } from "framer-motion";

const Item = ({
  bookName,
  bookPages,
  bookCover,
  publisher,
  searchTerm,
  selectedComparator,
}) => {
  return (
    <motion.div
      // animate={{ x: -100, transition: { duration: 2, delay: 1 } }}
      whileHover={{ scale: 1.2 }}
      key={[searchTerm, selectedComparator]}
      variants={variants}
      animate={"show"}
      initial="hide"
      // initial={{ x: 100 }}
      style={{
        display: "flex",
        flexDirection: "row",
        border: "1px solid black",
        margin: "2%",
        padding: "1%",
        borderRadius: "10px",
        overflow: "hidden",
        width: "fit-content",
      }}
    >
      <div className="card-item">
        <img src={bookCover} className="item-1" width="120" alt="firstItem" />
        <div
          className="item-content"
          style={{ display: "flex", flexDirection: "column", marginLeft: "2%" }}
        >
          <h3>{bookName}</h3>
          <span className="item-para">Publisher : {publisher}</span>
          <span className="item-para">Language :English</span>
          <span className="item-para">Hardcover : {bookPages} pages</span>
        </div>
      </div>
    </motion.div>
  );
};

export const variants = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
  hide: {
    y: -20,
    opacity: 0,
  },
};

export default Item;
