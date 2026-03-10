import React from 'react'

export default function ApiDemo() {
    const PRODUCTS = [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ];

    let lastCategory = null

    return (
        <div>
            <input type="text" placeholder="Search..." />
            <br />
            <label>
                <input type="checkbox" /> Only show products in stock
            </label>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        PRODUCTS.map((value, index) => {
                            const row = []
                            value.category != lastCategory
                                ?
                                row.push(
                                    <tr key={index}>
                                        <th>{value.category}</th>
                                    </tr>
                                )
                                :
                                row.push(
                                    <tr key={index}>
                                        <td className={`${value.stocked ? "text-black" : "text-danger"}`}>{value.name}</td>
                                        <td>{value.price}</td>
                                    </tr>
                                )
                            lastCategory = value.category
                            return row
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
