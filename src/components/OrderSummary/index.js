import './OrderSummaryStyles.css'

import React from 'react'

export const OrderSummary = ({selectedMile}) => {
    const cost = `$ ${selectedMile.cost}.00`
    return (
      <aside>
        <h2>Order summary</h2>
        <hr />

        <p>
          Total miles
          <span>{selectedMile.amount}</span>
        </p>
        <p>
          GST/HST
          <span>{selectedMile.amount && '$20.00'}</span>
        </p>
        <hr />

        <p>
          Total cost
          <span>{selectedMile.amount ? cost : ' $0.00'}</span>
        </p>

      </aside>
    )
}
