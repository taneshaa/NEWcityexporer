import React from 'react';
import Form from "react-bootstrap/Form";

class Main extends React.Component {
  render() {
    return (
      <div className=  "Main" >
        <h2>City Explorer</h2>
        <Form>
        <Form.Group>
          <Form.Label> Where would you like to explore?</Form.Label>
          <Form.Control type='text' placeholder='seattle'/>
        </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Main;
