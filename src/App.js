import React, { Fragment, useState, useEffect } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import NoticeList from "./components/NoticeList";

function App() {
  //[estado, actualizador]
  const [categoria, setCategoria] = useState("");
  //[estado, actualizador]
  const [noticias, setNoticias] = useState([]);

  //genera la consulta a la API y actualiza estados
  useEffect(() => {
    //genera la consulta
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=e6497f36af3d4b9e972fb128d13ddc35`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      //actualiza el estado
      setNoticias(noticias.articles);
    };
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header titulo="Buscador de noticias" />
      <div className="container white">
        <Form setCategoria={setCategoria} />
        <NoticeList noticias={noticias} />
      </div>
    </Fragment>
  );
}

export default App;
