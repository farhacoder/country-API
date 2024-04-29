// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )




import { createRoot } from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import CountryDetail from './Components/CountryDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
   
    children: [
      {
        path: '/',
        element: <Home />,
      },
      // {
      //   path: '/contact',
      //   element: <Contact />,
      // },
      {
        path: '/:country',
        element: <CountryDetail />,
      },
    ],
  },
])

const root = createRoot(document.querySelector('#root'))

root.render(<RouterProvider router={router} />)

