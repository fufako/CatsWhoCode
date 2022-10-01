import Posts from "./Posts"

function Home(props) {
  const { posts } = props
  return (
    <>
      <div>Home</div>
      <Posts posts={posts} />
    </>
  )
}

export default Home
