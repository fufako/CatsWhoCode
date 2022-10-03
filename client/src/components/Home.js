import Posts from "./Posts"

function Home(props) {
  const { posts } = props
  return (
    <>
      <div className="parallax">d</div>
      <Posts posts={posts} />
    </>
  )
}

export default Home
