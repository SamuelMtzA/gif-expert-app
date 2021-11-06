//componenet para mostrar un gif en el grid
import React from "react";

export function GifGridItem({ id, title, url }) {
  return (
    <main className="main-container">
      <img src={url} alt={id} />
      <p>{title}</p>
    </main>
  );
}
