import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const {_id, title, price} = useLoaderData();
    const {user} = useContext(AuthContext)

    const handlePlaceOrder = event => {
        event.preventDefault()
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`
        const email = user?.email || 'unregistereed'
        const phone = form.phone.value;
        const message = form.message.value;

        console.log(name, email, phone, message)

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert("Product added successfully")
                form.reset()
            }
        })
    }
    return (
        <div className='my-16 w-3/4 mx-auto'>
            <form onSubmit={handlePlaceOrder}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <input type="text" name='firstName' placeholder="First Name" className="input input-bordered w-full" />
                <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered w-full" />
                <input type="email" name='email' placeholder="Email" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                <input type="phone" name='phone' placeholder="Phone" className="input input-bordered w-full" />
                </div>
                <textarea className="textarea textarea-bordered h-96 w-full mt-6" placeholder="Your Message" name='message'></textarea>
                <input type="submit" value="Order Confirm" className='btn bg-orange-600 w-full border-0 mt-4' />
            </form>
        </div>
    );
};

export default Checkout;