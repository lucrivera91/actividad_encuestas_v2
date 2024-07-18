import { useFieldArray, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Pregunta } from "./Pregunta";

export const CrearEncuesta = ({ agregarEncuesta }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: Date.now() - Math.floor(Math.random() - 39),
      titulo: "",
      descripcion: "",
      preguntas: [
        {
          id: Date.now() - Math.floor(Math.random() - 150),
          pregunta: "",
          opciones: [
            {
              id: Date.now() - Math.floor(Math.random() - 82),
              texto: "",
            },
            {
              id: Date.now() - Math.floor(Math.random() - 48),
              texto: "",
            },
          ],
        },
      ],
    },
  });

  const {
    fields: questionFields,
    append: appendQuestion,
    remove: removeQuestion,
  } = useFieldArray({
    control,
    name: "preguntas",
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    agregarEncuesta(data);
    navigate("/");
  };

  const handleAgregarPreg = () => {
    if (questionFields.length === 5) return;
    appendQuestion({
      id: Date.now() - Math.floor(Math.random()),
      pregunta: "",
      opciones: [
        {
          id: Date.now() - Math.floor(Math.random() + 247),
          texto: "",
        },
        {
          id: Date.now() - Math.floor(Math.random() - 165),
          texto: "",
        },
      ],
    });
  };

  const handleQuitarPreg = (index) => {
    if (questionFields.length === 1) return;
    removeQuestion(index);
  };

  return (
    <div>
      <h1>Crear Nueva Encuesta</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="titulo"
          placeholder="Titulo"
          {...register("titulo", {
            required: "Este campo es obligatorio",
            maxLength: {
              value: 50,
              message: "El título debe tener menos de 50 caracteres",
            },
          })}
        />
        {errors.titulo && (
          <p style={{ color: "red" }}>{errors.titulo.message}</p>
        )}
        <textarea
          name="descripcion"
          placeholder="Descripcion"
          {...register("descripcion", {
            maxLength: {
              value: 200,
              message: "La descripcion debe tener menos de 200 caracteres",
            },
          })}
        />
        {errors.descripcion && (
          <p style={{ color: "red" }}>{errors.descripcion.message}</p>
        )}

        <ol>
          {questionFields.map((pregunta, indexPreg) => (
            <li key={pregunta.id}>
              <Pregunta
                id={pregunta.id}
                indexPreg={indexPreg}
                agregar={handleAgregarPreg}
                quitar={() => handleQuitarPreg(indexPreg)}
                {...{ control, register, errors }}
              />
            </li>
          ))}
        </ol>

        <button type="submit">Guardar Encuesta</button>
      </form>
    </div>
  );
};
