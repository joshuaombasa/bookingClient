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
import ReserveLayout from './components/reserverLayout/ReserveLayout'
import BookingDetails from './pages/booking/bookingDetails/BookingDetails'
import FinalStep from './pages/booking/finalStep/FinalStep'
import EmailForm from './pages/signup/emailForm/EmailForm'
import PasswordForm from './pages/signup/passwordForm/PasswordForm'
import RegisterLayout from './components/registerLayout/RegisterLayout'
import LoginLayout from './components/loginLayout/LoginLayout'
import LoginEmailForm from './pages/login/loginEmailForm/LoginEmailForm'
import LoginPasswordForm from './pages/login/loginPasswordForm/LoginPasswordForm'
import ListPropertyLayout from './components/listPropertyLayout/ListPropertyLayout'
import ListPropertyHome from './pages/partner/listProperty/ListPropertyHome'
import CreateAccountLayout from './components/createAccountLayout/CreateAccountLayout'
import CreateAccount from './pages/partner/createAccount/CreateAccount'
import ContactDetails from './pages/partner/contactDetails/contactDetails'
import CreatePassword from './pages/partner/createPassword/createPassword'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='hotels' element={<Hotels />} />
        <Route path='hotels/:id' element={<HotelLayout />}>
          <Route index element={<Overview />} />
          <Route path='infoAndPrices' element={<InfoAndPrices />} />
          <Route path='facilities' element={<Facilities />} />
          <Route path='rules' element={<Rules />} />
          <Route path='reviews' element={<Reviews />} />
        </Route>
        <Route path='reserve' element={<ReserveLayout />}>
          <Route index element={<BookingDetails />} />
          <Route path='payment' element={<FinalStep />} />
        </Route>
        <Route path='register' element={<RegisterLayout />}>
          <Route index element={<EmailForm />} />
          <Route path='password' element={<PasswordForm />} />
        </Route>
        <Route path='login' element={<LoginLayout />}>
          <Route index element={<LoginEmailForm />} />
          <Route path='password' element={<LoginPasswordForm />} />
        </Route>
      </Route>
      <Route path='/list-property' element={<ListPropertyLayout/>}>
        <Route index  element={<ListPropertyHome/>}/>
        <Route path='createAccount' element={<CreateAccountLayout/>}>
          <Route index element={<CreateAccount/>}/>
          <Route path='contactDetails' element={<ContactDetails/>}/>
          <Route path='createPassword' element={<CreatePassword/>}/>
        </Route>
      </Route>
    </>
  ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
