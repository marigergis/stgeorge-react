import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Outlet } from "react-router"
import NavBar from './nav/NavBar';

function App() {

  return (
    <>
      <div className="container">
        <NavBar /> 
        <Outlet />
      </div>
    </>
  );
}

export default App;