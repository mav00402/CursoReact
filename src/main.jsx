//Import dependencias
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//Import componentes
import Header from './componentes/header'
import Pie from './componentes/pie'
import Inicio from './componentes/inicio'
import Cabecera from './componentes/Cabecera'
//Import CSS
import './css/general.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cabecera />
    <Inicio />
    <Pie />
  </StrictMode>,
)
