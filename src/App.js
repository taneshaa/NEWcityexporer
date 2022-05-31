import './App.css';
import React from 'react';
import Main from './Main';
import Header from './Header'
import Footer from './Footer';
import axios from 'axios';
import { render } from '@testing-library/react';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <button onClick={this.}></button>
        <button onClick={this.}></button>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

// render(){
//   return ()
// }
export default App;
