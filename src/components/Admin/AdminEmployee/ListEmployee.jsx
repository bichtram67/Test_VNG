import React from 'react'
import Employee from './Employee'

const ListEmployee = () => {
  return (
    <div className="admin-customer-list">
            <table>
                <tr>
                    <th>STT</th>
                    <th>First</th>
                    <th>Last</th>
                    <th>Address</th>
                    <th>Station</th>
                    <th>Zipcode</th>
                    <th>Phone</th>
                    <th>Positon</th>
                    <th>Hourly Rate</th>
                    <th>DataHire</th>
                    <th>Actions</th>

                </tr>
                {
                   
                    <Employee/>
                }
            </table>
    </div>
  )
}

export default ListEmployee