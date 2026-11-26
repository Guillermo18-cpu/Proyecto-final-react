
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Presentacion from './views/Presentacion'
import StackTecnologico from './views/StackTecnologico'
import Contacto from './views/Contacto'

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
          <StackTecnologico />
        )}

        {vistaActual === 'propuesta' && (
          <h1>Propuesta de valor</h1>
        )}

        {vistaActual === 'contacto' && (
          <Contacto />
        )}
      </main>

      <Footer />
    </>
  )
}

export default App
