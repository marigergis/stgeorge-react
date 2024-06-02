import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      [FIXED_CONTENT]

      <nav>
        <Link to="/stgeorge-react/">Home</Link>
        {" | "}
        <Link to="/stgeorge-react/contact">Contact</Link>
      </nav>

      <Outlet />

      [FIXED_CONTENT]
    </>
  );
}