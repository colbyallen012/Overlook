import chai from 'chai';
import RoomServices from '../src/RoomServices.js';
const expect = chai.expect;

describe('Room Services', function() {
  let roomServices;
  beforeEach(function () {
    roomServices = new RoomServices();
  });

  it('should be a function', function() {
    expect(RoomServices).to.be.a('function');
  });

  it('should create a new instance', function() {
    expect(roomServices).to.be.an.instanceOf(RoomServices);
  });

  it('should have default properties', function() {
    expect(roomServices.services).to.deep.equal([])
  })
});