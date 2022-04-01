import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Components/Form";
import * as yup from 'yup';
import formSchema from "./validation/schema";
import { Route, Switch, useHistory} from 'react-router-dom';
import Home from "./Components/HomePage";

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

  const history = useHistory()

const inputChange = (name, value) => {
  yup
    .reach(formSchema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))

  setFormValue({...formValue, [name]: value})
}
 
const formSubmit = () => {
  // const newOrder = {
  //   name: formValue.name.trim(),
  //   email: formValue.email.trim(),
  //   size: formValue.size,
  //   toppings: ['pepperoni', 
  //               'sausage', 
  //               'pineapple', 
  //               'mushrooms', 
  //               'anchovies', 
  //               'bacon'].filter(topping => formValue[topping]),
  //   specialIns: formValue.specialIns.trim(),
  // }

  // setOrder([newOrder, ...order]);
  // setFormValue(initialFormValues);

  axios.post('https://reqres.in/api/orders', order)
      .then(res => {
        setFormValue([...initialOrder, res.data])
        setFormValue(initialFormValues)
        history.pushState('/Confirmation')
      })
      .catch(err => {
        console.error(err)
      })
}

useEffect(() => {
  formSchema.isValid(formValue)
    .then(valid => setDisabled(!valid))
}, [formValue])

  return (
    <div>
      <h1>Bloomtech Eats</h1>
        <h2>Bloomtech Pizzeria </h2>
      <div>
        <Switch>
          <Route path='/pizza'>
            <Form
              values={formValue}
              change={inputChange}
              submit={formSubmit}
              disabled={disabled}
              errors={formErrors}
            />
          </Route>

          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </div>
    </div>
  );
};
export default App;
