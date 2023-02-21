import React from 'react'
import Customer from './Customer'

const ListCustomer = () => {
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
                    <th>Email</th>
                    <th>Actions</th>

                </tr>
                {
                   
                    <Customer/>
                }
            </table>
    </div>
  )
}

export default ListCustomer