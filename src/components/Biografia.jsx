
import TarjetaBiografia from './TarjetaBiografia'

const Biografia = () => {
  const informacion = [
    {
      id: 1,
      numero: '01',
      titulo: 'Formación académica',
      descripcion:
        'Actualmente curso séptimo semestre de Tecnología en Sistemas de Información en la Institución Universitaria Antonio José Camacho.'
    },
    {
      id: 2,
      numero: '02',
      titulo: 'Perfil profesional',
      descripcion:
        'Me interesa el desarrollo de software y la creación de soluciones informáticas que permitan resolver problemas y mejorar procesos.'
    },
    {
      id: 3,
      numero: '03',
      titulo: 'Intereses tecnológicos',
      descripcion:
        'Tengo interés en el desarrollo web, las bases de datos, la inteligencia artificial y el aprendizaje de nuevas tecnologías.'
    }
  ]

  return (
    <section className="biografia">
      <h2>Sobre mí</h2>

      <p className="biografia-introduccion">
        Conoce un poco más sobre mi formación, mis habilidades
        y mis intereses profesionales.
      </p>

      <div className="biografia-tarjetas">
        {informacion.map((elemento) => (
          <TarjetaBiografia
            key={elemento.id}
            numero={elemento.numero}
            titulo={elemento.titulo}
            descripcion={elemento.descripcion}
          />
        ))}
      </div>
    </section>
  )
}

export default Biografia
