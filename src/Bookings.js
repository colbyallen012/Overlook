import fetch from 'cross-fetch';

var bookingsFetchData;
fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/bookings/bookings')
  .then(function(response) {
    return response.json()
  })
  .then(function(parsedData) {
    bookingsFetchData = parsedData.bookings
  })
  .catch(err => console.error(err));
  

  class Bookings {
    constructor() {
      this.bookings = []
    }

    getBookings(){
      this.bookings.push(bookingsFetchData)
      console.log('Bookings',this.bookings)
    }

  }

  export default Bookings;