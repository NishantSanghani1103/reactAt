import React from 'react'

export default function UserDetailsTable({ formSave, setformSave }) {
    console.log(formSave);
    const deleteRecord = (index) => {
        alert(index)
        setformSave(formSave.splice(0, index))
    }
    return (
        <div className="col-md-6">
            <div className="card shadow">
                <div className="card-header bg-dark text-white">
                    <h4>User Data Table</h4>
                </div>
                <div className="card-body">
                    <table className="table table-bordered table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Country</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                formSave.length == 0
                                    ?
                                    <td colSpan={7} className='text-center'>
                                        <p>No User Found</p>
                                    </td>
                                    :
                                    formSave.map((value, index) => {
                                        const { fullName, email, gender, country } = value
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{fullName}</td>
                                                <td>{email}</td>
                                                <td>{gender}</td>
                                                <td>{country}</td>
                                                <td><button onClick={() => deleteRecord(index)}>Delete</button></td>
                                            </tr>
                                        )
                                    })
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
