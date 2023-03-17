import './mainStyles.css'

import React from 'react'

import { Box } from '../Box'
import { FormFields } from '../FormFields'
import { OrderSummary } from '../OrderSummary'


export const Main = () => {
    return (
      <>
        <Box />
        <main>
          <OrderSummary />
          <FormFields />
        </main>
      </>
    )
}
