
import Banner from '../components/Banner'
import Biografia from '../components/Biografia'
import RedesSociales from '../components/RedesSociales'

const Presentacion = ({ cambiarVista }) => {
  return (
    <>
      <Banner cambiarVista={cambiarVista} />

      <Biografia />

      <RedesSociales />
    </>
  )
}

export default Presentacion
