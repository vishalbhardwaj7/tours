import React, { useState, useContext } from "react";
import { UserContext } from "./App";
const Tour = ({ id, image, info, price, name }) => {
  const [readMore, setReadMore] = useState(false);
  const removeTour = useContext(UserContext);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore((prev) => !prev)}>
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not-Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
