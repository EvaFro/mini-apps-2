import React from 'react';

class SummaryPage extends React.Component {
  constructor(props){
    super(props)
  }

  createFinalData (){
    return Object.assign({},this.props.user, this.props.shipping, this.props.payment)
  }

  onSubmit () {
    this.props.switchComponent({name:'homepage'});
    var finalData = this.createFinalData();
    console.log(finalData);
    // axios({
    //   method: 'post',
    //   url: '/',
    //   data: finalData
    // });
  }

  render() {
    return (
      <div>
        <h3>Review Account Information</h3>
        <p>Name: {`${this.props.user.firstName} ${this.props.user.lastName}`}</p>
        <p>Username: {this.props.user.username}</p>
        <p>Address: {`${this.props.shipping.address1} ${this.props.shipping.address2}, ${this.props.shipping.city}, ${this.props.shipping.state} ${this.props.shipping.zipCode}`}</p>
        <p>Phone Number: {this.props.shipping.phoneNumber}</p>
        <p>Credit Card: {this.props.payment.creditCard}</p>
        <p>Experation Date: {this.props.payment.expDate}</p>
        <p>CVV: {this.props.payment.cvv}</p>
        <p>Billing Zip Code: {this.props.payment.billZipCode}</p>
        <br/>
        <hr/>
        <br/>
        <h3>Current Order</h3>
        <li>Computer Stand.............$30</li>
        <li>Bluetooth Mouse...........$45</li>
        <li>Bluetooth Keyboard......$50</li>
        <li>Computer Cover............$25</li>
        <li>Computer Bag...............$30</li>
        <li>Accesories Bag.............$15</li>
        <br/>
        <div><b>Totoal: $195</b></div>
        <br/><br/>
        <br/>
        <button onClick={() => this.onSubmit()}>Purchase</button>
      </div>
    )
  }
}

export default SummaryPage;



