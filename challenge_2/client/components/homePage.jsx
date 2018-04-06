import React from 'react';

class HomePage extends React.Component {
  constructor(props){
    super(props)
  }

  onSubmit (event) {
    event.preventDefault();
    this.props.switchComponent('shoppingCart')
  }

  render() {
    return (
      <div>
        <h2>Computer Supplies R Us</h2>
        <br/>
        <p>We have all your computer supply needs.</p>
        <br/>
        <br/>
        <button onClick={event => this.onSubmit(event)}>Shopping Cart</button>
      </div>
    )
  }
}

export default HomePage;