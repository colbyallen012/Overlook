import $ from 'jquery';
import './css/base.scss';
import './images/corporate.png';
import Dashboard from './Dashboard.js'
import DOMupdates from './DOMupdates';

let dashboard = new Dashboard()
var moment = require('moment');

$(document).ready(() => {
  let todaysDate = moment().format('DD/MM/YYYY');
  DOMupdates.displayTime(todaysDate, dashboard);
});

$(document).ready(function(){
	$('ul.tabs li').click(function(){
	var tab_id = $(this).attr('data-tab');
	$('ul.tabs li').removeClass('current');
	$('.tab-content').removeClass('current');
  $(this).addClass('current');
	$("#"+tab_id).addClass('current');
	})
});

$('.test').on('click', function(e){
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
});


