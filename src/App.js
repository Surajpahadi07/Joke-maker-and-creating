import React, { useState } from "react";
import JokeInput from "./Components/JokeInput";
import JokeOutput from "./Components/JokeOutput";

export default function App() {
  const [jokeOutput, setjokeOutput] = useState(null);
  const categoryList = [
    "Programming Jokes",
    "Kids Jokes",
    "Study Jokes",
    "Relationship Jokes",
    "Break Up Jokes",
    "Santa Banta Jokes",
  ];
  return (
    <div className="p-5">
      <h1>Laughing Factory</h1>
      <p>
        <i>Where Comedy is Crafted and Laughter is Manufactured!</i>{" "}
      </p>
      <JokeInput categoryList={categoryList} setjokeOutput={setjokeOutput} />
      <JokeOutput jokeOutput={jokeOutput} />
    </div>
  );
}