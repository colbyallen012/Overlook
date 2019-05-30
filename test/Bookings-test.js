import chai from 'chai';
import Bookings from '../src/Bookings.js';
const expect = chai.expect;

describe('Bookings', function() {
  let bookings;
  beforeEach(function () {
    bookings = new Bookings();
  });

  it('should be a function', function() {
    expect(Bookings).to.be.a('function');
  });

  it('should create a new instance', function() {
    expect(bookings).to.be.an.instanceOf(Bookings);
  });

  it('should have default properties', function() {
    expect(bookings.bookings).to.deep.equal([])
  })
});