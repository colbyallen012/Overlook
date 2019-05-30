import $ from 'jquery';
import './css/base.scss';
import './images/corporate.png';
import Dashboard from './Dashboard.js'
import DOMupdates from './DOMupdates';

let dashboard = new Dashboard()
var moment = require('moment');

$(document).ready(() => {
  let todaysDate = moment().format("DD" + "/" + "MM" + "/" + "YYYY")
  console.log(todaysDate)
  DOMupdates.displayTime(todaysDate);
});

$('.test').on('click', function(e){
  e.preventDefault(e)
  DOMupdates.getData(dashboard);
});