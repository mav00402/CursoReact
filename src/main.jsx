//Import dependencias
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//Import componentes
import Header from './componentes/header'
import Inicio from './componentes/inicio' 
//Import CSS
import './css/general.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Inicio />
  </StrictMode>,
)
