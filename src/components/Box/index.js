import './boxStyles.css'

import React from 'react'

import { cardData } from '../../cardData'

export const Box = () => {
  const [selectedButton, setSelectedButton] = React.useState({})

  const getSelectedButton = (item) => {
    setSelectedButton(item)
  }
  const amount = selectedButton.amount

  return (
    <section class="buttons">
      {cardData.map((item) => (
        <button 
          key={item.amount} 
          class={`milesBox ${amount === item.amount ? "active" : ""}`}
          onClick={() => getSelectedButton(item)}
          selected
        >
          <p>Buy {item.amount} miles</p>
          <p className='cost'>${item.cost}.00</p>
        </button>
      ))}
    </section>
  )
}
