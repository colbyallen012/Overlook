import DOMupdates from './DOMupdates.js'
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

    getBookings() {
      this.bookings.push(bookingsFetchData)
      console.log('Bookings',this.bookings)
    }

    findTodaysBookings(today) {
      console.log(today)
      let date = this.bookings[0].filter(booking => {
        return booking.date === today
      })

      DOMupdates.displayTodaysBookings(this.bookings[0].length - date.length)
    }

    percentBookedToday(today) {
      let todayDate = this.bookings[0].filter(booking => {
        return booking.date === today
      })

      DOMupdates.displayPercentBooked(todayDate.length / this.bookings[0].length)
    }

  }

  export default Bookings;