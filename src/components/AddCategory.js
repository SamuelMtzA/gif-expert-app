//componenente para buscar una categoria
import React, { useState } from "react";
// mecanismo para asegurar que se envia el tipo de dato correcto y se pase la informacion correctamente
import PropTypes  from "prop-types";

//props:setcategories es una funcion que pasa como componente, capaz de compartir codigo entre componentes
export const AddCategory = ({ setCategories }) => {
  //necesitamos el estado para saber que se ha escrito en el input
  //usestate tiene un estado inicial
  const [inputValue, setInputValue] = useState("");

  //extraer el valor escrito e iniciar un evento
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  //enviar el valor del input al componente principal para que se pueda mostrar
  const handleSubmit = (e) => {
    //prevenir el comportamiento por defecto del formulario, refrescar la pagina
    e.preventDefault();
    //todo: validar que el input no esta vacio
    if (inputValue.trim().length > 2) {
        //agregar el input al state, crear una nueva categoria
        setCategories((cats) => [inputValue, ...cats]);
        //limpiar el input, evitar dobleo posteo
        setInputValue("");
    }

  }

  //agrupamiento de elementos en un formulario, en vez de un fragment
  return (
    // todo:realizar un formulario para que el usuario pueda enviar el valor del input
    <form onSubmit = { handleSubmit }>
      {/* value por default, onchage para cambiar el valor y extraerlo */}
      <input 
      type="text" 
      value={inputValue} 
      onChange={handleInputChange} 
      />

    </form>
  );
};

//validar que el valor del input sea la funcion setCategories
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
