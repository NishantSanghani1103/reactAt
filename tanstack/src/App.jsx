import { useState } from 'react'
import './App.css'
import { keepPreviousData, useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Link, NavLink } from 'react-router-dom'
import ResponsivePagination from 'react-responsive-pagination';
import { deletePost, getPostData } from './api/PostApi'
function App() {

  const [currentPage, setcurrentPage] = useState(1)
  const limit = 3
  const getPost = async () => {
    try {
      const res = await getPostData(limit,currentPage)
      return res.data

    } catch (error) {
      console.log(error);

    }
  }
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts", currentPage],
    queryFn: getPost,
    // staleTime: 10000
    // refetchInterval: 1000,
    // refetchIntervalInBackground: true,
    placeholderData: keepPreviousData
  })

  const handleDelete = async (id) => {
    alert(id)
    try {
      const res = await deletePost(id)
      console.log(res);

    } catch (error) {
      console.log(error);

    }
  }
  const del = useMutation({
    mutationFn: handleDelete
  })


  return (
    <React.Fragment>
      <div className={`container py-5`}>
        {
          
        }
        <div className="row g-4">
          {
            isLoading
              ?
              <p>Loading....</p>
              :
              error
                ?
                <p>{error}</p>
                :
                data?.map((value, index) => {
                  const { title, id, userId, body } = value
                  return (
                    <div key={index} className="col-12 col-md-6 col-lg-4">

                      <div className="card bg-dark text-light h-100 p-3">
                        <Link className='text-white text-decoration-none' to={`/posts/${id}`}>
                          <p>{id}</p>

                          <p >
                            <strong >Title:</strong> {title}
                          </p>

                          <p>
                            <strong>News:</strong> {body}
                          </p>
                        </Link>

                        <div className="mt-auto">
                          <button className="btn btn-success me-2" >EDIT</button>
                          <button className="btn btn-danger"   disabled={del.isPending} onClick={() => del.mutate(id)} >DELETE</button>
                        </div>
                      </div>
                    </div>
                  )
                })
          }

        </div>
        <div className='my-5'>
          <ResponsivePagination
            current={currentPage}
            total={12}
            onPageChange={(va) => setcurrentPage(va)}
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default App
