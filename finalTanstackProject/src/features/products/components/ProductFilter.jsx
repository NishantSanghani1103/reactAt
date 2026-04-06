import React from 'react'
import { getBrands, getCategory } from '../services/ProductPageApi'
import { useQuery } from '@tanstack/react-query'
import ProductCategory from './ProductCategory'
import ProductBrands from './ProductBrands'

export default function ProductFilter({ setsearchName, setcategoryName, categoryName, brandsName, setbrandsName }) {
    console.log(brandsName);
    

    const categoryData = async () => {
        const res = await getCategory()
        return res.data
    }

    const brandsData = async () => {
        const res = await getBrands()
        return res.data
    }

    const { data: category, error: categoryError, isError: isCategoryError, isLoading: isCategoryLoading } = useQuery({
        queryKey: ["category"],
        queryFn: categoryData
    })

    const { data: brnads, error: brandsError, isError: isBrandsError, isLoading: isBrandsLoading } = useQuery({
        queryKey: ["brands"],
        queryFn: brandsData
    })

    return (
        <div className="border p-3 rounded shadow-sm">

            <h5 className="mb-3">Filters</h5>

            {/* Search */}
            <div className="mb-3">
                <label className="form-label">Search</label>
                <input type="text" className="form-control" onChange={(e) => setsearchName(e.target.value)} placeholder="Search products" />
            </div>

            {/* Category */}
            {
                isCategoryLoading
                    ?
                    <p>Category Loading...!!</p>
                    :
                    isCategoryError
                        ?
                        <p>{categoryError.message}</p>
                        :
                        <ProductCategory
                            setcategoryName={setcategoryName}
                            categoryName={categoryName}
                            category={category} />
            }

            {/* Brand */}
            {
                isBrandsLoading
                    ?
                    <p>Brands Loading...!!</p>
                    :
                    isBrandsError
                        ?
                        <p>{brandsError.message}</p>
                        :
                        <ProductBrands
                            brnads={brnads}
                            setbrandsName={setbrandsName}
                            brandsName={brandsName}
                        />
            }

            {/* Price */}
            <div className="mb-3">
                <label className="form-label">Price Range</label>
                <input type="range" className="form-range" />
                <div className="d-flex justify-content-between">
                    <small>₹0</small>
                    <small>₹5000</small>
                </div>
            </div>

            {/* Rating */}
            <div className="mb-3">
                <label className="form-label">Rating</label>
                <select className="form-select">
                    <option>All</option>
                    <option>⭐ 4 & above</option>
                    <option>⭐ 3 & above</option>
                    <option>⭐ 2 & above</option>
                </select>
            </div>

            {/* Sort */}
            <div className="mb-3">
                <label className="form-label">Sort By</label>
                <select className="form-select">
                    <option>Default</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                </select>
            </div>

        </div>
    )
}
