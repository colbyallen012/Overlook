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
      this.date;
    }

    getBookings() {
      this.bookings.push(bookingsFetchData)
      console.log('Bookings',this.bookings)
    }

    findTodaysBookings() {
      console.log(this.bookings[0])
      let date = this.bookings[0].filter(booking => {
        return booking.date === "21/08/2019"
      })

      this.date = date;
      console.log(this.date)
    }

  }

  export default Bookings;