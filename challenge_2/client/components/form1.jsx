import React from 'react';

class Form1 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: ''
    }
  }

  change (event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  onSubmit (event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h3>User Account</h3>
        <form>
          First name:<br/>
          <input name="firstName" value={this.state.firstName} onChange={event => this.change(event)}/>
          <br/><br/>
          Last name:<br/>
          <input name="lastName" value={this.state.lastName} onChange={event => this.change(event)}/>
          <br/><br/>
          Username:<br/>
          <input name="username" value={this.state.username} onChange={event => this.change(event)}/>
          <br/><br/>
          Password:<br/>
          <input type="password" name="password" value={this.state.password} onChange={event => this.change(event)}/>
          <br/><br/>
          <br/>
          <button onClick={event => this.onSubmit(event)}>Next</button>
        </form>
      </div>
    )
  } 
};

export default Form1;