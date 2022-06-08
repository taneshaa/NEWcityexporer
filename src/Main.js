import React from 'react';
import Form from "react-bootstrap/Form";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      latitude: '',
      longitude: '',
      location: '',
      errorMsg: '',
      showError: false
    }
  }
  cityLocation = async (event) => {
    event.preventDefault();
    try {
      // build out URl for locationIQ, add key from .env file, add cityName (this.state.cityName) all goes in URL
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.cityName}&format=json`;
      // await axios.get() then pass in URL
      const locationResponse = await axios.get(url)
      // axios always gives me the data i care about in a property called data
      console.log(locationResponse.data);
      // how do we update a property in state
      this.setState({
        location: locationResponse.data[0].display_name,
        latitude: locationResponse.data[0].lat,
        longitute: locationResponse.data[0].lon,
        showError: false,
        errorMsg: ''
      })
      // put in error information, display errror through seprate component
    } catch (error) {
      console.log(error);
      this.setState({
        showError: true,
        errorMsg: error.response.status + ': ' + error.response.data.error
      })
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
            <Button type='submit'>Explore!</Button>
          </Form.Group>
        </Form>
        {this.state.location &&
          <>
            <h1>{this.state.location}</h1>
            <h2>{this.state.latitude}</h2>
            <p>{this.state.longitute}</p>
            <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.latitude},${this.state.longitute}&format=jpg&zoom=12`} alt={this.state.location} />
          </>
        }

        {this.state.showError &&
          <Alert>{this.state.errorMsg}</Alert>
        }
      </div>
    );
  }
}

export default Main;

