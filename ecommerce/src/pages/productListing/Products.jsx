import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { CartContext } from '../../Data/CartContext';
import { toast, ToastContainer } from 'react-toastify';
export default function Products({ productData }) {
    // console.log(productData);

    return (
        <>
            <ToastContainer />
            <div className="row g-4">
                {
                    productData.map((value, index) => <ProductRow key={index} value={value} />)
                }
            </div>
        </>
    )
}

function ProductRow({ value }) {
    let { cart, setcart } = useContext(CartContext)
    let { id, thumbnail, price, title, description } = value
    const addToCart = (id) => {
        const cartObj = {
            id,
            title,
            price,
            thumbnail,
            qty: 1
        }
        console.log(cartObj);
        setcart([...cart, cartObj])
        toast.success("Your Item Added In Cart...!!")
        
    }
    localStorage.setItem("CART",JSON.stringify(cart))
    const checkProductInCart = cart.filter((items) => items.id == id)

    const removeFromCart = (id) => {
        if (confirm("Are You Sure Want To Delete Item From Cart ? ")) {
            setcart(cart.filter((items) => items.id != id))
            toast.success("Item Removed From Cart...!!")
        }

    }
    return (
        <>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">

                <div className="card w-100 shadow-sm rounded-4 border-0">
                    <img src={thumbnail} alt="Product" />
                    <div className="card-body d-flex flex-column">
                        <Link to={`/products/${value.id}`}>
                            <h6 className="fw-semibold">{title}</h6>
                        </Link>
                        <p className="text-muted small line">{description}</p>
                        <div className="mt-auto">
                            <h6 className="fw-bold text-primary"> ₹ {price}</h6>
                            {
                                checkProductInCart.length == 1
                                    ?
                                    <button onClick={() => removeFromCart(id)} className="btn btn-danger w-100 rounded-pill mt-2">Remove From Cart</button>
                                    :
                                    <button onClick={() => addToCart(id)} className="btn btn-dark w-100 rounded-pill mt-2">Add to Cart</button>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}