import React from 'react'

export default function ProductBrands({ brnads, brandsName, setbrandsName }) {
    console.log(brandsName);



    const handleBrands = (event) => {
        const value = Array.from(event.target.selectedOptions).map((options) => options.value)
        if (value.includes("")) {
            setbrandsName([])
        }
        else {

            setbrandsName(value)
        }
    }
    return (
        <div className="mb-3">
            <label className="form-label">Brand</label>
            <select onChange={handleBrands} multiple defaultValue={[""]} className="form-select">
                <option value={""}>All</option>
                {brnads?.data?.map((value, index) => <option key={value.id} value={value.slug}>{value.name}</option>)}
            </select>
        </div>
    )
}
