import React from 'react'
import { useHistory } from 'react-router-dom';

export default function Form(props) {

  const history = useHistory();

  const {
    values,
    onSubmit,
    onChange,
    disabled,
    errors
  } = props

  return (
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
  )
}