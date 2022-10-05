import Header from "./components/Header"
import React, { useEffect, useReducer, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Home from "./components/Home"
import Create from "./components/Create"
import Post from "./components/Post"
const App = () => {
  const [posts, setPosts] = useState([{}])
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch("/api")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setPosts(data)
      })

    fetch("/me")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setUser(data)
      })
  }, [])

  console.log(user)

  return (
    <>
      {posts.length === 0 ? <p>Loading...</p> : <Header posts={posts} />}

      <p>{user.username}</p>
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

export default App
