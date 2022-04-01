import React, { useState, useEffect } from "react";

const initialFormSValues = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  pineapple: false,
  mushrooms: false,
  anchovies: false,
  bacon: false,
  specialIns: ''
}

const initialFormErros = {
  name: '',
  size: ''
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
