import React from 'react'
import ListCustomer from './ListCustomer'
import './AdminCustomer.scss'
const AdminCustomer = () => {
  return (
    <div className="admin-customer">
        <div className="flex a-center j-between" style={{margin : '15px auto'}}>
                <div className="search">
                    <input type="text" placeholder='Search...' />
                </div>
                <div className="create customer">
                    <button>+ New Customer</button>
                </div>    
            </div>  
        <ListCustomer/>   
    </div>
  )
}

export default AdminCustomer