import { Editor } from "@tinymce/tinymce-react"
import React, { useRef } from "react"

function Create() {
  const editorRef = useRef(null)
  let content = String
  const log = () => {
    if (editorRef.current) {
      content = editorRef.current.getContent()
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    log()

    const post = {
      title: event.target.title.value,
      content: content,
      date: new Date(),
    }
    fetch("http://localhost:5000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
  }

  return (
    <>
      <div>Create</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input name="title" placeholder="Title" type="text" />

        <Editor
          apiKey="ohmmfdethm7prancx4jdxcyk4phn01d75utxxvmy73po7af2"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | " +
              "bold italic backcolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />

        <button type="submit">Create a post</button>
      </form>
    </>
  )
}

export default Create
