import React from 'react'
import Order from './Order'

const ListOrder = () => {
  return (
    <div className="admin-customer-list">
            <table>
                <tr>
                    <th>OrderID</th>
                    <th>CustomerID</th>
                    <th>Order Date</th>
                    <th>Ship Date</th>
                    <th>EmployeeID</th>
                    <th>Actions</th>

                </tr>
                {
                   
                    <Order/>
                }
            </table>
    </div>
  )
}

export default ListOrder