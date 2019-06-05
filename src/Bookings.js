import DOMupdates from './DOMupdates.js'
import fetch from 'cross-fetch';
import Rooms from './Rooms.js'

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
    this.userRoom = [];
    this.userBookDate = [];
    this.bookingsToday;
    this.bookingsPercent;
    this.todaysRoomsBooked;
  }

  getBookings() {
    this.bookings = bookingsFetchData
  }

  findTodaysBookings(today) {
    let date = this.bookings.bookings.filter(booking => {
      return booking.date === today
    })

    this.bookingsToday = date

    DOMupdates.displayTodaysBookings(this.bookings.bookings.length - date.length)
  }

  percentBookedToday(today) {
    let todayDate = this.bookings.bookings.filter(booking => {
      return booking.date === today
    })

    this.bookingsPercent = todayDate.length / this.bookings.bookings.length

    DOMupdates.displayPercentBooked(todayDate.length / this.bookings.bookings.length)
  }

  displaySearchedUsersBookings(user, today) {
    this.getBookings();
    let searchedUserID = user.id

    let userBookings = this.bookings.bookings.filter(booking => {
      return booking.userID === searchedUserID
    })

    let todayUserBookings = this.bookings.bookings.find(booking => {
      return booking.date === today
    })

    userBookings.forEach(booking => {
      this.userRoom.push(booking.roomNumber)
    })

    userBookings.forEach(booking => {
      this.userBookDate.push(booking.date)
    })

    if (todayUserBookings === undefined) {
      DOMupdates.displaySearchedUserBookingsRoom(this.userRoom)
      DOMupdates.displaySearchedUserBookingsDate(this.userBookDate)
      DOMupdates.displayRoomsButton()
    } else {
      DOMupdates.displaySearchedUserBookingsRoom(this.userRoom)
      DOMupdates.displaySearchedUserBookingsDate(this.userBookDate)
    }
  }

  displayAvailableRooms(today) {
    console.log(this.bookings)
    let todaysRooms = this.bookings.bookings.filter(booking => {
      return booking.date === today
    })

    this.todaysRoomsBooked = todaysRooms
    this.rooms = new Rooms();
    this.rooms.showRoomsAvailable(todaysRooms)
  }

}

export default Bookings;