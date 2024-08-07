import logo from './logo.svg';
import './App.css';
import {Routes,BrowserRouter,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import HomePage from './component/HomePage';
import AboutUs from './component/AboutUs';
import OurClient from './component/OurClient';
import OurServices from './component/OurServices';
import BlogTesti from './section/BlogTesti';
import BlogDetails from './section/BlogDetails';
import NavBar from './component/Navbar';
import Footer from './component/Footer';
import PageNotFound from './component/PagenotFound';
import ContactUs from './component/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
    <Routes>

      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/ourService' element={<OurServices/>}/>
      <Route path='/blog' element={<BlogTesti/>}/>
      <Route path='/blogDetails' element={<BlogDetails/>}/>
      <Route path='contactUs' element={<ContactUs/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      {/* <Route path='/ourClient' element={<OurClient/>}/> */}
    </Routes>
    <Footer/>
    </BrowserRouter>
    // <div className="App">
    //   <Navbar/>
    //   <HomePage/>
    // </div>
  );
}

export default App;
