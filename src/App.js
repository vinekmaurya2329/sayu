import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import HomePage from './component/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
    </div>
  );
}

export default App;
