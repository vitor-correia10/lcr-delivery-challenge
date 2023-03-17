import './formFieldsStyles.css'

import React from 'react'

//TODO: Country and state/province should be imported from database
export const FormFields = () => {
    return (
      <form>
        <h2>Payment Details</h2>
        <p>We accept all major credit cards. Please, ensure that you enter your details exactly as they appear on your credit card statement. All fields are required unless is indicated.</p>

        <label for="cardholdername">Cardholder name</label>
        <input id="cardholdername" type="text" required></input>

        <label for="cardnumber">Card Number</label>
        <input id="cardnumber" type="text" pattern="[0-9]*" inputmode="numeric" required></input>
      
        <label for="expirationdate">Expiration date</label>
        <input id="expirationdate" class="formSmallField" placeholder="MMYY" type="text" pattern="[0-9]*" inputmode="numeric" required></input>

        <label for="securitycode">CVV</label>
        <input id="securitycode" class="formSmallField" type="text" pattern="[0-9]*" inputmode="numeric" required></input>
      
        <h2 class="billingAddress">Billing address</h2>
        <label for="streetaddress">Street Address</label>
        <input id="streetaddress" class="formMediumField" type="text" required></input>

        <label for="aptnumber">Apt, Suite, Unit Number (Optional)</label>
        <input id="aptnumber" class="formMediumField" type="text"></input>

        <label for="citytown">City / Town</label>
        <input id="citytown" class="formMediumField" type="text" required></input>

        <label for="citytown">City / Town</label>
        <input id="citytown" class="formMediumField" type="text" required></input>

        <label for="country">Country</label>
        <select id="country" class="formMediumField" required>
          <option value="">Select a country</option>
          <option value="canada">Canada</option>
        </select>
      
        <label for="province">Province</label>
        <select id="province" class="formMediumField" required>
          <option value="">Select a state or province</option>
          <option value="al">Alberta</option>
          <option value="bc">British Columbia</option>
          <option value="on">Ontario</option>
          <option value="qc">Quebec</option>
        </select>

        <label for="zipcode">Zip / Postal code</label>
        <input id="zipcode" class="formMediumField" type="text" required></input>

        <label for="phonenumber">Phone number</label>
        <input id="phonenumber" class="formMediumField" type="text" pattern="[0-9]*" inputmode="numeric" required></input>
      
        <label for="email">Email receipt to</label>
        <input id="email" type="email" class="formMediumField" required></input>


        <label for="checkbox" class="checkboxField">
          <input id="checkbox" type="checkbox" />
          I agree to the  
          <a href="#"> terms & Conditions</a>
        </label>

        <input class="btnSubmit" type="submit" value="Buy Miles"></input>
      </form>
    )
}
