import { createFileRoute, Link } from '@tanstack/react-router'
import { getProduct } from '../api/productApi'
import { useQuery } from '@tanstack/react-query'

export const Route = createFileRoute('/movies')({
  component: RouteComponent,
})

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {

  const getData = async () => {
    const res = await getProduct()
    return res.data
  }

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getData
  })

  console.log(data?.products);

  return (
    <>
      <div className='container'>
        <div className='container-fluid'>
          <div className="row g-4">
            {
              isLoading
                ?
                <p>Loading....</p>
                :
                isError
                  ?
                  <p>{error.message}</p>
                  :
                  data?.products.map((value, index) => {
                    let { thumbnail, title, price, description } = value
                    return (
                      <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">

                        <div className="card w-100 shadow-sm rounded-4 border-0">
                          <img src={thumbnail} alt="Product" />
                          <div className="card-body d-flex flex-column">
                            <Link to={`/products/`}>
                              <h6 className="fw-semibold">{title}</h6>
                            </Link>
                            <p className="text-muted small line">{description}</p>
                            <div className="mt-auto">
                              <h6 className="fw-bold text-primary"> ₹ {price}</h6>


                              <button className="btn btn-dark w-100 rounded-pill mt-2">Add to Cart</button>

                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
            }

          </div>
        </div>
      </div>

    </>
  )
}
