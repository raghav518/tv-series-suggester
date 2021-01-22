import React from "react";
import "./styles.css";
import { useState } from "react";

const tvSeriesDB = {
  Sitcom: [
    { name: "The office", rating: "5/5" },
    { name: "Friends", rating: "3.5/5" }
  ],

  Crime: [
    {
      name: "breaking bad",
      rating: "5/5"
    },
    {
      name: "Narcos",
      rating: "4.5/5"
    }
  ],
  SciFi: [
    {
      name: "The Boys",
      rating: "3.5/5"
    },
    {
      name: "Black Mirror",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("SciFi");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚 Tv Series </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite tvSeries. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(tvSeriesDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {tvSeriesDB[selectedGenre].map((tvSeries) => (
            <li
              key={tvSeries.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {tvSeries.name} </div>
              <div style={{ fontSize: "smaller" }}> {tvSeries.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
