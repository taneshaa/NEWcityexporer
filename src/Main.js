import React from 'react';
import Form from "react-bootstrap/Form";
import axios from "axios";


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      latitude: '',
      longitude: '',
    }
  }
  cityLocation = async (event) => {
    event.preventDefault();
    try{
      // build out URl for locationIQ, add key from .env file, add cityName (this.state.cityName) all goes in URL
      // await axios.get() then pass in URL
      
    } catch(error){
      // put in error information, display errror through seprate component
    }
  }


  render() {
    return (
      <div className="Main" >
        <h2>City Explorer</h2>
        {/* basically this is what happens when you click the "Explore!" button */}
        <Form onSubmit={this.cityLocation}>
          <Form.Group>
            <Form.Label> Where would you like to explore?</Form.Label>
            {/* form control is blank box someone will type in, to grab that info you must listen with onChange, then setState with the value*/}
            <Form.Control onChange={(event) => this.setState({ cityName: event.target.value })} type='text' placeholder='seattle' />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Main;
