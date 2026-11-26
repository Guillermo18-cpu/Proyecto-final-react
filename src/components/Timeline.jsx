
const Timeline = ({ experiencias }) => {
  return (
    <section className="stack-seccion">
      <h2>Experiencia laboral</h2>

      <div className="timeline">
        {experiencias.map((experiencia) => (
          <article
            className="timeline-elemento"
            key={experiencia.id}
          >
            <span className="timeline-punto"></span>

            <div className="timeline-contenido">
              <span className="timeline-periodo">
                {experiencia.periodo}
              </span>

              <h3>{experiencia.cargo}</h3>

              <h4>{experiencia.empresa}</h4>

              <p>{experiencia.descripcion}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Timeline
