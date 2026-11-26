
const TarjetaTecnologia = ({
  nombre,
  categoria,
  descripcion,
  imagen
}) => {
  return (
    <article className="tarjeta-tecnologia">
      <img
        src={imagen}
        alt={`Logo de ${nombre}`}
        className="tecnologia-imagen"
      />

      <span className="tecnologia-categoria">
        {categoria}
      </span>

      <h3>{nombre}</h3>

      <p>{descripcion}</p>
    </article>
  )
}

export default TarjetaTecnologia
