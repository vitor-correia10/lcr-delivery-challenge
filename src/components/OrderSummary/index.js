import './OrderSummaryStyles.css'

import React from 'react'

export const OrderSummary = () => {
    return (
      <aside>
        <h2>Order summary</h2>
        <hr />

        <p>
          Total miles
          <span>2000</span>
        </p>
        <p>
          GST/HST
          <span>$20.00</span>
        </p>
        <hr />

        <p>
          Total cost
          <span>$197.00</span>
        </p>

      </aside>
    )
}
