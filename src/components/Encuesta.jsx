import React from "react";
import { Link, useParams } from "react-router-dom";

export const Encuesta = ({ listaEncuestas, responderEncuesta }) => {
  const { id } = useParams();
  console.log(listaEncuestas);
  const encuesta = listaEncuestas.find((enc) => enc.id === parseInt(id));

  return (
    <div>
      <div className="encuesta-item-container">
        <div className="encuesta-item">
          <h2>{encuesta.titulo}</h2>
          <p>{encuesta.descripcion}</p>
          <br />
        </div>
      </div>
      <div className="encuesta-item-container">
        <div className="encuesta-item">
          <h2>Preguntas</h2>
          {!encuesta.preguntas && <p>Sin preguntas definidas</p>}
          {encuesta.preguntas &&
            encuesta.preguntas.map((pregunta) => (
              <div key={pregunta.id}>
                <p>{pregunta.pregunta}</p>
                <ol>
                  {pregunta.opciones.map((opcion) => (
                    <div key={opcion.id}>
                      <label>
                        <li>{opcion.texto}</li>
                      </label>
                    </div>
                  ))}
                </ol>
              </div>
            ))}
          <br />
        </div>
      </div>
      <Link to="/">Volver</Link>
    </div>
  );
};
