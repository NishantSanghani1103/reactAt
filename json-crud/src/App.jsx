import { use, useEffect, useState } from 'react'
import { addPost, deletePost, getPost, updatePost } from './api/PostApi'


function App() {
  const [postData, setpostData] = useState([])
  const [error, seterror] = useState("")
  const [loading, setloading] = useState(true)
  const [updateData, setupdateData] = useState(null)
  const [postValue, setpostValue] = useState({
    title: "",
    body: ""
  })

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setpostValue({
      ...postValue,
      [name]: value
    })

  }

  const getPostData = async () => {
    try {
      const res = await getPost()
      setpostData(res?.data)
      setloading(false)

    } catch (error) {
      seterror(error.message);

    }
  }

  const savePost = async () => {
    if (updateData) {
      try {
        console.log(updateData.id);

        const res = await updatePost(updateData.id, postValue)
        console.log(res);

        setpostData(
          postData.map((value, index) => value.id == updateData.id ? res.data : value)
        )

      } catch (error) {
        console.log(error);

      }
    }
    else {
      try {
        const res = await addPost(postValue)
        console.log(res);
        setpostData([...postData, res.data])

      } catch (error) {
        console.log(error);

      }
    }

  }

  useEffect(() => {
    getPostData()
  }, [])



  return (
    <>
      <div className="container py-5">
        <div className="d-flex justify-content-center flex-lg-row flex-sm-row flex-column mb-4 gap-2">
          <input name='title' onChange={handleChange} value={postValue.title} type="text" className="form-control w-25" placeholder="Add Title" />
          <input type="text" name='body' value={postValue.body} onChange={handleChange} className="form-control w-25" placeholder="Add Post" />
          <button className="btn btn-success px-4" onClick={savePost}>{updateData ? "EDIT" : "ADD"}</button>
        </div>

        <div className="row g-4">

          {
            error
              ?
              <p>{error}</p>
              :
              loading
                ?
                <p>Loading...</p>
                :
                postData
                &&
                postData.map((value, index) => {
                  return (
                    <PostRow
                      key={index}
                      value={value}
                      setpostData={setpostData}
                      postData={postData}
                      postValue={postValue}
                      setpostValue={setpostValue}
                      updateData={updateData}
                      setupdateData={setupdateData}
                    />
                  )
                })
          }
        </div>
      </div>
    </>
  )
}

function PostRow({ value, postData, setpostData, postValue, setpostValue, setupdateData }) {
  let { body, userId, id, title } = value
  const handleDelete = async () => {
    alert(id)
    try {
      const res = await deletePost(id)
      console.log(res);
      const afterDelete = postData.filter((value, index) => value.id != id)
      setpostData(afterDelete)

    } catch (error) {
      console.log(error);

    }
  }
  const handleEdit = (singleValue) => {
    setupdateData(singleValue)
    setpostValue({
      title: singleValue.title,
      body: singleValue.body
    })

  }

  return (
    <div className="col-12 col-md-6 col-lg-4">

      <div className="card bg-dark text-light h-100 p-3">
        <p>{id}</p>

        <p>
          <strong>Title:</strong> {title}
        </p>

        <p>
          <strong>News:</strong> {body}
        </p>

        <div className="mt-auto">
          <button className="btn btn-success me-2" onClick={() => handleEdit(value)}>EDIT</button>
          <button className="btn btn-danger" onClick={handleDelete}>DELETE</button>
        </div>
      </div>
    </div>
  )
}

export default App
