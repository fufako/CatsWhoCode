import Header from "./components/Header"
import React, { useEffect, useState } from "react"
const App = () => {
  const [posts, setPosts] = useState([{}])

  useEffect(() => {
    fetch("/api")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setPosts(data)
      })
  }, [])
  return (
    <>{posts.length === 0 ? <p>Loading...</p> : <Header posts={posts} />}</>
  )
}

export default App
