import React from 'react'

export default function ProductCategory({ categoryData }) {
    // console.log(categoryData);
    return (
        <div className="col-lg-3 mb-4">
            <div className="card shadow-sm rounded-4 border-0">
                <div className="card-header bg-dark text-white rounded-top-4">
                    <h5 className="mb-0">Categories</h5>
                </div>
                <ul className="list-group list-group-flush">
                    {
                        categoryData.map((value, index) => <li  key={index} className="list-group-item">{value.name}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}
