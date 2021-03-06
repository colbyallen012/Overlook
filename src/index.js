import $ from 'jquery';
import './css/base.scss';
import './images/corporate.png';
import Dashboard from './Dashboard.js'
import DOMupdates from './DOMupdates';

let dashboard = new Dashboard()

$(document).ready(() => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  today = dd + '/' + mm + '/' + yyyy;

  DOMupdates.displayTime(today, dashboard);
  $('.showBookings').hide()
  $('.availableRooms').hide()
  $('.addOrder').hide()
  $('.allOrders').hide()
  $('.foodMenu').hide()
});

$(document).ready(function() {
  $('ul.tabs li').click(function() {
    var tab_id = $(this).attr('data-tab');
    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');
    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  })
});

$('.test').on('click', function(e) {
  e.preventDefault(e)
  DOMupdates.getData(dashboard);
});

$('.searchCust').on('click', function(e) {
  e.preventDefault(e);
  DOMupdates.searchCustomer(dashboard)
});

$('.addCust').on('click', function(e) {
  e.preventDefault(e);
  DOMupdates.addCustomer(dashboard)
  $('.showBookings').show()
});

$('.searchAllOrders').on('click', function(e) {
  e.preventDefault(e);
  DOMupdates.searchOrders(dashboard)
});

$('.showBookings').on('click', function(e) {
  e.preventDefault(e);
  DOMupdates.searchAvailableRooms(dashboard)
})

$('.chooseBooking').on('click', function(e) {
  e.preventDefault(e);
  DOMupdates.makeNewBooking(dashboard);
  DOMupdates.makeRoomServiceOrder(dashboard)
})

$('.addOrder').on('click', function(e) {
  e.preventDefault(e);
  DOMupdates.showOrders();
})

$('.chooseOrder').on('click', function(e) {
  e.preventDefault(e);
  DOMupdates.makeNewOrder(dashboard);
})



