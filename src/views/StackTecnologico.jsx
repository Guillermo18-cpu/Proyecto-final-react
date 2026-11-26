
import { useState, useEffect } from 'react'
import TarjetaTecnologia from '../components/TarjetaTecnologia'
import HerramientasIA from '../components/HerramientasIA'
import Timeline from '../components/Timeline'

const StackTecnologico = () => {
  const [tecnologias, setTecnologias] = useState([])
  const [herramientas, setHerramientas] = useState([])
  const [experiencias, setExperiencias] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const cargarDatos = (ruta) => {
      return fetch(ruta)
        .then((respuesta) => {
          if (!respuesta.ok) {
            throw new Error('No se pudieron cargar los datos')
          }

          return respuesta.json()
        })
    }

    Promise.all([
      cargarDatos('/datos/tecnologias.json'),
      cargarDatos('/datos/herramientasIA.json'),
      cargarDatos('/datos/experiencias.json')
    ])
      .then((datos) => {
        setTecnologias(datos[0])
        setHerramientas(datos[1])
        setExperiencias(datos[2])
        setCargando(false)
      })
      .catch((error) => {
        setError(error.message)
        setCargando(false)
      })
  }, [])

  return (
    <section className="stack-tecnologico">
      <div className="stack-encabezado">
        <h1>Stack tecnológico y estudios</h1>

        <p>
          Conoce las tecnologías, herramientas y experiencias
          que forman parte de mi perfil profesional.
        </p>
      </div>

      {cargando && <p>Cargando información...</p>}

      {error && <p className="mensaje-error">{error}</p>}

      {!cargando && !error && (
        <>
          <section className="stack-seccion">
            <h2>Tecnologías que manejo</h2>

            <div className="tecnologias-tarjetas">
              {tecnologias.map((tecnologia) => (
                <TarjetaTecnologia
                  key={tecnologia.id}
                  nombre={tecnologia.nombre}
                  categoria={tecnologia.categoria}
                  descripcion={tecnologia.descripcion}
                  imagen={tecnologia.imagen}
                />
              ))}
            </div>
          </section>

          <HerramientasIA herramientas={herramientas} />

          <Timeline experiencias={experiencias} />
        </>
      )}
    </section>
  )
}

export default StackTecnologico
