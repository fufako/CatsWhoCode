import { Routes, Route, Link } from "react-router-dom"
import Login from "./Login"
import Signup from "./Signup"
import Home from "./Home"
import Create from "./Create"
import Post from "./Post"

const Header = (props) => {
  const { posts } = props

  return (
    <>
      <div className="header">
        <Link to="CatsWhoCode">
          {" "}
          <h1>Blog</h1>
        </Link>
        <div className="links">
          <p>
            <Link to="CatsWhoCode/create"> Create</Link>
          </p>
          <p>
            <Link to="CatsWhoCode/signup"> Sign up </Link>
          </p>
          <p>
            <Link to="CatsWhoCode/login"> Log in</Link>
          </p>
        </div>
      </div>

      <Routes>
        <Route path="/CatsWhoCode" element={<Home posts={posts} />} />
        <Route path="CatsWhoCode/post/:id" element={<Post />} />
        <Route path="CatsWhoCode/signup" element={<Signup />} />
        <Route path="CatsWhoCode/login" element={<Login />} />
        <Route path="CatsWhoCode/create" element={<Create />} />
      </Routes>
    </>
  )
}

export default Header
