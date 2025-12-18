import React, { useEffect, useState } from 'react'
import { assets, dummyOrders } from '../../assets/assets'

const Orders = () => {
  const [orders, setOrders] = useState([])

  const fetchOrders = async () => {
    setOrders(dummyOrders)
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  return (
    <div className="md:p-10 p-4 space-y-4">
      <h2 className="text-lg font-medium">Orders List</h2>

      {orders.map((order, index) => (
        <div
          key={index}
          className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center gap-5 p-5 max-w-4xl rounded-md border border-gray-300"
        >
          {/* Items */}
          <div className="flex gap-5">
            <img
              className="w-12 h-12 object-cover opacity-60"
              src={assets.box_icon}
              alt="box icon"
            />

            <div className="flex flex-col justify-center">
              {order.items.map((item, i) => (
                <p key={i} className="font-medium">
                  {item.product.name}
                  {item.quantity > 1 && (
                    <span className="text-indigo-500 ml-1">
                      x{item.quantity}
                    </span>
                  )}
                </p>
              ))}
            </div>
          </div>

          {/* Address */}
          <div className="text-sm">
            <p className="font-medium mb-1">
              {order.address.firstName} {order.address.lastName}
            </p>
            <p>
              {order.address.street}, {order.address.city},{' '}
              {order.address.state}, {order.address.zipcode},{' '}
              {order.address.country}
            </p>
          </div>

          {/* Amount */}
          <p className="font-medium text-base text-black/70">
            ${order.amount}
          </p>

          {/* Payment info */}
          <div className="flex flex-col text-sm">
            <p>Method: {order.paymentType}</p>
            <p>Date: {order.orderDate}</p>
            <p>Payment: {order.isPaid ? 'Paid' : 'Pending'}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Orders
