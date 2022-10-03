function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault()

    const user = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input name="username" placeholder="Username" type="text" />
        <label htmlFor="password">Password</label>
        <input name="password" placeholder="Password" type="password" />
        <button type="submit">Sign up</button>
      </form>
    </>
  )
}

export default Signup
