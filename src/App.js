import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Component/NavBar/NavBar";
import Home from "./Component/Home/Home";
import Footer from "./Component/Footer/Footer";
import LoginPage from "./Component/Login-Registration/Login/LoginPage";
import Register from "./Component/Login-Registration/Register/Register";
import Inventory from "./Component/Inventory/Inventory";
import RequiredAuth from "./Component/Require/RequiredAuth";
import Blog from "./Component/Blog/Blog";
import NotFound from "./Component/NotFound/NotFound";
import ManageInventory from "./Component/ManageInventory/ManageInventory";
import AddNewInventory from "./Component/Home/AddNewInventory/AddNewInventory";

function App() {
  return (
    <div className='App'>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='login' element={<LoginPage />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route
          path='inventory/:id'
          element={
            <RequiredAuth>
              <Inventory />
            </RequiredAuth>
          }
        ></Route>
        <Route path='blog' element={<Blog />}></Route>
        <Route path='*' element={<NotFound />}></Route>
        <Route
          path='manageInventory'
          element={
            <RequiredAuth>
              <ManageInventory />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path='addNewInventory'
          element={
            <RequiredAuth>
              <AddNewInventory />
            </RequiredAuth>
          }
        ></Route>
      </Routes>
      <br /> <br />
      <Footer></Footer>
    </div>
  );
}

export default App;
