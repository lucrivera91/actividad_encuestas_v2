export const Opcion = ({
  indexPreg,
  indexOp,
  agregar,
  quitar,
  register,
  errors,
}) => {
  return (
    <div className="opcion">
      <input
        type="text"
        placeholder="Opción"
        {...register(`preguntas.${indexPreg}.opciones.${indexOp}.texto`, {
          maxLength: {
            value: 50,
            message: "La opcion debe ser de menos de 50 caracteres",
          },
        })}
      />
      {errors.opcion && <p style={{ color: "red" }}>{errors.opcion.message}</p>}
      <input
        type="button"
        value="⛔"
        className="btnQuitarOp"
        onClick={quitar}
      />
      <input
        type="button"
        value="➕"
        className="btnAgregarOp"
        onClick={agregar}
      />
    </div>
  );
};
