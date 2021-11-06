//custom hooks, usado para buscar gifs y ahorrar codigo
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//creacion de un custom hook
export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  //usar useEffect para cargar codigo condicional, solo quiero que se ejecute cuando se renderice por primera vez
  useEffect(() => {

    getGifs(category).then((imgs) => {
        setState({
          data: imgs,
          loading: false,
        });
    });
    
  }, [category]);

  return state; // data, loading
};
