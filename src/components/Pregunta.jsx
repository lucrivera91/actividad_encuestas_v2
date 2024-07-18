import { Opcion } from "./Opcion";
import { useFieldArray } from "react-hook-form";

export const Pregunta = ({
  indexPreg,
  control,
  register,
  errors,
  agregar,
  quitar,
}) => {
  const {
    fields: optionFields,
    append: appendOption,
    remove: removeOption,
  } = useFieldArray({
    control,
    name: `preguntas.${indexPreg}.opciones`,
  });

  const handleAddOp = () => {
    if (optionFields.length === 5) return;
    appendOption({
      id: Date.now() - Math.floor(Math.random()),
      texto: "",
    });
  };

  const handleRemoveOp = (index) => {
    if (optionFields.length === 2) return;
    removeOption(index);
  };

  return (
    <>
      <div className="pregunta">
        <input
          type="text"
          placeholder="Pregunta"
          {...register(`preguntas.${indexPreg}.pregunta`, {
            maxLength: {
              value: 50,
              message: "La pregunta debe ser de menos de 50 caracteres",
            },
          })}
        />
        {errors.preguntas && (
          <p style={{ color: "red" }}>{errors.preguntas.message}</p>
        )}
        <input
          type="button"
          value="⛔"
          className="btnQuitarPreg"
          onClick={quitar}
        />
        <input
          type="button"
          value="➕"
          className="btnAgregarPreg"
          onClick={agregar}
        />
      </div>
      <ol>
        {optionFields.map((opcion, indexOp) => (
          <li key={opcion.id}>
            <Opcion
              id={opcion.id}
              indexPreg={indexPreg}
              indexOp={indexOp}
              agregar={handleAddOp}
              quitar={() => handleRemoveOp(indexOp)}
              {...{ register, errors }}
            />
          </li>
        ))}
      </ol>
    </>
  );
};
