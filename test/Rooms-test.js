import chai from 'chai';
import Rooms from '../src/Rooms.js';
const expect = chai.expect;

describe('Rooms', function() {
  let rooms;
  beforeEach(function () {
    rooms = new Rooms();
  });

  it('should be a function', function() {
    expect(Rooms).to.be.a('function');
  });

  it('should create a new instance', function() {
    expect(rooms).to.be.an.instanceOf(Rooms);
  });

  it('should have default properties', function() {
    expect(rooms.rooms).to.deep.equal([])
  })
});