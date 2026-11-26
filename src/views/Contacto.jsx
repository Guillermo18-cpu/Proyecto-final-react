
import ChatIA from '../components/ChatIA'
import FormularioContacto from '../components/FormularioContacto'

const Contacto = () => {
  return (
    <section className="contacto">
      <div className="contacto-encabezado">
        <h1>Conversemos</h1>

        <p>
          Conoce más sobre mi perfil profesional
          o cuéntame acerca de tu proyecto.
        </p>
      </div>

      <div className="contacto-contenido">

        <ChatIA />

        <FormularioContacto />

      </div>
    </section>
  )
}

export default Contacto
