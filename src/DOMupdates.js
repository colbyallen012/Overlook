import $ from 'jquery';
import Bookings from './Bookings';

let DOMupdates = {

displayTime(today, dashboard) {
  $('#datetime').text(today);
  dashboard.getTodaysDate(today);
},

getData(dashboard) {
  dashboard.getDash();
  dashboard.getTodaysEarned();
  dashboard.displayTodaysOrders();
},

displayTodaysBookings(bookings) {
  $('#todayBookings').text(bookings)
},

todaysRevenue(cash) {
  $('#todayRevenue').text(cash)
},

displayPercentBooked(percent) {
  $('#percentBooked').text(percent)
},

searchOrders(dashboard) {
  dashboard.saveOrderSearch($('.searchOrders').val())
},

displaySearchedUserOrders(users) {
  $('.userSearchedOrder').each((index, curUser) => {
    $(curUser).text(users[index])
  });
},

displaySearchedFoodOrders(food) {
  $('.foodSearchedOrder').each((index, curFood) => {
    $(curFood).text(food[index])
  });
},

displaySearchedPriceOrders(price) {
  $('.priceSearchedOrder').each((index, curPrice) => {
    $(curPrice).text(price[index])
  });
},

displayTodaysUserOrders(users) {
  $('.userOrder').each((index, curUser) => {
    $(curUser).text(users[index])
  });
},

displayTodaysFoodOrders(food) {
  $('.foodOrder').each((index, curFood) => {
    $(curFood).text(food[index])
  });
},

displayTodaysPriceOrders(price) {
  $('.priceOrder').each((index, curPrice) => {
    $(curPrice).text(price[index])
  });
},

searchCustomer(dashboard){
  dashboard.saveUser($('.searchUser').val());
  $('.searchUser').hide();
  $('.searchCust').hide();
},

displaySearchedUser(user) {
  $('.customerDisplay').text(`Current Customer: ${user.name}`)
  $('.addUser').hide();
  $('.addCust').hide();
  $('.searchOrders').hide();
  $('.searchAllOrders').hide();
  $('.ordersTable').hide();
},

displayNoUser() {
  $('.customerDisplay').text(`This user doesn't exist, please add a new user.`)
  $('.searchOrders').hide();
  $('.searchAllOrders').hide();
  $('.ordersTable').hide();
},

addCustomer(dashboard){
  dashboard.addUser($('.addUser').val());
  $('.addUser').hide();
  $('.addCust').hide();
},

displayAddedUser(user) {
  $('.customerDisplay').text(`New Customer: ${user}`)
},

}

export default DOMupdates;