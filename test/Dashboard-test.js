import chai from 'chai';
import Dashboard from '../src/Dashboard.js';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);


describe('Dashboard', function() {
  let dashboard;
  beforeEach(function () {
    dashboard = new Dashboard();
  });

  it('should be a function', function() {
    expect(Dashboard).to.be.a('function');
  });

  it('should create a new instance', function() {
    expect(dashboard).to.be.an.instanceOf(Dashboard);
  });


});