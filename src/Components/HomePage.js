import React from "react";
import { useHistory } from "react-router-dom";

export default function  Home () {
    const history = useHistory()

    return(
        <div>
            <button id='order-pizza' onClick={() => history.push('/pizza')}>Order Your Pizza Now!</button>
        </div>
    )
}