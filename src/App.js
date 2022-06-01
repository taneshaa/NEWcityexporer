import './App.css';
import React from 'react';
import Main from './Main';
import Header from './Header'
import Footer from './Footer';


class App extends React.Component {
  render() {
    return (
      <div className="App" >
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
