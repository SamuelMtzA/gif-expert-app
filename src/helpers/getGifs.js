// Peticion Http para obtener los gifs
export const getGifs = async (category) => {
    try {
      const url =
        `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=12&api_key=BYLmd0xsaH5O7qWI7QyE5WY3N6u7PHNu`;
      //se la peticion http
      const resp = await fetch(url);
      //extraer la data de la respuesta
      const { data } = await resp.json();
      //se extrae la informacion especifica
      const gifsFetch = data.map((img) => {
        return {
          id: img.id,
          title: img.title,
          url: img.images.downsized_medium.url,
        };
      });
    //   console.log(gifsFetch);
      //asignamos la data a la variable de estado gifs
      return gifsFetch;
    } catch (error) {
      return error;
    }
  };