import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import NavBar from './Component/NavBar/NavBar';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      <br /> <br />
      <Footer></Footer>
    </div>
  );
}

export default App;
