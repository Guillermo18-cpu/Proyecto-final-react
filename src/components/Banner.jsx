
import imagenPerfil from '../assets/perfil.jpg'

const Banner = ({ cambiarVista }) => {
  return (
    <section className="banner">
      <article className="banner-informacion">
        <span className="banner-etiqueta">
          Bienvenido a mi portafolio
        </span>

        <h1>Hola, soy Guillermo</h1>

        <h2>
          Estudiante de Tecnología en Sistemas de Información
        </h2>

        <p>
          Apasionado por el desarrollo de software, la tecnología
          y la creación de soluciones digitales. En este espacio
          podrás conocer mi formación, habilidades y proyectos.
        </p>

        <div className="banner-botones">
          <button
            className="boton-primario"
            onClick={() => cambiarVista('proyectos')}
          >
            Ver proyectos
          </button>

          <button
            className="boton-secundario"
            onClick={() => cambiarVista('contacto')}
          >
            Contáctame
          </button>
        </div>
      </article>

      <div className="banner-imagen">
        <img
          src={imagenPerfil}
          alt="Fotografía del perfil profesional"
        />
      </div>
    </section>
  )
}

export default Banner
