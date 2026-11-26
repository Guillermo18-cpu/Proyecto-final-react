
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Presentacion from './views/Presentacion'

const App = () => {
  const [vistaActual, setVistaActual] = useState('inicio')

  return (
    <>
      <Navbar
        vistaActual={vistaActual}
        cambiarVista={setVistaActual}
      />

      <main className="contenido-principal">
        {vistaActual === 'inicio' && (
          <Presentacion cambiarVista={setVistaActual} />
        )}

        {vistaActual === 'proyectos' && (
          <h1>Mis proyectos</h1>
        )}

        {vistaActual === 'stack' && (
          <h1>Stack tecnológico y estudios</h1>
        )}

        {vistaActual === 'propuesta' && (
          <h1>Propuesta de valor</h1>
        )}

        {vistaActual === 'contacto' && (
          <h1>Chat y formulario de contacto</h1>
        )}
      </main>

      <Footer />
    </>
  )
}

export default App
