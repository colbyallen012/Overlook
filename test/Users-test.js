import chai from 'chai';
import Users from '../src/Users.js';
const expect = chai.expect;

describe('Users', function() {
  let users;
  beforeEach(function () {
    users = new Users();
  });

  it('should be a function', function() {
    expect(Users).to.be.a('function');
  });

  it('should create a new instance', function() {
    expect(users).to.be.an.instanceOf(Users);
  });

  it('should have default properties', function() {
    expect(users.users).to.deep.equal([])
  })
});