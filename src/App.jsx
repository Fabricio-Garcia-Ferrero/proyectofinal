import React from 'react'
//import './App.css';
import MainPage from './MainPage'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'



const router = createBrowserRouter([
  {
    path: '/',
    children: [
    
      {
        index: true,
        element: <MainPage />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
