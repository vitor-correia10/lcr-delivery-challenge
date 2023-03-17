import './milesBox.css'

import React from 'react'

import { cardData } from '../../cardData'


export const Box = () => {
    return (
      <section>
        {cardData.map((item, index) => (
          <div key={index} class="milesBox">
            <p>Buy {item.amount} miles</p>
            <p>${item.cost}.00</p>
          </div>
        ))}
      </section>
    )
}
