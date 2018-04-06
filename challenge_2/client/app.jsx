import React from 'react';
import {render} from 'react-dom';
import ShoppingCart from './components/shoppingCart.jsx';
import HomePage from './components/homePage.jsx'
import Form1 from './components/form1.jsx'
import Form2 from './components/form2.jsx'
import Form3 from './components/form3.jsx'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      currentComponent: 'homepage'
    }
  }

  switchComponent(name) {
    console.log('This is the current Component: ', name)
    this.setState({
      currentComponent: name
    });
  }

  displayPage(){
    let page = this.state.currentComponent
    switch(page) {
      case 'homepage':
        return <HomePage switchComponent={name => this.switchComponent(name)}/>
      case 'shoppingCart':
        return <ShoppingCart switchComponent={name => this.switchComponent(name)}/>
      case 'user':
        return <Form1 switchComponent={name => this.switchComponent(name)}/>
      case 'payment':
        return  <Form3 switchComponent={name => this.switchComponent(name)}/>
      case 'shipping':
        return <Form2 switchComponent={name => this.switchComponent(name)}/>
    }
  }

  render () {
    return (
      <div>
        {
          this.displayPage()
        }
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));

