import React from 'react'
import { Link } from 'react-router-dom';

import image from '../Assets/Pizza.jpg'

export default function Form(props) {

  const {
    values,
    submit,
    change,
    disabled,
    errors
  } = props

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  }

  return (
  <div>
    <nav>
      <div>
        <img src={image} alt='A fresh baked pizza' height={100} width={100} />
      </div>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Pizza</Link>
      </div>
    </nav>

    <h4>Build Your Pizza Here!</h4>

    <div>
      <div>{errors.name}</div>
      <div>{errors.size}</div>
    </div>

    <form onSubmit={onSubmit}>

      <label>Name For Order:
        <input
          name='name'
          type='text'
          value={values.name}
          onChange={onChange}
        />
      </label>

      <label>Pick Your Pizza Size:
        <select
          name='size'
          value={values.size}
          onChange={onChange}
        >
          <option value="">-- Select a Pizza Size --</option>
          <option value='sm'>Small</option>
          <option value='med'>Medium</option>
          <option value='large'>Large</option>
          <option value="xLarge">Xtra Large</option>
        </select>
      </label>
      
      <div>
        <h4>Pick Your Pizza Toppings:</h4>

        <label>Pepperoni:
          <input
            name='pepperoni'
            type='checkbox'
            checked={values.pepperoni}
            onChange={onChange}
          />
        </label>

        <label>Sausage
          <input 
            name='sausage'
            type='checkbox'
            checked={values.sausage}
            onChange={onChange}
          />
        </label>

        <label>Pineapple
          <input
            name='pineapple'
            type='checkbox'
            checked={values.pineapple}
            onChange={onChange}
          />
        </label>

        <label>Mushrooms
          <input
            name='mushrooms'
            type='checkbox'
            checked={values.mushrooms}
            onChange={onChange}
          />
        </label>

        <label>Anchovies
          <input
            name='anchovies'
            type='checkbox'
            checked={values.anchovies}
            onChange={onChange}
          />
        </label>

        <label>Bacon
          <input
            name='bacon'
            type='checkbox'
            checked={values.bacon}
            onChange={onChange}
          />
        </label>

        <label>Special Instructions:
          <input
            name='specialIns'
            type='text'
            value={values.specialIns}
            onChange={onChange}
          />
        </label>
      </div>
        <button id='submitButton' disabled={disabled} type='submit'>Place Your Order</button>
    </form>
  </div>
  )
}