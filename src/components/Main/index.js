import './mainStyles.css'

import React from 'react'

import { cardData } from '../../cardData'
import { FormFields } from '../FormFields'
import { OrderSummary } from '../OrderSummary'


export const Main = () => {
  const [selectedButton, setSelectedButton] = React.useState({})

  const getSelectedButton = (item) => {
    setSelectedButton(item)
  }
  const amount = selectedButton.amount

    return (
      <main>
        <section class="buttons">
          {cardData.map((item) => (
            <button 
              key={item.amount} 
              class={`milesButton ${amount === item.amount ? "active" : ""}`}
              onClick={() => getSelectedButton(item)}
              selected
            >
              <p>Buy {item.amount} miles</p>
              <p className='cost'>${item.cost}.00</p>
            </button>
          ))}
        </section>
        <section class="formSection">
          <OrderSummary selectedMile={selectedButton}/>
          <FormFields />
        </section>
      </main>
    )
}
