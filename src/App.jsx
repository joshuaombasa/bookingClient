import { useState } from 'react'
import {
  createBrowserRouter, createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import Searchresults from './pages/searchresults/Searchresults'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='searchresults' element={<Searchresults/>}/>
    </Route>
  ))

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
