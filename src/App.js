import React, { useState, useEffect } from "react";

import Form from "./Components/Form";

const initialFormValues = {
  name: '',
  email: '',
  size: '',
  pepperoni: false,
  sausage: false,
  pineapple: false,
  mushrooms: false,
  anchovies: false,
  bacon: false,
  specialIns: ''
}

const initialFormErrors = {
  name: '',
  size: ''
}

const initialOrder = []
const intitialDisabled = true;

const App = () => {

  const [order, setOrder] = useState(initialOrder);
  const [formValue, setFormValue] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(intitialDisabled);

// input change here

const formSubmit = () => {
  const newOrder = {
    name: formValue.name.trim(),
    email: formValue.email.trim(),
    size: formValue.size,
    toppings: ['pepperoni', 
                'sausage', 
                'pineapple', 
                'mushrooms', 
                'anchovies', 
                'bacon'].filter(topping => formValue[topping]),
    specialIns: formValue.specialIns.trim(),
  }

  setOrder([newOrder, ...order]);
  setFormValue(initialFormValues);
}

  return (
    <>
      <h1>Bloomtech Eats</h1>
      <div>
        <h2>Bloomtech Pizzeria </h2>
      </div>
    </>
  );
};
export default App;
