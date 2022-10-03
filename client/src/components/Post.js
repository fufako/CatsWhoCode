import { useLocation } from "react-router-dom"

function Post() {
  const location = useLocation()
  const { content, title, date } = location.state

  const htmlContent = () => ({ __html: content })

  return (
    <>
      <div className="detail-post-container">
        <h2>{title}</h2>

        <div dangerouslySetInnerHTML={htmlContent()} />

        <p>{date}</p>
      </div>
    </>
  )
}

export default Post
