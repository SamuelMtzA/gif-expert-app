import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
//recibe las props de la coleccion
export const GifCollection = ({ category }) => {
  //cada vez que se renderice el componente, se ejecutara el custom hook
  const {data:gifs, loading} = useFetchGifs(category);

  return (
    <>
      <h3 className="gifs-grid animate__bounceIn animate__fadeIn">{category}</h3>
      {loading && <p className="gifs-grid animate__bounceIn animate__flash">Loading...</p>}
      <div className="gifs-grid animate__bounceIn animate__fadeIn">
        {
          //   ...gifs es un propiedad independiente de la coleccion
          gifs.map((gif) => (
            <GifGridItem key={gif.id} {...gif} />
          ))
        }
      </div>
    </>
  );
};
