//Import dependencias
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";


//Import componentes

import Pie from './componentes/pie'
import Inicio from './componentes/inicio'
import Cabecera from './componentes/Cabecera'
import ClaseForm from './componentes/claseform';
import Pruebas from './componentes/pruebas';

//Import CSS
import './css/general.css'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Inicio
  },
  {
    path: "/clase-formulario",
    Component: ClaseForm
  },
  {
    path: "/pruebas",
    Component: Pruebas
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cabecera />
    <RouterProvider router={router} />
    <Pie />
  </StrictMode>,
)
