import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const CrearEncuesta = ({ agregarEncuesta }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    agregarEncuesta(data);
    navigate("/");
  };

  return (
    <div>
      <h1>Crear Nueva Encuesta</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="titulo">Título:</label>
        <input
          type="text"
          name="titulo"
          id="titulo"
          {...register("titulo", {
            required: "Este campo es obligatorio",
            maxLength: {
              value: 50,
              message: "El título debe tener menos de 50 caracteres",
            },
          })}
        />
        {errors.titulo && <p style={{color: "red"}}>{errors.titulo.message}</p>}

        <label htmlFor="descripcion">Descripcion:</label>
        <textarea
          name="descripcion"
          id="descripcion"
          {...register("descripcion", {
            maxLength: {
              value: 200,
              message: "La descripcion debe tener menos de 200 caracteres",
            },
          })}
        />
        {errors.descripcion && <p style={{color: "red"}}>{errors.descripcion.message}</p>}

        <button type="submit">Guardar Encuesta</button>
      </form>
    </div>
  );
};
