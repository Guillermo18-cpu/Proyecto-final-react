
const Navbar = ({ vistaActual, cambiarVista }) => {
  return (
    <header className="header">
      <nav className="navbar">
        <span className="logo">Portafolio</span>

        <ul className="nav-lista">
          <li>
            <button
              className={vistaActual === 'inicio' ? 'activo' : ''}
              onClick={() => cambiarVista('inicio')}
            >
              Inicio
            </button>
          </li>

          <li>
            <button
              className={vistaActual === 'proyectos' ? 'activo' : ''}
              onClick={() => cambiarVista('proyectos')}
            >
              Proyectos
            </button>
          </li>

          <li>
            <button
              className={vistaActual === 'stack' ? 'activo' : ''}
              onClick={() => cambiarVista('stack')}
            >
              Stack tecnológico
            </button>
          </li>

          <li>
            <button
              className={vistaActual === 'propuesta' ? 'activo' : ''}
              onClick={() => cambiarVista('propuesta')}
            >
              Propuesta de valor
            </button>
          </li>

          <li>
            <button
              className={vistaActual === 'contacto' ? 'activo' : ''}
              onClick={() => cambiarVista('contacto')}
            >
              Contacto
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
