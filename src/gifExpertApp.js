//componente principal de la aplicacion gifExpertApp
import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifCollection } from "./components/gifCollection";

const GifExpertApp = () => {
  //   usar el hook para obtener el state para poder mutar el estado y renderizarlo
  const [categories, setCategories] = useState([
    "One-Punch",
  ]);

  return (
    <>
      <h2>GifExpertApp</h2>
        {/* crear comunicacion entre componentes */}
      <AddCategory  setCategories={setCategories}/>
      <hr />

      <ol>
        {/* propertie key usada en li y es el id unico del elemento */}
        {categories.map((category) => 
            // <li key={category}>{category}</li>
           <GifCollection 
            key={category} 
            category={category} 
           />
            )
        }
      </ol>

    </>
  );
};

export { GifExpertApp };
