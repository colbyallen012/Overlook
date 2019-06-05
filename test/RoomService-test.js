import chai from 'chai';
import RoomServices from '../src/RoomServices.js';
import RoomServicesdata from '../src/RoomServicesdata.js';
import DOMupdates from '../src/DOMupdates';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);

chai.spy.on(DOMupdates, 'displaySearchedUserOrders',  () => true);
chai.spy.on(DOMupdates, 'displaySearchedFoodOrders',  () => true);
chai.spy.on(DOMupdates, 'displaySearchedPriceOrders',  () => true);
chai.spy.on(DOMupdates, 'displayTodaysUserOrders',  () => true);
chai.spy.on(DOMupdates, 'displayTodaysFoodOrders',  () => true);
chai.spy.on(DOMupdates, 'displayTodaysPriceOrders',  () => true);
chai.spy.on(DOMupdates, 'displayCurrentUsersName',  () => true);
chai.spy.on(DOMupdates, 'displayCurrentUsersDate',  () => true);
chai.spy.on(DOMupdates, 'displayCurrentUsersFoodOrders',  () => true);
chai.spy.on(DOMupdates, 'displayCurrentUsersPriceOrders',  () => true);
chai.spy.on(DOMupdates, 'displayParticularDayOrder',  () => true);
chai.spy.on(DOMupdates, 'displaySammies',  () => true);
chai.spy.on(DOMupdates, 'displaySammiesPrices',  () => true);
chai.spy.on(DOMupdates, 'displayAllTimeOrder',  () => true);

describe('Room Services', function() {
  let roomServices;
  beforeEach(function () {
    roomServices = new RoomServices(RoomServicesdata);
  });

  it('should be a function', function() {
    expect(RoomServices).to.be.a('function');
  });

  it('should create a new instance', function() {
    expect(roomServices).to.be.an.instanceOf(RoomServices);
  });

  it('should have default properties', function() {
    roomServices.services = RoomServicesdata
    expect(roomServices.services).to.be.an('object')
  })

  it('should save a date that has been searched', function() {
    roomServices.services = RoomServicesdata
    roomServices.saveSearchedDate('21/10/2019');
    expect(roomServices.searchedDate).to.equal('21/10/2019')
  })

  it('should display orders when searched by a date', function() {
    roomServices.services = RoomServicesdata.roomServices
    roomServices.displaySearchedOrder();
    expect(roomServices.todaysSearchedFood).to.be.an('array')
    expect(roomServices.todaysSearchedPrice).to.be.an('array')
    expect(roomServices.todaysSearchedUsers).to.be.an('array')
  })

  it('should display orders for the current date', function() {
    roomServices.services = RoomServicesdata.roomServices
    roomServices.displayTodaysOrders('21/10/2019');
    expect(roomServices.todaysFood).to.be.an('array')
    expect(roomServices.todaysPrice).to.be.an('array')
    expect(roomServices.todaysUsers).to.be.an('array')
  })

  it('should display orders for all time', function() {
    roomServices.services = RoomServicesdata.roomServices
    roomServices.displayTodaysOrders('Autumn Toy');
    expect(roomServices.userDate).to.be.an('array')
    expect(roomServices.userFood).to.be.an('array')
    expect(roomServices.userPrice).to.be.an('array')
  })

  it.skip('should display order total for today', function() {
    roomServices.services = RoomServicesdata.roomServices
    roomServices.displayUserTotalToday();
    expect(roomServices.userTodayTotal).to.equal(0)
  })

  it.skip('should display order total for all time', function() {
    roomServices.getServices()
    roomServices.services = RoomServicesdata.roomServices
    roomServices.displayUserTotalAllTime('Autumn Toy');
    expect(roomServices.userAlltotal).to.equal(0)
  })

  it('should display all possible orders', function() {
    roomServices.services = RoomServicesdata.roomServices
    roomServices.displayAllPossOrders();
    expect(roomServices.possibleFoodOrder).to.be.an('array')
    expect(roomServices.possiblePrice).to.be.an('array')
  })
});