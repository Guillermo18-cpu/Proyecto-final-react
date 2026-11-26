
const TarjetaBiografia = ({ numero, titulo, descripcion }) => {
  return (
    <article className="tarjeta-biografia">
      <span className="biografia-numero">
        {numero}
      </span>

      <h3>{titulo}</h3>

      <p>{descripcion}</p>
    </article>
  )
}

export default TarjetaBiografia
