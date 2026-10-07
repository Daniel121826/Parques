import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ParqueCard = ({ nombre, url, descripcion }) => {
  return (
    <div className="card bg-light h-100 d-flex flex-column shadow-sm">
      <img
        className="card-img-top"
        src={url}
        alt={nombre}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5
          className="card-title text-center text-decoration-underline"
          style={{ fontSize: "1.2rem" }}
        >
          {nombre}
        </h5>
        <div
          className="card-text small text-muted"
          dangerouslySetInnerHTML={{ __html: descripcion }}
        />
      </div>
    </div>
  );
};

export default ParqueCard;
