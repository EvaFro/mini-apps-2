import React from 'react';

class Form3 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      creditCard: '',
      expDate: '',
      cvv: '',
      billZipCode: ''
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
        <h3>Payment Information</h3>
        <form>
          Credit Card Number:<br/>
          <input name="creditCard" value={this.state.creditCard} onChange={event => this.change(event)}/>
          <br/><br/>
          Expiration Date:<br/>
          <input name="expDate" value={this.state.expDate} onChange={event => this.change(event)}/>
          <br/><br/>
          CVV:<br/>
          <input name="cvv" value={this.state.cvv} onChange={event => this.change(event)}/>
          <br/><br/>
          Billing Zip Code:<br/>
          <input name="billZipCode" value={this.state.billZipCode} onChange={event => this.change(event)}/>
          <br/><br/>
          <br/>
          <button onClick={event => this.onSubmit(event)}>Purchase</button>
        </form>
      </div>
    )
  }
}

export default Form3;