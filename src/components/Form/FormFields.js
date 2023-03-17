import './formFieldsStyles.css'

import React from 'react'

//TODO: Country and state/province should be imported from database
export const FormFields = () => {
    return (
      <form>
        
        <label for="cardholdername">Cardholder name</label>
        <input id="cardholdername" type="text" required></input>

        <label for="cardnumber">Card Number</label>
        <input id="cardnumber" type="text" pattern="[0-9]*" inputmode="numeric" required></input>
      
        <label for="expirationdate">Expiration (mm/yy)</label>
        <input id="expirationdate" type="text" pattern="[0-9]*" inputmode="numeric" required></input>

        <label for="securitycode">CVV</label>
        <input id="securitycode" type="text" pattern="[0-9]*" inputmode="numeric" required></input>
      
        <h2 class="billingAddress">Billing address</h2>
        <label for="streetaddress">Street Address</label>
        <input id="streetaddress" type="text" required></input>

        <label for="aptnumber">Apt, Suite, Unit Number (Optional)</label>
        <input id="aptnumber" type="text"></input>

        <label for="citytown">City / Town</label>
        <input id="citytown" type="text" required></input>

        <label for="citytown">City / Town</label>
        <input id="citytown" type="text" required></input>

        <label for="country">Country</label>
        <select id="country" required>
          <option value="">Select a country</option>
          <option value="canada">Canada</option>
        </select>
      
        <label for="province">Province</label>
        <select id="province" required>
          <option value="">Select a state or province</option>
          <option value="al">Alberta</option>
          <option value="bc">British Columbia</option>
          <option value="on">Ontario</option>
          <option value="qc">Quebec</option>
        </select>

        <label for="zipcode">Zip / Postal code</label>
        <input id="zipcode" type="text" required></input>

        <label for="phonenumber">Phone number</label>
        <input id="phonenumber" type="text" pattern="[0-9]*" inputmode="numeric" required></input>
      
        <label for="email">Email receipt to</label>
        <input id="email" type="email" required></input>

        <input id="checkbox" type="checkbox" />
        <label for="checkbox"> 
          I agree to the <a href="#">Terms and Conditions</a>
        </label>
      </form>
    )
}
