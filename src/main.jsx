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
import Root from './Components/root.jsx'
import Navi, { Navi2 } from "./Components/Navi";

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
    path: "/about",
    element: <Navi2/>,
  },
  {
    path: "/autocompletar",
    element: <div>Hello world!</div>,
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
