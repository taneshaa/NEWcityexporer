import React from 'react';
import Accordion from 'react-bootstrap/Accordian';

app.get('/weather', (request, response) => {
  const searchQuery = request.query.searchQuery;
  const lat = request.query.lat;
  const lon = request.query.lon;