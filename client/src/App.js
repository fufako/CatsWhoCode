import Header from "./components/Header"
import React, { useEffect, useReducer, useState } from "react"
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
    </>
  )
}

export default App
