import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { getCategory } from '../services/productApi'
import ProductFilter from '../components/ProductFilter'
import ProductItems from '../components/ProductItems'
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
export default function ProductListing() {

    const [categoryName, setcategoryName] = useState([])
    const [brandName, setbrandName] = useState([])

    const [skip, setskip] = useState(1)
    useEffect(() => {
        // console.log(brandName);
        console.log(skip);

    }, [skip])
    return (
        <div className="container-fluid mt-4">
            <div className="row">

                {/* Sidebar Filters */}
                <ProductFilter brandName={brandName} setbrandName={setbrandName} categoryName={categoryName} setcategoryName={setcategoryName} />

                {/* Product Section */}
                <div className="col-md-9">
                    <div className="row">

                        {/* Product 1 */}
                        <ProductItems setskip={setskip} skip={skip} brandName={brandName} setbrandName={setbrandName} categoryName={categoryName} />

                        <ResponsivePagination
                            current={skip}
                            total={12}
                            onPageChange={setskip}
                        />

                    </div>
                </div>

            </div>

        </div>
    )
}
