import Header from './components/utils/Header'
import Footer from './components/utils/Footer'
import Step from './components/presentanteLegal/Index'
import NavBar from './components/utils/NavBar'
import StepTwo from './components/razonSocial/Index'
import StepThree from './components/infoEmpresa/Index'
import StepFour from './components/finalizado/Index'
import StepConfirmacion from './components/confirmacion/Index'

function App() {

  return (
    <>
      <Header />
      {/* <NavBar /> */}
      {/* <Step /> */}
      {/* <StepThree /> */}
      {/* <StepFour /> */}
      <StepConfirmacion />
      <Footer/>
    </>
  )
}

export default App
