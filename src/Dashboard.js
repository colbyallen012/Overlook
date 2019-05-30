import Users from './Users.js'
import Rooms from './Rooms.js'
import Bookings from './Bookings.js'
import RoomServices from './RoomServices.js'


class Dashboard {
  constructor() {
    this.users;
    this.rooms;
    this.bookings;
    this.roomServices;
  }

  getDash(){
    this.users = new Users()
    this.users.getUsers();
    this.rooms = new Rooms()
    this.rooms.getRooms();
    this.bookings = new Bookings()
    this.bookings.getBookings();
    this.roomServices = new RoomServices()
    this.roomServices.getServices();
  }

}

export default Dashboard;
