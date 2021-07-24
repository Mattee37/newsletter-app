import React from "react";
import styles from "./Form.module.css";
import PropTypes from "prop-types";

import useSelect from "../hooks/useSelect";

const Form = ({ setCategoria }) => {
  //array de parametros para la API
  const OPCIONES = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnologia" }
  ];

  //custom hook del select[estado inicial de la busqueda, array de parametros]
  const [categoria, SelectNoticias] = useSelect("general", OPCIONES);

  //previente el comportamiento por defualt del form y coloca la categoria asignada
  const buscarNoticias = e => {
    e.preventDefault();
    setCategoria(categoria);
  };

  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={buscarNoticias}>
          <h2 className={styles.heading}>Encuentra noticias por categoria</h2>
          <SelectNoticias />
          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles.btn_block} btn-large amber darken-2`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Form.propTypes = {
  setCategoria: PropTypes.func.isRequired
};

export default Form;
