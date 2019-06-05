import fetch from 'cross-fetch';
import DOMupdates from './DOMupdates';
import RoomServices from './RoomServices'
import Bookings from './Bookings.js'

var usersFetchData;
fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/users/users')
  .then(function(response) {
    return response.json()
  })
  .then(function(parsedData) {
    usersFetchData = parsedData
  })
  .catch(err => console.error(err));
  

  class Users {
    constructor() {
      this.users;
      this.searchedUser;
      this.matchedUpUser;
      this.saveAddedUser;
    }

    getUsers(){
      this.users = usersFetchData 
      console.log('Users', this.users)
    }

    saveSearchedUser(user) {
      this.searchedUser = user;
    }

    findUser() {
      let curUser = this.searchedUser.toLowerCase()
      let matchUser = this.users.users.find(user => {
       return user.name.toLowerCase() === curUser
      })

      console.log(matchUser)
      
      this.matchedUpUser = matchUser
      if(this.matchedUpUser === undefined){
        DOMupdates.displayNoUser()
      } else {
       DOMupdates.displaySearchedUser(this.matchedUpUser)
      }
    }

    saveAddedUser(user) {
      this.addedUser = user;
      DOMupdates.displayAddedUser(this.addedUser)
    }

    displayCurUserOrders(today) {
      let curSearchedUser = this.matchedUpUser;
      if(curSearchedUser === undefined){
        DOMupdates.displayNoUser()
      } else {
      this.RoomServices = new RoomServices();
      this.RoomServices.displayUserOrders(curSearchedUser);
      this.RoomServices.displayUserTotalToday(curSearchedUser, today);
      this.RoomServices.displayUserTotalAllTime(curSearchedUser)
      }
    }

    displayCurUserBookings(today) {
      let curSearchedUser = this.matchedUpUser;
      if(curSearchedUser === undefined) {
        DOMupdates.addBooking()
      } else {
        this.Bookings = new Bookings();
        this.Bookings.displaySearchedUsersBookings(curSearchedUser, today)
      }
    }

  }

  export default Users;