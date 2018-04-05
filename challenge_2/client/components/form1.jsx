import React from 'react';

const Form1 = () => (
  <div>
    <h3>User Account</h3>
    <form action="/">
      First name:<br/>
      <input type="text" name="firstname"/>
      <br/><br/>
      Last name:<br/>
      <input type="text" name="lastname"/>
      <br/><br/>
      Username:<br/>
      <input type="text" name="username"/>
      <br/><br/>
      Password:<br/>
      <input type="password" name="password"/>
      <br/><br/>
      <br/>
      <input type="submit" value="Next"/>
    </form>
  </div>
)

export default Form1;