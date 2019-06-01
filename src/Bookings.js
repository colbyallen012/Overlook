import DOMupdates from './DOMupdates.js'
import fetch from 'cross-fetch';

var bookingsFetchData;
fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/bookings/bookings')
  .then(function(response) {
    return response.json()
  })
  .then(function(parsedData) {
    bookingsFetchData = parsedData
  })
  .catch(err => console.error(err));
  

  class Bookings {
    constructor() {
      this.bookings;
    }

    getBookings() {
      this.bookings = bookingsFetchData
      console.log('Bookings',this.bookings)
    }

    findTodaysBookings(today) {
      console.log(today)
      let date = this.bookings.bookings.filter(booking => {
        return booking.date === today
      })

      DOMupdates.displayTodaysBookings(this.bookings.bookings.length - date.length)
    }

    percentBookedToday(today) {
      let todayDate = this.bookings.bookings.filter(booking => {
        return booking.date === today
      })

      DOMupdates.displayPercentBooked(todayDate.length / this.bookings.bookings.length)
    }

  }

  export default Bookings;