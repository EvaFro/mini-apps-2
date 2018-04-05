import React from 'react';

const Form3 = () => (
  <div>
    <h3>Payment Information</h3>
    <form action="/">
      Credit Card Number:<br/>
      <input type="text" name="creditcard"/>
      <br/><br/>
      Expiration Date:<br/>
      <input type="text" name="expdate"/>
      <br/><br/>
      CVV:<br/>
      <input type="text" name="cvv"/>
      <br/><br/>
      Billing Zip Code:<br/>
      <input type="text" name="billzipcode"/>
      <br/><br/>
      <br/>
      <input type="submit" value="Purchase"/>
    </form>
  </div>
)

export default Form3;