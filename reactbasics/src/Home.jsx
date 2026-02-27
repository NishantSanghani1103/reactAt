import React from 'react'
import Header from './common/Header'
import { productData } from './data/Products'

export default function Home() {
    let name ="Nishant Sanghani"
    return (
        <>
            <section className='container-fluid bg-secondary min-vh-100' id='product'>
                <div className='container' id='category'>
                    <div>
                        <h3 className='text-center py-4 fw-bold text-white'>Our Category</h3>
                        <div className='row g-0 gap-0 gap-y-0'>
                            <div className='col-lg-4'>
                                <figure className='mb-0 position-relative'>
                                    <img src="https://solachey.com/wp-content/uploads/2025/02/HVAC-Products.png" alt="" className='img-fluid' />
                                    <div className='bg-category d-flex justify-content-center align-items-center position-absolute top-0 w-100 h-100'>
                                        <p className='text-white fw-bold fs-5 '>HVAC Products</p>
                                    </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                <main className='container '>
                    <div>
                        <h3 className='text-center py-4'>Our Product</h3>
                        <div className='row  '>
                            {
                                productData.map((value, index) => <ProductItems name={name} key={value.id} value={value} />)
                            }
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

function ProductItems({ value, name = "Ns" }) {
    // console.log(value);
    let { id, title, thumbnail, price } = value
    return (
        <div className='col-12 col-lg-3 col-md-6 my-2 '>
            {name}
            <div className="bg-white  rounded-3 shadow-sm">
                <img
                    src={thumbnail}
                    className="card-img-top"
                    alt="Product 1"
                />
                <div className="card-body text-center">
                    <h5 className="fs-6">{title}</h5>
                    <p className="fs-6 text-capitalize"> {price}</p>
                </div>
            </div>
        </div>
    )
}