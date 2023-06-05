import Header from './components/utils/Header'
import Footer from './components/utils/Footer'
import Step from './components/presentanteLegal/Index'
import NavBar from './components/utils/NavBar'
import StepTwo from './components/razonSocial/Index'
import StepThree from './components/infoEmpresa/Index'
import StepFour from './components/finalizado/Index'
import StepConfirmacion from './components/confirmacion/Index'
import { ContainerApp } from './components/utils/Container'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './components/Context/Context';



function App() {

  return (
    <Router>
      <Header />
      <NavBar />
      <AppProvider>
        <Routes>
        <Route path="/" exact element={<Step/>} />
          <Route path="/razonsocial" exact element={<StepTwo/>} />
          <Route path="/infoEmpresa" element={<StepThree />} />
          <Route path="/finalizado" element={<StepFour /> } />
        </Routes>
      </AppProvider>
      <Footer/>
    </Router>
  )
}

export default App
