import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import NavBar from './Components/Navbar/NavBar'
import Cart from './Pages/Cart/Cart'
import Login from './Components/LoginPopup/Login'
import PlaceOrder from './Pages/Placeorder/PlaceOrder'
import { useSelector } from 'react-redux'
function App() {
  const ShowLogin = useSelector(state => state.login.showLogin.default)
  return (
    <BrowserRouter basename='/frontEnd/'>
    <div>
      {ShowLogin ? <Login/>: <></>}
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cartpage' element={<Cart/>}/>
      <Route path='/placeOrder' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    </BrowserRouter>  
    
  )}

export default App

