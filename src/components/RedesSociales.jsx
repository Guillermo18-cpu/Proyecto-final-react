
const RedesSociales = () => {
  const redes = [
    {
      id: 1,
      nombre: 'GitHub',
      enlace: 'https://github.com/Guillermo18-cpu',
      clase: 'github'
    },
    {
      id: 2,
      nombre: 'LinkedIn',
      enlace: 'https://www.linkedin.com/',
      clase: 'linkedin'
    }
  ]

  return (
    <section className="redes-sociales">
      <h2>Conectemos</h2>

      <p>
        Conoce mis proyectos y mi trayectoria profesional
        a través de mis redes sociales.
      </p>

      <div className="redes-enlaces">
        {redes.map((red) => (
          <a
            key={red.id}
            href={red.enlace}
            className={`red-social ${red.clase}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {red.nombre}
          </a>
        ))}
      </div>
    </section>
  )
}

export default RedesSociales
