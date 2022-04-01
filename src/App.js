import React, { useState, useEffect } from "react";

import Form from "./Components/Form";
import * as yup from 'yup';
import formSchema from "./validation/schema";
import { Route, Switch, Link } from 'react-router-dom';

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

const inputChange = (name, value) => {
  yup
    .reach(formSchema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))

  setFormValue({...formValue, [name]: value})
}
 
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

useEffect(() => {
  formSchema.isValid(formValue)
    .then(valid => setDisabled(!valid))
}, [formValue])

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
