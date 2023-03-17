import './milesBox.css'

import React from 'react'

import { cardData } from '../../cardData'


export const Box = () => {
    return (
      <>
        {cardData.map((item) => (
          <div key={item.amount} class="milesBox">
            <p>Buy {item.amount} miles</p>
            <p>{item.cost}</p>
          </div>
        ))}
      </>
    )
}
