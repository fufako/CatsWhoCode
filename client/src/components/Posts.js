import React, { useEffect, useState } from "react"

function Posts() {
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

  console.log(posts)

  return (
    <div className="posts-container">
      {posts.length === 0 ? (
        <p>Loading...</p>
      ) : (
        posts.map((post, i) => <p key={i}>{post.title}</p>)
      )}
    </div>
  )
}

export default Posts
