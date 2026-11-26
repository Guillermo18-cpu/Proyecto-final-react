
import { useState } from 'react'

const ChatIA = () => {
  const mensajeInicial = {
    id: 1,
    rol: 'asistente',
    contenido:
      '¡Hola! Soy el asistente virtual de este portafolio. ¿En qué puedo ayudarte?'
  }

  const [mensajes, setMensajes] = useState([mensajeInicial])
  const [mensaje, setMensaje] = useState('')

  const enviarMensaje = (evento) => {
    evento.preventDefault()

    if (!mensaje.trim()) {
      return
    }

    const nuevoMensaje = {
      id: Date.now(),
      rol: 'usuario',
      contenido: mensaje.trim()
    }

    setMensajes((mensajesAnteriores) => [
      ...mensajesAnteriores,
      nuevoMensaje
    ])

    setMensaje('')
  }

  const limpiarConversacion = () => {
    setMensajes([mensajeInicial])
    setMensaje('')
  }

  return (
    <section className="chat-contenedor">

      <div className="chat-encabezado">
        <div>
          <h2>Asistente virtual</h2>

          <span className="chat-estado">
            Pendiente de conexión con IA
          </span>
        </div>

        <button
          type="button"
          className="chat-limpiar"
          onClick={limpiarConversacion}
        >
          Limpiar chat
        </button>
      </div>

      <div className="chat-mensajes">
        {mensajes.map((elemento) => (
          <div
            key={elemento.id}
            className={`chat-mensaje ${elemento.rol}`}
          >
            <span className="chat-autor">
              {elemento.rol === 'usuario'
                ? 'Tú'
                : 'Asistente'}
            </span>

            <p>{elemento.contenido}</p>
          </div>
        ))}
      </div>

      <form
        className="chat-formulario"
        onSubmit={enviarMensaje}
      >
        <input
          type="text"
          value={mensaje}
          onChange={(evento) =>
            setMensaje(evento.target.value)
          }
          placeholder="Escribe un mensaje..."
          aria-label="Mensaje para el asistente"
          maxLength={500}
        />

        <button
          type="submit"
          className="boton-primario"
          disabled={!mensaje.trim()}
        >
          Enviar
        </button>
      </form>

      <p className="chat-aviso">
        La conexión con inteligencia artificial
        estará disponible próximamente.
      </p>

    </section>
  )
}

export default ChatIA
