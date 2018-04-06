import React from 'react';
import {render} from 'react-dom';
import ShoppingCart from './components/shoppingCart.jsx';
import HomePage from './components/homePage.jsx'
import Form1 from './components/form1.jsx'
import Form2 from './components/form2.jsx'
import Form3 from './components/form3.jsx'
import SummaryPage from './components/summaryPage.jsx'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      currentComponent: 'homepage',
      user: {},
      payment: {},
      shipping: {}
    }
  }

  switchComponent(data) {
    console.log('This is the current Component: ', data.name)
    this.setState({
      currentComponent: data.name,
      user: data.user ? data.user : this.state.user,
      payment: data.payment ? data.payment : this.state.user,
      shipping: data.shipping ? data.shipping : this.state.shipping
    });
  }

  displayPage(){
    let page = this.state.currentComponent
    switch(page) {
      case 'homepage':
        return <HomePage switchComponent={data => this.switchComponent(data)}/>
      case 'shoppingCart':
        return <ShoppingCart switchComponent={data => this.switchComponent(data)}/>
      case 'user':
        return <Form1 switchComponent={data => this.switchComponent(data)}/>
      case 'payment':
        return  <Form3 switchComponent={data => this.switchComponent(data)}/>
      case 'shipping':
        return <Form2 switchComponent={data => this.switchComponent(data)}/>
      case 'summary':
        return <SummaryPage 
                switchComponent={data => this.switchComponent(data)}
                user={this.state.user}
                payment={this.state.payment}
                shipping={this.state.shipping}
                />
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

