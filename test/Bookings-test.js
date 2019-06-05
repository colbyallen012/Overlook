import chai from 'chai';
import Bookings from '../src/Bookings.js';
import Bookingsdata from '../src/Bookingsdata.js';
import DOMupdates from '../src/DOMupdates';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);


chai.spy.on(DOMupdates, 'displayTodaysBookings',  () => true);
chai.spy.on(DOMupdates, 'displayPercentBooked',  () => true);

describe('Bookings', function() {
  let bookings;
  beforeEach(function () {
    bookings = new Bookings(Bookingsdata);
  });

  it('should be a function', function() {
    expect(Bookings).to.be.a('function');
  });

  it('should create a new instance', function() {
    expect(bookings).to.be.an.instanceOf(Bookings);
  });

  it('should have default properties', function() {
    bookings.bookings = Bookingsdata
    expect(bookings).to.be.an('object')
    expect(bookings.userRoom).to.be.an('array')
    expect(bookings.userBookDate).to.be.an('array')
  });

  it('should find todays bookings', function() {
    bookings.bookings = Bookingsdata
    bookings.findTodaysBookings('04/06/2019')
    expect(bookings.bookingsToday).to.deep.equal([{date: '04/06/2019', roomNumber: 193, userID: 46}])
  })

  it('should find todays percentage of bookings', function() {
    bookings.bookings = Bookingsdata
    bookings.percentBookedToday('04/06/2019')
    expect(bookings.bookingsPercent).to.equal(0.005)
  })

  it.skip('should find display all of todays bookings', function() {
    bookings.bookings = Bookingsdata
    bookings.displayAvailableRooms('04/06/2019')
    expect(bookings.todaysRoomsBooked).to.equal(0.005)
  })

});