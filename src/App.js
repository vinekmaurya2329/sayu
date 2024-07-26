import logo from './logo.svg';
import './App.css';
import {Routes,BrowserRouter,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import HomePage from './component/HomePage';
import AboutUs from './component/AboutUs';
import OurClient from './component/OurClient';

function App() {
  return (
    <BrowserRouter>
    
    <Routes>

      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      {/* <Route path='/ourClient' element={<OurClient/>}/> */}
    </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <Navbar/>
    //   <HomePage/>
    // </div>
  );
}

export default App;
