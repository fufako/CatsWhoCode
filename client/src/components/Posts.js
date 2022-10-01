import React, { useEffect, useState } from "react"

const Posts = () => {
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
        posts.map((post, i) => (
          <div className="post" key={i}>
            <p>{post.title}</p>
            <p>{post.content}</p>
            <p>{post.date}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default Posts
