/* eslint-disable no-unused-vars */
import React from 'react'

export default function Table() {
    return (
        <>
            {/* <table border={1}>
                <thead>
                    <th>Student Id</th>
                    <th>Student Name</th>
                    <th>Gender</th>
                    <th>Age</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1234</td>
                        <td>Bill</td>
                        <td>Male</td>
                        <td>17</td>
                    </tr>
                    <tr>
                        <td>1234</td>
                        <td>Bill</td>
                        <td>Male</td>
                        <td rowSpan={3}>17</td>
                    </tr>
                    <tr>
                        <td>1234</td>
                        <td>Bill</td>
                        <td>Male</td>
                
                    </tr>
                    <tr>
                        <td>1234</td>
                        <td>Bill</td>
                        <td>Male</td>
                       
                    </tr>
                </tbody>
            </table> */}
            <table border={1}>
                <thead>
                    <th>No.</th>
                    <th>Full Name</th>
                    <th>Posotion</th>
                    <th>Salary</th>
                    <th>Type</th>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Bill Gates</td>
                        <td>Founder Microsoft</td>
                        <td>$1000</td>
                        <td rowSpan={6}>Company Founder</td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>Bill Gates</td>
                        <td>Founder Microsoft</td>
                        <td>$1000</td>
                       
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Bill Gates</td>
                        <td>Founder Microsoft</td>
                        <td>$1000</td>
                       
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Bill Gates</td>
                        <td>Founder Microsoft</td>
                        <td>$1000</td>
                       
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3} style={{textAlign:"center"}}>Total Expense : </td>
                        <td>$4600</td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}
