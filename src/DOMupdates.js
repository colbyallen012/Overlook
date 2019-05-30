import $ from 'jquery';

let DOMupdates = {

displayTime(todaysDate){
  $('#datetime').text(todaysDate);
},

getData(dashboard){
  dashboard.getDash()
},

}

export default DOMupdates;