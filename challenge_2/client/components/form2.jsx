import React from 'react';

class Form2 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNumber: ''
    }
  }

  change (event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  onSubmit (event) {
    event.preventDefault();
    console.log(this.state)
    this.props.switchComponent('payment')
    // axios({
    //   method: 'post',
    //   url: '/shipping',
    //   data: this.state
    // });
  }

  render() {
    return (
      <div>
        <h3>Shipping Information</h3>
        <form>
          Address 1:<br/>
          <input name="address1" value={this.state.address1} onChange={event => this.change(event)}/>
          <br/><br/>
          Address 2:<br/>
          <input name="address2" value={this.state.address2} onChange={event => this.change(event)}/>
          <br/><br/>
          City:<br/>
          <input name="city" value={this.state.city} onChange={event => this.change(event)}/>
          <br/><br/>
          State:<br/>
          <input name="state" value={this.state.state} onChange={event => this.change(event)}/>
          <br/><br/>
          Zip Code:<br/>
          <input name="zipCode" value={this.state.zipCode} onChange={event => this.change(event)}/>
          <br/><br/>
          Phone Number:<br/>
          <input name="phoneNumber" value={this.state.phoneNumber} onChange={event => this.change(event)}/>
          <br/><br/>
          <br/>
          <button onClick={event => this.onSubmit(event)}>Next</button>
        </form>
      </div>
    )
  }
}

export default Form2;