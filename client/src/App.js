import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import store from './store';
import AppNavbar from './components/Navbar';
import ItemModule from './components/ItemModule';
import List from './components/List';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModule />
            <List />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;


