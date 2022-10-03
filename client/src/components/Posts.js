import { Link } from "react-router-dom"
import Author from "../images/author.png"

const Posts = (props) => {
  const { posts } = props

  return (
    <div className="posts-container">
      {posts.length === 0 ? (
        <p>Loading...</p>
      ) : (
        posts.map((post, i) => (
          <Link
            to={`./post/${post._id}`}
            state={{
              title: post.title,
              content: post.content,
              date: post.date,
            }}
          >
            <div className="post" key={i}>
              <p className="author">
                {" "}
                <img src={Author} alt="" /> fufako
              </p>
              <p className="title">{post.title}</p>
              <p className="date">{post.date}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  )
}

export default Posts
