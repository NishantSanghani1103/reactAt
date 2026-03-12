import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'
import { getCategory } from './api/CategoryApi'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { getProduct } from './api/ProductApi'
import ResponsivePaginationComponent from 'react-responsive-pagination'
import ResponsivePagination from 'react-responsive-pagination';
import { useDispatch } from 'react-redux'
import { addToCart } from './reducer/cartSlice'
function App() {
  const limit = 5
  const [currentPage, setcurrentPage] = useState(0)
  const categoryView = async () => {
    const res = await getCategory()
    return res.data
  }

  const productView = async () => {
    const res = await getProduct(limit, currentPage)
    return res.data
  }
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["category"],
    queryFn: categoryView
  })

  const { data: productData, isLoading: productLoading, error: productError, isError: productIsError } = useQuery({
    queryKey: ["product", currentPage],
    placeholderData: keepPreviousData,
    queryFn: productView,
    refetchInterval: 10000,

    // staleTime:5000
  })


  console.log(productData?.total);
  return (
    <>
      <div className="bg-light min-vh-100 d-flex flex-column">
        <div className="container-fluid py-5 px-4 flex-grow-1">
          <div className="row">
            <div className="col-lg-3 mb-4">
              <div className="card shadow-sm rounded-4 border-0">
                <div className="card-header bg-dark text-white rounded-top-4">
                  <h5 className="mb-0">Categories</h5>
                </div>
                <ul className="list-group list-group-flush">
                  {
                    isLoading
                      ?
                      <li className='list-group-item'>Loading....</li>
                      :
                      isError
                        ?
                        <li className='list-group-item'>{error.message}</li>
                        :
                        data.map((value, index) => <li key={index} className="list-group-item">{value.name}</li>)
                  }

                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row g-4">
                {productLoading ? (
                  <p>Loading...</p>
                ) : productIsError ? (
                  <p>{productError.message}</p>
                ) : (
                  productData?.products?.map((value, index) => (
                    <ProductRow key={index} value={value} />
                  ))
                )}
              </div>
              {
                productLoading
                  ?
                  <p>loading</p>
                  :
                  <ResponsivePagination
                    current={0}
                    total={Math.floor((productData?.total) / limit)}
                    onPageChange={(page) => setcurrentPage(page)}
                  />
              }

            </div>
          </div>
        </div>
      </div >


    </>
  )
}
function ProductRow({ value }) {
  const { id, title, price, description,thumbnail } = value
  const dispatch = useDispatch()
  const handleCart = () => {
    const obj = {
      id,
      title,
      price,
      qty: 1,
      thumbnail
    }
    console.log(obj);
    dispatch(addToCart(obj))
  }
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-4 d-flex">
      <div className="card w-100 shadow-sm rounded-4 border-0">
        <Link to={`/products/${value.id}`}>
          <img src={value.thumbnail} className='w-100' alt="Product" />
        </Link>
        <div className="card-body d-flex flex-column">

          <h6 className="fw-semibold">{value.title}</h6>

          <p className="text-muted small line">
            {value.description}
          </p>

          <div className="mt-auto">
            <h6 className="fw-bold text-primary">
              ₹ {value.price}
            </h6>

            <button onClick={handleCart} className="btn btn-dark w-100 rounded-pill mt-2">
              Add to Cart
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}
export default App
