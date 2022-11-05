import React, { useEffect, useState } from "react";

const OrderRow = ({ order }) => {
  const {_id, serviceName, price, service } = order;
  const [orderService, setOrderService] = useState({});

  var marks = [ 13, 15, 14, 20, 18]
  console.log(typeof marks)

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [service]);

  const handleDelete = id => {
    const procced = window.confirm("Are you sure you want to delete?")
    if(procced){
        fetch(`http://localhost:5000/orders/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
  }

  return (
    <div>
      <tr>
        <th>
          <label>
            <button onClick={() => handleDelete(_id)} className="btn btn-square btn-outline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-16 h-16">
                {orderService?.img && (
                  <img
                    src={orderService.img}
                    alt="Avatar Tailwind CSS Component"
                  />
                )}
              </div>
            </div>
            <div>
              <div className="font-bold">{serviceName}</div>
              <div className="text-sm opacity-50">{price}</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">
            Desktop Support Technician
          </span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </div>
  );
};

export default OrderRow;
