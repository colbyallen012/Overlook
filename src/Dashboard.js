import Users from './Users.js'
import Rooms from './Rooms.js'
import Bookings from './Bookings.js'
import RoomServices from './RoomServices.js'
import DOMupdates from './DOMupdates.js';


class Dashboard {
  constructor() {
    this.today; 
    this.users = new Users()
    this.bookings = new Bookings();
    this.rooms = new Rooms();
    this.roomServices = new RoomServices();
  }

  getDash() {
    this.users.getUsers();
    this.rooms.getRooms();
    this.bookings.getBookings();
    this.bookings.findTodaysBookings(this.today)
    this.bookings.percentBookedToday(this.today)
    this.roomServices.getServices();
  }

  getTodaysDate(date) {
    this.today = date;
  }

  getTodaysEarned() {
    let todaysBookings = this.bookings.bookings.bookings.filter(booking => {
    console.log(this.today)
      return booking.date === this.today
    })

    console.log(todaysBookings)


    let todaysRooms = todaysBookings.map(roomNum => {
      return roomNum.roomNumber
    })

    let roomsOccupied = this.rooms.rooms.rooms.reduce((acc, room) => {
      todaysRooms.forEach(num => {
        if (room.number === num) {
          acc.push(room)
        }
      })
      return acc;
    }, [])

    let roomRevenue = roomsOccupied.reduce((acc, room) => {
      acc += room.costPerNight
      return acc;
    }, 0)

    let todaysServices = this.roomServices.services.roomServices.filter(day=> {
      return day.date === this.today
    })

    let serviceRevenue = todaysServices.reduce((acc, services)=>{
      acc += services.totalCost
      return acc;
    }, 0)

    let totalRevenue = parseFloat(roomRevenue + serviceRevenue).toFixed(2)

    DOMupdates.todaysRevenue(totalRevenue)
  }

  saveOrderSearch(order) {
    this.roomServices.saveSearchedDate(order)
    this.roomServices.displaySearchedOrder()
  }

  saveUser(user) {
    this.users.saveSearchedUser(user);
    this.users.findUser();
  }

  addUser(user) {
    this.users.saveAddedUser(user);
  }

  displayTodaysOrders() {
    let today = this.today
    this.roomServices.displayTodaysOrders(today)
  }

  displayCurUserOrders() {
    this.users.displayCurUserOrders(this.today)
  }

  displayCurUserBookings() {
    this.users.displayCurUserBookings(this.today)
  }

  searchAvailableRooms() {
    this.bookings.displayAvailableRooms(this.today)
  }

  saveNewBooking(numb) {
    this.rooms.displayNewBooking(numb)
  }

  makeNewOrder() {
    this.roomServices.displayAllPossOrders()
  }

  saveNewOrder(order) {
    let savedOrder = order.toLowerCase();
    this.roomServices.updateUserOrder(savedOrder)
  }

}

export default Dashboard;
