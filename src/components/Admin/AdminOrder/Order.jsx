import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import React from 'react'

const Order = ({stt}) => {
  return (
    <tr>
        <td>{stt + 1}</td>
        <td>Nguyen</td>
        <td>Tram</td>
        <td>5 Le Van Viet, Ho Chi Minh</td>
        <td>Viet Nam</td>
        <td>
            <div className="actions flex a-center">
                <div className="update-customer">
                    <EditOutlined />
                </div>

                <div 
                    className='delete-user'

                    >
                        
                        <DeleteOutlined />
                </div>
            </div>
        </td>
    </tr>
  )
}

export default Order