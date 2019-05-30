import $ from 'jquery';
import './css/base.scss';
import Dashboard from './Dashboard.js'
import DOMupdates from './DOMupdates';

let dashboard = new Dashboard()

$('.test').on('click', function(e){
  e.preventDefault(e)
  DOMupdates.getData(dashboard);
});