import React from "react";

export default function JokeOutput({ jokeOutput }) {
  return (
    jokeOutput && (
      <div class="card">
        <div class="card-header">Your joke is ready to make someone laugh</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>{jokeOutput}</p>
          </blockquote>
        </div>
      </div>
    )
  );
}