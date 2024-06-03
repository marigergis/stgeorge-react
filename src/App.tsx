// import "./App.css";
// import { Link, Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Outlet } from "react-router"
import NavBar from './nav/NavBar';

// function App() {
//   return (
//     <>
//       <nav>
//         <Link to="/stgeorge-react/">Home</Link>
//         {" | "}
//         <Link to="/stgeorge-react/arabic">Arabic</Link>
//       </nav>

//       <Outlet />
//     </>
//   );
// }

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