
import { useState } from 'react'

const FormularioContacto = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    telefono: '',
    descripcion: ''
  })

  const [errores, setErrores] = useState({})
  const [confirmacion, setConfirmacion] = useState('')

  const manejarCambio = (evento) => {
    const { name, value } = evento.target

    setFormulario({
      ...formulario,
      [name]: value
    })

    setErrores({
      ...errores,
      [name]: ''
    })

    setConfirmacion('')
  }

  const validarFormulario = () => {
    const nuevosErrores = {}

    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/
    const soloNumeros = /^[0-9]+$/
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!formulario.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio'
    } else if (
      !soloLetras.test(formulario.nombre) ||
      formulario.nombre.length > 20
    ) {
      nuevosErrores.nombre =
        'Ingresa solo letras, máximo 20 caracteres'
    }

    if (!formulario.apellidos.trim()) {
      nuevosErrores.apellidos = 'Los apellidos son obligatorios'
    } else if (
      !soloLetras.test(formulario.apellidos) ||
      formulario.apellidos.length > 20
    ) {
      nuevosErrores.apellidos =
        'Ingresa solo letras, máximo 20 caracteres'
    }

    if (!correoValido.test(formulario.correo)) {
      nuevosErrores.correo = 'Ingresa un correo válido'
    }

    if (!soloNumeros.test(formulario.telefono)) {
      nuevosErrores.telefono = 'Ingresa únicamente números'
    }

    if (!formulario.descripcion.trim()) {
      nuevosErrores.descripcion =
        'La descripción del proyecto es obligatoria'
    }

    setErrores(nuevosErrores)

    return Object.keys(nuevosErrores).length === 0
  }

  const manejarEnvio = (evento) => {
    evento.preventDefault()

    if (validarFormulario()) {
      setConfirmacion(
        '¡Gracias! Tu información ha sido registrada correctamente en el formulario.'
      )

      setFormulario({
        nombre: '',
        apellidos: '',
        correo: '',
        telefono: '',
        descripcion: ''
      })
    }
  }

  return (
    <section className="formulario-contacto">
      <h2>Formulario de contacto</h2>

      <p>Cuéntame acerca de tu proyecto.</p>

      <form onSubmit={manejarEnvio} noValidate>

        <div className="formulario-campo">
          <label htmlFor="nombre">Nombre</label>

          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formulario.nombre}
            onChange={manejarCambio}
            maxLength={20}
            placeholder="Ingresa tu nombre"
            required
          />

          {errores.nombre && (
            <span className="campo-error">
              {errores.nombre}
            </span>
          )}
        </div>

        <div className="formulario-campo">
          <label htmlFor="apellidos">Apellidos</label>

          <input
            type="text"
            id="apellidos"
            name="apellidos"
            value={formulario.apellidos}
            onChange={manejarCambio}
            maxLength={20}
            placeholder="Ingresa tus apellidos"
            required
          />

          {errores.apellidos && (
            <span className="campo-error">
              {errores.apellidos}
            </span>
          )}
        </div>

        <div className="formulario-campo">
          <label htmlFor="correo">Correo electrónico</label>

          <input
            type="email"
            id="correo"
            name="correo"
            value={formulario.correo}
            onChange={manejarCambio}
            placeholder="correo@ejemplo.com"
            required
          />

          {errores.correo && (
            <span className="campo-error">
              {errores.correo}
            </span>
          )}
        </div>

        <div className="formulario-campo">
          <label htmlFor="telefono">Teléfono</label>

          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formulario.telefono}
            onChange={manejarCambio}
            placeholder="Ingresa tu teléfono"
            required
          />

          {errores.telefono && (
            <span className="campo-error">
              {errores.telefono}
            </span>
          )}
        </div>

        <div className="formulario-campo">
          <label htmlFor="descripcion">
            Descripción del proyecto
          </label>

          <textarea
            id="descripcion"
            name="descripcion"
            value={formulario.descripcion}
            onChange={manejarCambio}
            placeholder="Cuéntame sobre tu proyecto..."
            rows={5}
            required
          />

          {errores.descripcion && (
            <span className="campo-error">
              {errores.descripcion}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="boton-primario boton-enviar"
        >
          Enviar información
        </button>

        {confirmacion && (
          <p className="mensaje-confirmacion" role="status">
            {confirmacion}
          </p>
        )}

      </form>
    </section>
  )
}

export default FormularioContacto
