import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Explore from './pages/Explore'
import Offers from './pages/Offers'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Category from './pages/Category'
import Listing from './pages/Listing'
import Contact from './pages/Contact'
import CreateListing from './pages/CreateListing'
import EditListing from './pages/EditListing'
import Navbar from './Components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './Components/PrivateRoute'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/category/:categoryName' element={<Category />} />
          <Route path='/profile' element={<PrivateRoute/>}>
            <Route path='/profile' element={<Profile/>} />
          </Route>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/create-listing' element={<CreateListing/>} />
          <Route path='/edit-listing/:listingId' element={<EditListing/>} />
          <Route path='/category/:categoryName/:listingId' element={<Listing />} />
          <Route path='/contact/:landloardId' element={<Contact />} />
        </Routes>

        <Navbar />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
