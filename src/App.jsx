import { useState } from 'react'
import {
  createBrowserRouter, createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import Hotels from './pages/hotels/Hotels'
import HotelLayout from './components/hotelLayout/HotelLayout'
import Overview from './pages/hotel/overview/Overview'
import InfoAndPrices from './pages/hotel/infoAndPrices/InfoAndPrices'
import Facilities from './pages/hotel/facilities/facilities'
import Rules from './pages/hotel/rules/Rules'
import Reviews from './pages/hotel/reviews/Reviews'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='hotels' element={<Hotels/>}/>
      <Route path='hotels/:id' element={<HotelLayout/>}>
        <Route index element={<Overview/>}/>
        <Route path='infoAndPrices' element={<InfoAndPrices/>}/>
        <Route path='facilities' element={<Facilities/>}/>
        <Route path='rules' element={<Rules/>}/>
        <Route path='reviews' element={<Reviews/>}/> 
      </Route>
      
    </Route>
  ))

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
