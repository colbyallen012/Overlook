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
    this.userDate = []   
    this.userFood = [];
    this.userPrice = []; 
    this.userTodayTotal;
    this.userAllTotal;
    this.possibleFoodOrder = [];
    this.possiblePrice = [];
  }

  getServices() {
    this.services = servicesFetchData
  }

  saveSearchedDate(date) {
    this.searchedDate = date;
  }

  displaySearchedOrder() {
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
  }

  displayTodaysOrders(today) {
    let todaysOrders = this.services.roomServices.filter(service => {
      return service.date === today
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

  displayUserOrders(user) {
    this.getServices() 
    let userOrders = this.services.roomServices.filter(orders => {
      return orders.userID === user.id
    })

    userOrders.forEach(order => {
      this.userDate.push(order.date);
    })

    userOrders.forEach(order => {
      this.userFood.push(order.food);
    })

    userOrders.forEach(order => {
      this.userPrice.push(order.totalCost);
    })

    DOMupdates.displayCurrentUsersName(user.name)
    DOMupdates.displayCurrentUsersDate(this.userDate)
    DOMupdates.displayCurrentUsersFoodOrders(this.userFood)
    DOMupdates.displayCurrentUsersPriceOrders(this.userPrice)
  }

  displayUserTotalToday(user, today) {
    this.getServices();
    let allOrders = this.services.roomServices.filter(orders => {
      return orders.userID === user.id
    })

    let todayOrders = allOrders.filter(order => {
      return order.date === today
    })
      
    let todayTotal = todayOrders.reduce((acc, total) => {
      acc += total.totalCost
      return acc;
    }, 0)

    this.userTodayTotal = todayTotal

    DOMupdates.displayParticularDayOrder(today, user, todayTotal)
  }

  displayUserTotalAllTime(user) {
    this.getServices();
    let allOrders = this.services.roomServices.filter(orders => {
      return orders.userID === user.id
    })

    let allTotal = allOrders.reduce((acc, total) => {
      acc += total.totalCost
      return acc;
    }, 0)

    this.userAllTotal = allTotal

    DOMupdates.displayAllTimeOrder(user, allTotal)
  }

  displayAllPossOrders() {
    let allSams = this.services.roomServices.reduce((acc, sam)=>{
      if (acc.indexOf(sam.food) === -1) {
        acc.push(sam.food)
      }
      return acc;
    }, [])

    this.possibleFoodOrder.push(allSams)

    DOMupdates.displaySammies(allSams)
      
    let allPrices = this.services.roomServices.reduce((acc, sam)=>{
      if (acc.indexOf(sam.totalCost) === -1) {
        acc.push(sam.totalCost)
      }
      return acc;
    }, [])

    this.possiblePrice.push(allPrices)


    DOMupdates.displaySammiesPrices(allPrices)
  }

  updateUserOrder(order) {
    let pickedOrder = this.services.roomServices.find(service => {
      return service.food.toLowerCase() === order
    })
  }

}

export default RoomServices;