import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import About from './pages/About';
import Navbar from './Components/Navbar';
const App = () => {
  return <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/about' element={<About />} />
    </Routes>
  </BrowserRouter>
};
export default App;
