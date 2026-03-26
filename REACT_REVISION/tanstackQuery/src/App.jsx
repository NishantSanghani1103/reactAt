import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { deletePost, getPost } from './api/userApi'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

function App() {
  const [count, setCount] = useState(0)

  const getPostData = async () => {
    const res = await getPost()
    return res.data
  }


  const { data, isError: post, isLoading, error: postError } = useQuery({
    queryKey: ["post"],
    queryFn: getPostData
  })


  return (
    <>
      <div className="container mt-4">
        <div className='container-fluid'>
          <div className='row gy-4'>

            {
              isLoading
                ?
                <p>Loading....</p>
                :
                post
                  ?
                  <p>{postError.message}</p>
                  :
                  data?.map((value, index) => <PostRow value={value} key={index} />)
            }

          </div>



        </div>

      </div>

    </>
  )
}

function PostRow({ value }) {
  const deletePostData = async (id) => {
    const res = await deletePost(id)
    
    return res.data
  }
  const queryClient = useQueryClient()
  const { isError, isPending, error, mutate } = useMutation({
    mutationFn: deletePostData,
    onSuccess: () => {
      queryClient.invalidateQueries(['post'])   
    }
  })
  return (
    <>
      <div className='col-lg-3'>
        <div
          className="card text-white shadow"
          style={{
            background: "linear-gradient(135deg, #1f1f2e, #2c2c3e)",
            borderRadius: "10px",
          }}
        >
          <div className="card-body">

            {/* Index */}
            <h5>{value.id}</h5>

            {/* Title */}
            <p>
              <strong>Title:</strong> {value.title}
            </p>

            {/* News */}
            <p>
              <strong>News:</strong> {value.body}
            </p>

            {/* Buttons */}
            <div className="mt-3">
              <button className="btn btn-success me-2">EDIT</button>
              <button className="btn btn-danger" onClick={() => mutate(value.title)}>{isPending ? "DELETING" : "DELETE"}</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
