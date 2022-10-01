function Create() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const post = {
      title: event.target.title.value,
      content: event.target.content.value,
      date: new Date(),
    }
    const result = fetch("http://localhost:5000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }).then(() => {
      console.log(post)
    })
  }

  return (
    <>
      <div>Create</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input name="title" placeholder="Title" type="text" />
        <label htmlFor="content">Content</label>
        <input name="content" placeholder="Content" type="text" />
        <button type="submit">Create a post</button>
      </form>
    </>
  )
}

export default Create
