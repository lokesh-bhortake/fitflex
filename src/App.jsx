import { useState } from 'react'
import './App.css'
import { Box } from '@mui/material'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet } from "react-router-dom";
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <Root /> }>
        <Route index element={ <Home /> } />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Route>
    )
  )

  return (
      <RouterProvider router={router} /> 
  )
}

export default App


const Root = () => {
  return (
    <>
      <Box width="400px" sx={{ width: {xl: '1488px'}}} m="auto" >
        <Navbar />
      </Box>

      <div>
        <Outlet />
      </div>

      <Footer />
    </>
  )
}