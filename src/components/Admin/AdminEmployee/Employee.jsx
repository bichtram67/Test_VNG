import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import React from 'react'

const Employee = ({stt}) => {
  return (
    <tr>
        <td>{stt + 1}</td>
        <td>Nguyen</td>
        <td>Tram</td>
        <td>5 Le Van Viet, Ho Chi Minh</td>
        <td>Viet Nam</td>
        <td>620000</td>
        <td>0786421768</td>
        <td>tramnguyen672001@gmail.com</td>
        <td>21/02/2023</td>
        <td>$10</td>
        <td>
            <div className="actions flex a-center">
                <div className="update customer">
                    <EditOutlined />
                </div>

                <div 
                    className='delete customer'

                    >
                        
                        <DeleteOutlined />
                </div>
            </div>
        </td>
    </tr>
  )
}

export default Employee