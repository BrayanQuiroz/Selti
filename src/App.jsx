import Header from './components/utils/Header'
import Footer from './components/utils/Footer'
import Step from './components/presentanteLegal/Index'
import NavBar from './components/utils/NavBar'
import StepTwo from './components/razonSocial/Index'
import StepThree from './components/infoEmpresa/Index'
import StepFour from './components/finalizado/Index'
import StepConfirmacion from './components/confirmacion/Index'
import { ContainerApp} from './components/utils/Container'

function App() {

  return (
    <ContainerApp>
      <Header />
      {/* <NavBar /> */}
      {/* <Step /> */}
      {/* <StepThree /> */}
      {/* <StepFour /> */}
      <StepConfirmacion />
      <Footer/>
    </ContainerApp>
  )
}

export default App
