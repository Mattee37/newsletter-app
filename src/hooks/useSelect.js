import React, { useState } from "react";
import PropTypes from "prop-types";

//custom hook que carga los select y a su vez el estado en el mismo

const useSelect = (stateInicial, opciones) => {
  const [state, setState] = useState(stateInicial);

  const SelectNoticias = () => (
    <select
      className="browser-default"
      value={state}
      onChange={e => setState(e.target.value)}
    >
      {opciones.map(opcion => (
      <option value="">-- Seleccione --</option>
        <option key={opcion.value} value={opcion.value}>
          {opcion.label}
        </option>
      ))}
    </select>
  );

  //retorna el esatdo a buscar y el componente a renderizar
  return [state, SelectNoticias];
};

useSelect.propTypes = {
  stateInicial: PropTypes.string.isRequired,
  opciones: PropTypes.object.isRequired
};

export default useSelect;
