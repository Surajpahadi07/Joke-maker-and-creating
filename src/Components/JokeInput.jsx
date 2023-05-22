import React, { useState } from "react";
import { getGPTResponse } from "./Utiles/getGPTResponse";

export default function JokeInput({ categoryList, setjokeOutput }) {
  const [onChangeJokeInput, setOnChangeJokeInput] = useState("");

  const handleChange = (e) => {
    setOnChangeJokeInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    // API call -----> generate jokes
    e.preventDefault();
    let response = await getGPTResponse(onChangeJokeInput);
    console.log(response);
    setjokeOutput(response);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <button
          className="btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Category
        </button>
        <ul className="dropdown-menu">
          {categoryList.map((category) => {
            return (
              <li key={category}>
                <a className="dropdown-item" href="/">
                  {category}
                </a>
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          className="form-control"
          value={onChangeJokeInput}
          onChange={handleChange}
          aria-label="Text input with dropdown button"
          placeholder="Funny joke about programming"
        />
        <button type="submit" className="btn btn-outline-success">
          Generate
        </button>
      </div>
    </form>
  );
}