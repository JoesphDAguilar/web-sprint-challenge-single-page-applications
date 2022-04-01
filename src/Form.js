import React from 'react'
import { useHistory } from 'react-router-dom';

export default function Form(props) {

  const history = useHistory();

  const {
    name,
    size,
    pepperoni,
    sausage,
    pineapple,
    mushrooms,
    anchovies,
    bacon,
    specialIns,
    onChange,
    onSubmit,
    disabled
  } = props

  const 

  return (
    <form onSubmit={onSubmit}>

      <label>Name:
        <input
          name='name'
          type='text'
          value={name}
          onChange={onChange}
        />
      </label>

      <label>Pizza Size:
        <select
          name='size'
          value={size}
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
        <h4>Pizza Toppings Selection</h4>

        <label>Pepperoni:
          <input
            name='pepperoni'
            type='checkbox'
            checked={pepperoni}
            onChange={onChange}
          />
        </label>

        <label>Sausage
          <input 
            name='sausage'
            type='checkbox'
            checked={sausage}
            onChange={onChange}
          />
        </label>

        <label>Pineapple
          <input
            name='pineapple'
            type='checkbox'
            checked={pineapple}
            onChange={onChange}
          />
        </label>

        <label>Mushrooms
          <input
            name='mushrooms'
            type='checkbox'
            checked={mushrooms}
            onChange={onChange}
          />
        </label>

        <label>Anchovies
          <input
            name='anchovies'
            type='checkbox'
            checked={anchovies}
            onChange={onChange}
          />
        </label>

        <label>Bacon
          <input
            name='bacon'
            type='checkbox'
            checked={'bacon'}
            onChange={onChange}
          />
        </label>

        <label>Special Instructions:
          <input
            name='specialIns'
            type='text'
            value={specialIns}
            onChange={onChange}
          />
        </label>
      </div>
        <button id='submitButton' disabled={disabled} type='submit'>Place Your Order</button>
    </form>
  )
}