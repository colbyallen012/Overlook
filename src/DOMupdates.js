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

displayCurrentUsersName(name) {
  $('.curUserOrder').text(`${name}'s Orders`)
  $('.customerTitle').text('Date')
  $('.heading').hide()
  $('.bookingHeading').text(`${name}'s Booking History`)
},

displayCurrentUsersDate(date) {
  $('.userOrder').each((index, curDate) => {
    $(curDate).text(date[index])
  });
},

displayCurrentUsersFoodOrders(food) {
  $('.foodOrder').each((index, curFood) => {
    $(curFood).text(food[index])
  });
},

displayCurrentUsersPriceOrders(price) {
  $('.priceOrder').each((index, curPrice) => {
    $(curPrice).text(price[index])
  });
},

displayParticularDayOrder(order, user, total) {
  $('.totalSpentDay').text(`On ${order}, ${user.name} spent $${total}`)
},

displayAllTimeOrder(user, total) {
  $('.totalSpentAll').text(`${user.name} has spent $${total} all time.`)
},

displaySearchedUserBookingsRoom(room) {
  $('.userRoom').each((index, curRoom) => {
    $(curRoom).text(room[index])
  });
},

displaySearchedUserBookingsDate(date) {
  $('.userRoomDate').each((index, curDate) => {
    $(curDate).text(date[index])
  });
},

searchCustomer(dashboard){
  dashboard.saveUser($('.searchUser').val());
  $('.searchUser').hide();
  $('.searchCust').hide();
  $('.searchedOrdersTable').hide();
  dashboard.displayCurUserOrders();
  dashboard.displayCurUserBookings();
},

addBooking() {
  $('.bookingHeading').text(`No bookings exist for this user. Please click to add a booking`);
  $('.bookingsTable').hide();
},

displaySearchedUser(user) {
  $('.customerDisplay').text(`Current Customer: ${user.name}`)
  $('.addUser').hide();
  $('.addCust').hide();
  $('.searchOrders').hide();
  $('.searchAllOrders').hide();
},

displayNoUser() {
  $('.customerDisplay').text(`This user doesn't exist, please add a new user.`);
  $('.orders').text(`This user doesn't exist, please add a new user.`);
  // $('.ordersTable').hide();
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

displayRoomsButton() {
  $('.showBookings').show();
},

searchAvailableRooms(dashboard) {
  $('availableRooms').show();
  dashboard.searchAvailableRooms()
},

displayRoomTable() {
  $('.availableRooms').show()
},

displayAvailableRoomNumbs(numb) {
  $('.roomNumb').each((index, curNumb) => {
    $(curNumb).text(numb[index])
  });
},

displayAvailableRoomTypes(type) {
  $('.roomType').each((index, curType) => {
    $(curType).text(type[index])
  });
},

displayAvailableBidet(bidet) {
  $('.hasBidet').each((index, curBidet) => {
    $(curBidet).text(bidet[index])
  });
},

displayAvailableBedSizes(beds) {
  $('.bedSize').each((index, curBeds) => {
    $(curBeds).text(beds[index])
  });
},

displayAvailableBedSizes(beds) {
  $('.bedSize').each((index, curBeds) => {
    $(curBeds).text(beds[index])
  });
},

displayAvailableBedCount(beds) {
  $('.bedNums').each((index, curBeds) => {
    $(curBeds).text(beds[index])
  });
},

displayAvailableRoomCost(cost) {
  $('.cost').each((index, curCost) => {
    $(curCost).text(`$${cost[index]}`)
  });
},

makeNewBooking(dashboard){
  dashboard.saveNewBooking($('.bookingPick').val());
  $('.showBookings').hide();
  $('.bookingPick').hide();
  $('.chooseBooking').hide();
  $('.availableRooms').hide();
},

makeNewOrder(dashboard) {
  dashboard.saveNewOrder($('.orderPick').val());
},

displayBookedRoom(room) {
  $('.showBookInstructions').text(`Room number ${room.number} has been booked. It is a ${room.roomType}, with ${room.numBeds} beds, and the total is $${room.costPerNight}`)
},

makeRoomServiceOrder(dashboard) {
  dashboard.makeNewOrder();
  $('.addOrder').show()
},

displaySammies(sam) {
  $('.foodType').each((index, curSam) => {
    $(curSam).text(sam[index])
  });
},

displaySammiesPrices(price) {
  $('.foodPrice').each((index, curPrice) => {
    $(curPrice).text(price[index])
  });
},

showOrders() {
  $('.addOrder').show();
  $('.allOrders').show()
}

}

export default DOMupdates;