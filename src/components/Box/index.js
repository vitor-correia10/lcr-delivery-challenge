import './boxStyles.css'

import React from 'react'

import { cardData } from '../../cardData'


export const Box = () => {
    return (
      <section class="buttons">
        {cardData.map((item) => (
          <button key={item.amount} class="milesBox">
            <p>Buy {item.amount} miles</p>
            <p>${item.cost}.00</p>
          </button>
        ))}
      </section>
    )
}
