import React from 'react'

export default function ProductCategory({ category, categoryName, setcategoryName }) {
    console.log(category);
    const handleCategory = (event) => {
        console.log(event.target.selectedOptions.value);

        const values = Array.from(event.target.selectedOptions).map(
            option => option.value
        )
        if (values.includes("")) {
            setcategoryName([])
        }
        else {
            setcategoryName(values)
        }
    }
    return (
        <div className="mb-3">
            <label className="form-label">Category</label>
            <select onChange={handleCategory}  defaultValue={[""]} multiple className="form-select">
                <option value={""}>All</option>
                {
                    category?.data?.map((value, index) => <option value={value.slug} key={index}>{value.name}</option>)
                }


            </select>
        </div>
    )
}
