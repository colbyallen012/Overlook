import chai from 'chai';
import Bookings from '../src/Bookings.js';
import Bookingsdata from '../src/Bookingsdata.js';
import DOMupdates from '../src/DOMupdates';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);


chai.spy.on(DOMupdates, 'displayTodaysBookings',  () => true);

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
    expect(bookings.bookings).to.deep.equal([])
  });

  it('should get all bookings', function() {
    bookings.bookings = Bookingsdata.bookings;
    bookings.getBookings();
    expect(bookings.bookings).to.be.an('array')
  })

});