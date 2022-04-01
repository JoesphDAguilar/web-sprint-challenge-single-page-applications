import React from "react";

export default function Confirmation (props) {
    const { pizza } = props

    return (
        <div>
            <h2>Order Confirmation</h2>
            {pizza.map(order => {
                return(
                    <div key={order.id}>
                        <p>Name: {order.name}</p>
                        <p>Email: {order.email}</p>
                        <p>Size: {order.size}</p>
                        <p>Toppings Selected:</p>
                            {order.pepperoni && <p>Pepperoni</p>}
                            {order.sausage && <p>Sausage</p>}
                            {order.pineapple && <p>Pineapple</p>}
                            {order.mushrooms && <p>Mushrooms</p>}
                            {order.anchovies && <p>Anchovies</p>}
                            {order.bacon && <p>Bacon</p>}
                        <p>Special Instructions: {order.specialIns}</p>
                    </div>
                )
            })}
        </div>
    )
}