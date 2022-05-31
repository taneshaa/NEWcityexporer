// bootstrap accordian

app.get('/weather', (request, response) => {
  const searchQuery = request.query.searchQuery;
  const lat = request.query.lat;
  const lon = request.query.lon;