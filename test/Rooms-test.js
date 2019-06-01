import chai from 'chai';
import Rooms from '../src/Rooms.js';
import Roomsdata from '../src/Roomsdata.js';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);

describe('Rooms', function() {
  let rooms;
  beforeEach(function () {
    rooms = new Rooms(Roomsdata);
  });

  it('should be a function', function() {
    expect(Rooms).to.be.a('function');
  });

  it('should create a new instance', function() {
    expect(rooms).to.be.an.instanceOf(Rooms);
  });

  it('should have default properties', function() {
    rooms.rooms = Roomsdata
    expect(rooms.rooms).to.be.an('object')
  })
});