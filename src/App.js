import logo from './logo.svg';
import './App.css';
import {Routes,BrowserRouter,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import HomePage from './component/HomePage';

function App() {
  return (
    <BrowserRouter>
    
    <Routes>

      <Route path='/' element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <Navbar/>
    //   <HomePage/>
    // </div>
  );
}

export default App;
