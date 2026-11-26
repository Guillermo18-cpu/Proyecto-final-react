
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contenido">
        <section className="footer-informacion">
          <h3>Portafolio personal</h3>

          <p>Tecnología en Sistemas de Información</p>

          <p>Desarrollo de Apps asistido con IA</p>
        </section>

        <section className="footer-informacion">
          <h3>Información académica</h3>

          <p>
            Institución Universitaria Antonio José Camacho
          </p>

          <p>Cali, Colombia</p>
        </section>
      </div>

      <div className="footer-final">
        <p>
          © {new Date().getFullYear()} — Portafolio personal
        </p>

        <p>Desarrollado con React y Vite</p>
      </div>
    </footer>
  )
}

export default Footer
