import React from 'react';

const Form2 = () => (
  <div>
    <h3>Shipping Information</h3>
    <form action="/">
      Address 1:<br/>
      <input type="text" name="address1"/>
      <br/><br/>
      Address 2:<br/>
      <input type="text" name="address2"/>
      <br/><br/>
      City:<br/>
      <input type="text" name="city"/>
      <br/><br/>
      State:<br/>
      <input type="text" name="state"/>
      <br/><br/>
      Zip Code:<br/>
      <input type="text" name="zipcode"/>
      <br/><br/>
      Phone Number:<br/>
      <input type="text" name="phone"/>
      <br/><br/>
      <br/>
      <input type="submit" value="Next"/>
    </form>
  </div>
)

export default Form2;