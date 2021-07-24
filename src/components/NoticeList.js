import React from "react";
import Notice from "./Notice";
import PropTypes from "prop-types";

const NoticeList = ({ noticias }) => (
  <div className="row">
    {noticias.map(noticia => (
      <Notice key={noticia.url} noticia={noticia} />
    ))}
  </div>
);

NoticeList.propTypes = {
  noticias: PropTypes.array.isRequired
};

export default NoticeList;
