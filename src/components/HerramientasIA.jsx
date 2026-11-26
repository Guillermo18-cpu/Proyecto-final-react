
const HerramientasIA = ({ herramientas }) => {
  return (
    <section className="stack-seccion">
      <h2>Herramientas de inteligencia artificial</h2>

      <div className="herramientas-tarjetas">
        {herramientas.map((herramienta) => (
          <article
            className="tarjeta-herramienta"
            key={herramienta.id}
          >
            <span className="herramienta-etiqueta">
              Inteligencia artificial
            </span>

            <h3>{herramienta.nombre}</h3>

            <p>{herramienta.descripcion}</p>

            <a
              href={herramienta.enlace}
              target="_blank"
              rel="noopener noreferrer"
            >
              Conocer herramienta
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default HerramientasIA
