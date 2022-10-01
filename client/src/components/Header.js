import { Routes, Route, Link } from "react-router-dom"
import Login from "./Login"
import Signup from "./Signup"
import Home from "./Home"

const Header = () => {
  return (
    <>
      <div className="header">
        <Link to="CatsWhoCode">
          {" "}
          <h1>Blog</h1>
        </Link>

        <p>
          <Link to="CatsWhoCode/signup"> Sign up </Link>
        </p>
        <p>
          <Link to="CatsWhoCode/login"> Log in</Link>
        </p>
      </div>

      <Routes>
        <Route path="/CatsWhoCode" element={<Home />} />
        <Route path="CatsWhoCode/signup" element={<Signup />} />
        <Route path="CatsWhoCode/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default Header
