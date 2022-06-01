import axios from 'axios';
import React from 'react';
import Form from "react-bootstrap/Form";

import Button from 'react-bootstrap/Button';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cityWeSearchedFor: "",
      locationObject: {}
    }
  }
  handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ cityWeSearchedFor: event.target.value })
  }
  getLocation = async (event) =>{
    event.preventDefault();
    // build url to location iq. This base URL which came from the docs

    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.cityWeSearchedFor}&format=json`;
    console.log(url);
    // use axios to get data from location iq
    const locationResponse = await axios.get(url)
    console.log(locationResponse.data);

    // set state of new location data
    this.setState({ locationObject: locationResponse.data[0]})
    // handle what happens if something goes wrong

  }

  render() {
    return (
      <div className="Main" >
        <h2>City Explorer</h2>

        <Form onSubmit={(event) => this.getLocation(event)}>
          <Form.Group>
            <Form.Label> Where would you like to explore?</Form.Label>
            <Form.Control type='text' placeholder='seattle' onChange = {(event) => this.handleChange(event)}/>
          </Form.Group>
          <Button type='submit'>explore!</Button>

        </Form>
        <h2>here is the map for {this.state.locationObject.display_name}</h2>
        <p>lat/lon: {this.state.locationObject.lat}, {this.state.locationObject.lon}</p>
      </div>
    );
  }
}

export default Main;
