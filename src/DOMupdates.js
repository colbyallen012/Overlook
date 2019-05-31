import $ from 'jquery';
import Bookings from './Bookings';

let DOMupdates = {

displayTime(todaysDate, dashboard) {
  $('#datetime').text(todaysDate);
  dashboard.getTodaysDate(todaysDate);
},

getData(dashboard) {
  dashboard.getDash();
  dashboard.getTodaysEarned();
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

searchCustomer(dashboard){
  dashboard.saveUser($('.searchUser').val());
  $('.searchUser').hide();
  $('.searchCust').hide();
},

displaySearchedUser(user) {
  $('.customerDisplay').text(`Current Customer: ${user.name}`)
  $('.addUser').hide();
  $('.addCust').hide();
},

displayNoUser() {
  $('.customerDisplay').text(`This user doesn't exist, please add a new user.`)
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