import React, { useState, useEffect } from "react";

const initialFormState = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  mushroom: false,
  pineapple: false,
  bellPeppers: false,
  anchovies: false,
  bacon: false,
  specialIns: ''
}

const App = () => {
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
