import chai from 'chai';
import RoomServices from '../src/RoomServices.js';
import RoomServicesdata from '../src/RoomServicesdata.js';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);

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
});