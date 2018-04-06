import React from 'react';

class ShoppingCart extends React.Component {
  constructor(props){
    super(props)
  }

  onSubmit (event) {
    event.preventDefault();
    this.props.switchComponent('user')
  }

  render() {
    return (
      <div>
        <h2>Please proceed to checkout...</h2>
        <h3>Shopping Cart</h3>
        <li>Computer Stand.............$30</li>
        <li>Bluetooth Mouse...........$45</li>
        <li>Bluetooth Keyboard......$50</li>
        <li>Computer Cover............$25</li>
        <li>Computer Bag...............$30</li>
        <li>Accesories Bag.............$15</li>
        <br/>
        <div><b>Totoal: $195</b></div>
        <br/>
        <br/>
        <button onClick={event => this.onSubmit(event)}>Checkout</button>
      </div>
    )
  }
}

export default ShoppingCart;