import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user, logOut } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('genuis-token')}`
      }
    })
      .then((res) => {
        if(res.status === 401 || res.status === 403){
          logOut()
        }
        return res.json()
      })
      .then((data) => {
        setOrders(data)
      });
  }, [user?.email]);
  return (
    <div className="overflow-x-auto w-full my-16">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <button className="btn btn-square btn-outline">
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
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrderRow key={order.id} order={order}></OrderRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
