//#region Imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom' 
import Aparelhos from './routes/Aparelhos/Aparelhos.jsx'
import VisualizarAparelhos from './routes/VisualizarAparelhos/VisualizarAparelhos.jsx'
import Home from './routes/Home/Home.jsx'
import Erro404 from './routes/Error/Erro404.jsx'
//#endregion

const router = createBrowserRouter([
  {
    path: '/', 
    element: <App/>,
    errorElement: <Erro404/>,
    children:[
      {path: '/', element: <Home/>},
      {path: '/aparelhos', element: <Aparelhos/>},
      {path: '/visualizar/aparelhos/:id', element: <VisualizarAparelhos/>},
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
