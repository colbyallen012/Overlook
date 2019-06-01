import fetch from 'cross-fetch';
import DOMupdates from './DOMupdates';

var servicesFetchData;
fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/room-services/roomServices')
  .then(function(response) {
    return response.json()
  })
  .then(function(parsedData) {
    servicesFetchData = parsedData
  })
  .catch(err => console.error(err));
  

  class RoomServices {
    constructor() {
      this.services;
      this.todaysFood = []
      this.todaysPrice = [];
      this.todaysUsers = [];
      this.searchedDate;
      this.todaysSearchedFood = []
      this.todaysSearchedPrice = [];
      this.todaysSearchedUsers = [];      
    }

    getServices(){
      this.services = servicesFetchData
      console.log('Services',this.services)
    }

    saveSearchedDate(date) {
      this.searchedDate = date;
    }

    displaySearchedOrder() {
      console.log(this.searchedDate)
      let searched = this.services.roomServices.filter(orders => {
        return orders.date === this.searchedDate
      })

      searched.forEach(order => {
        this.todaysSearchedFood.push(order.food);
      })

      searched.forEach(order => {
        this.todaysSearchedPrice.push(order.totalCost);
      })

      searched.forEach(order => {
        this.todaysSearchedUsers.push(order.userID);
      })

      DOMupdates.displaySearchedUserOrders(this.todaysSearchedUsers)
      DOMupdates.displaySearchedFoodOrders(this.todaysSearchedFood)
      DOMupdates.displaySearchedPriceOrders(this.todaysSearchedPrice)

      console.log(searched)
    }

    displayTodaysOrders(today) {
      console.log(this.services)

      let todaysOrders = this.services.roomServices.filter(service => {
        return service.date === "21/10/2019"
      })

      todaysOrders.forEach(order => {
        this.todaysFood.push(order.food);
      })

      todaysOrders.forEach(order => {
        this.todaysPrice.push(order.totalCost);
      })

      todaysOrders.forEach(order => {
        this.todaysUsers.push(order.userID);
      })

      DOMupdates.displayTodaysUserOrders(this.todaysUsers)
      DOMupdates.displayTodaysFoodOrders(this.todaysFood)
      DOMupdates.displayTodaysPriceOrders(this.todaysPrice)
    }

  }

  export default RoomServices;