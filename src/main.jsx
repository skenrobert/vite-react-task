import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Global variables and constants
import { AppContextProvider, AppContex } from './contex/AppContext'

//route
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import ErrorPage from './Components/error-page.jsx'
import Contact from './Components/Contact.jsx'
import Root from './Components/Root.jsx'
import Navi, { Navi2 } from "./Components/Navi";
import About from './Components/About.jsx'
// import Login from './element/Pages/Auth/Login.jsx'
import Login from './Components/Auth/Login.jsx'
import Dashboard from './Components/Dashboard/dashboard.jsx'
// import Index from './element/Pages/Dashboard/Index2.jsx'
import Index from './element/Pages/Contacts/Index.jsx'
import Layout from './element/Shared/Layout.jsx'
import Personas from './Components/Dashboard/Personas.jsx'
import Persona from './Components/Dashboard/Persona.jsx'
import EditarPersona from './Components/Dashboard/EditarPersona.jsx'
import InsertarPersona from './Components/Dashboard/InsertarPersona.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "contacts/:contactId",
    //     element: <Contact />,
    //   },
    // ],
  },
  {
    path: "/contacts/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "/contacts/:contactId",
    //     element: <Contact />,
    //   },
    // ],
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
  {
    path: "/menu",
    element: <Navi2/>,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/autocompletar",
    element: <div>Hello world!</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/factura",
    element: <h1> factura</h1>,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/usuarios",
    element: <h1> hola</h1>,
  },
  {
    path: "/personas",
    element: <Personas />,
    // children: [
    //   {
    //     path: "/personas/:personaId",
    //     element: <EditarPersona />,
    //   },
    // ],
  },
  {
    path: "/personas/:personaId",
    element: <Persona />,
  },
  {
    path: "/personase/:personaId",
    element: <EditarPersona />,
  },
  {
    path: "/personasi",
    element: <InsertarPersona />,
  },
  // {
  //   path: "/app",
  //   element: <App />,
  //     children: [
  //     {
  //       path: "/app/:taco",
  //       element: <Tacos />,
  //     },
  //   ],
  // },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
      {/* <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/flatly/bootstrap.min.css"
        /> */}
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>,
)
