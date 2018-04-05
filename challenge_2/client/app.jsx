import React from 'react';
import {render} from 'react-dom';
import ShoppingCart from './shoppingCart';

class App extends React.Component {
  render () {
    return (
      <div>
        <ShoppingCart />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));

