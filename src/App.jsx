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
import VerifyAccount from './pages/partner/verifyAccount/verifyAccount'
import AdminLayout from './components/adminLayout/adminLayout'
import GroupHomePage from './pages/partner/group/groupHomePage/GroupHomePage'
import GroupHomeOperations from './pages/partner/group/groupHomeOperations/GroupHomeOperations'
import GroupHomePageLayout from './components/groupHomePageLayout/GroupHomePageLayout'
import GroupHomePerformance from './pages/partner/group/groupHomePerformance/groupHomePerformance'
import GroupReservations from './pages/partner/group/groupReservations/GroupReservations'
import GroupReviews from './pages/partner/group/groupReviews/GroupReviews'
import GroupReviewsLayout from './components/groupReviewsLayout/GroupReviewsLayout'
import SelectedGroupReview from './pages/partner/group/selectedGroupReview/SelectedGroupReview'
import GroupFinances from './pages/partner/group/groupFinances/GroupFinances'
import BecomeHostLayout from './components/becomeHostLayout/BecomeHostLayout'
import BecomeHostCategory from './pages/becomeHost/becomeHostCategory/BecomeHostCategory'
import BecomeHostListing from './pages/becomeHost/becomeHostListing/BecomeHostListing'
import BecomeHostProperty from './pages/becomeHost/becomeHostProperty/becomeHostProperty'
import BecomeHostPropertyCount from './pages/becomeHost/becomeHostPropertyCount/BecomeHostPropertyCount'
import BecomeHostFeedBackLoop from './pages/becomeHost/becomeHostFeedBackLoop/BecomeHostFeedBackLoop'
import AboutPropertyLayout from './components/aboutPropertyLayout/AboutPropertyLayout'
import AboutProperty from './pages/partner/newPropertyDetails/aboutProperty/AboutProperty'
import CreateRoom from './pages/partner/newPropertyDetails/createRoom/CreateRoom'
import NewPropertyFacilities from './pages/partner/newPropertyDetails/facilities/NewPropertyFacilities'
import NewPropertyAmenities from './pages/partner/newPropertyDetails/newPropertyAmenities/NewPropertyAmenities'
import NewPropertyPhotos from './pages/partner/newPropertyDetails/newPropertyPhotos/NewPropertyPhotos'
import NewPropertySettings from './pages/partner/newPropertyDetails/newPropertySettings/NewPropertySettings'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='hotels' element={<Hotels />} />r4
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
      <Route path='/list-property' element={<ListPropertyLayout />}>
        <Route index element={<ListPropertyHome />} />
        <Route path='createAccount' element={<CreateAccountLayout />}>
          <Route index element={<CreateAccount />} />
          <Route path='contactDetails' element={<ContactDetails />} />
          <Route path='createPassword' element={<CreatePassword />} />
        </Route>
        <Route path='verifyAccount' element={<VerifyAccount />} />
      </Route>
      <Route path='admin' element={<AdminLayout />}>
        <Route path='home' element={<GroupHomePage />}>
          <Route element={<GroupHomePageLayout />} >
            <Route index element={<GroupHomeOperations />} />
            <Route path='performance' element={<GroupHomePerformance />} />
          </Route>
        </Route>
        <Route path='reservations' element={<GroupReservations />} />
        <Route path='reviews' element={<GroupReviewsLayout/>}>
          <Route index element={<GroupReviews/>}/>
        </Route>
        <Route path='reviews/:id' element={<SelectedGroupReview/>}/>
        <Route path='finances' element={<GroupFinances/>}/>
      </Route>
      <Route path='become-a-host' element={<BecomeHostLayout/>}>
        <Route index element={<BecomeHostCategory/>}/>
        <Route path='listing' element={<BecomeHostListing/>}/>
        <Route path='property' element={<BecomeHostProperty/>}/>
        <Route path='count' element={<BecomeHostPropertyCount/>}/>
        <Route path='feedback--loop' element={<BecomeHostFeedBackLoop/>}/>
      </Route>
      <Route path='/about-property' element={<AboutPropertyLayout/>}>
        <Route index element={<AboutProperty/>}/>
        <Route path='createRoom' element={<CreateRoom/>}/>
        <Route path='facilities' element={<NewPropertyFacilities/>}/>
        <Route path='amenities'  element={<NewPropertyAmenities/>}/>
        <Route path='photos'  element={<NewPropertyPhotos/>}/>
        <Route path='settings'  element={<NewPropertySettings/>}/>
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
