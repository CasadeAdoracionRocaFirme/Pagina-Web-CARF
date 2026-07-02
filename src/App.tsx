import './App.css'
import Header from './page/header'
import Inicio from './page/Inicio'
import Nosotros from './page/sobre-nosotros'
import Ministerios from './page/ministerios'
import Lideres from './page/lideres'
import Contacto from './page/contacto'
import Footer from './page/footer'
import { Routes, Route } from 'react-router-dom';
import Damas from './page/ministerios/ministerio-damas'
import Caballeros from './page/ministerios/ministerio-caballeros'
import Jovenes from './page/ministerios/ministerio-jovenes'
import Niños from './page/ministerios/ministerio-niños'
import Oración from './page/ministerios/ministerio-oracion'
import Casas_de_Oración from './page/ministerios/ministerio-casas-oracion'
import Consolidación from './page/ministerios/ministerio-consolidacion'
import Danza from './page/ministerios/ministerio-danza'
import Alabanza from './page/ministerios/ministerio-alabanza'
import Familias from './page/ministerios/ministerio-familias'
import Parejas from './page/ministerios/ministerio-parejas'
import Protocolo from './page/ministerios/ministerio-protocolo'
import Servidores from './page/ministerios/ministerio-servidores'
import ScrollToTop from './scrollToTop'


function Home() {

  return (
    <>
    <Header></Header>
    <section id='Inicio'>
      <Inicio></Inicio>
    </section>
    <section id='Nosotros'>
      <Nosotros></Nosotros>
    </section>
    <section id='Ministerios'>
      <Ministerios></Ministerios>
    </section>
    <section id='Lideres'>
      <Lideres></Lideres>
    </section>
    <section id='Contacto'>
      <Contacto></Contacto>
    </section>
    <Footer></Footer>
    </>
  )
}

function App () {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path='/*' element={<Home />}/>
      <Route path='/#/Damas' element={<Damas />}/>
      <Route path='/#/Caballeros' element={<Caballeros />}/>
      <Route path='/#/Jovenes' element={<Jovenes />}/>
      <Route path='/#/Niños' element={<Niños />}/>
      <Route path='/#/Oración' element={<Oración />}/>
      <Route path='/#/Casas_de_Oración' element={<Casas_de_Oración />}/>
      <Route path='/#/Consolidación' element={<Consolidación />}/>
      <Route path='/#/Danza' element={<Danza />}/>
      <Route path='/#/Alabanza' element={<Alabanza />}/>
      <Route path='/#/Familias' element={<Familias />}/>
      <Route path='/#/Parejas' element={<Parejas />}/>
      <Route path='/#/Protocolo' element={<Protocolo />}/>
      <Route path='/#/Servidores' element={<Servidores />}/>
    </Routes>
    </>
  )
}

export default App
