import chai from 'chai';
import Users from '../src/Users.js';
import DOMupdates from '../src/DOMupdates';
import Usersdata from '../src/Usersdata.js';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);


chai.spy.on(DOMupdates, 'displayNoUser',  () => true);
chai.spy.on(DOMupdates, 'displaySearchedUser',  () => true);
chai.spy.on(DOMupdates, 'displayAddedUser',  () => true);


describe('Users', function() {
  let users;
  beforeEach(function () {
    users = new Users(Usersdata);
  });

  it('should be a function', function() {
    expect(Users).to.be.a('function');
  });

  it('should create a new instance', function() {
    expect(users).to.be.an.instanceOf(Users);
  });

  it('should have default properties', function() {
    users.users = Usersdata
    expect(users.users).to.be.an('object')
  })

  it('should save a user after it has been searched from the dash', function() {
    users.users = Usersdata
    users.saveSearchedUser('Autumn Toy');
    expect(users.searchedUser).to.be.a('string')
  })

  it('should find a user in the data base that matches the saved user from input', function() {
    users.users = Usersdata.users;
    users.saveSearchedUser('Autumn Toy');
    users.findUser();
    expect(users.matchedUpUser.name).to.be.a('string')
  })

  it('should save an user that has been added', function() {
    users.users = Usersdata.users;
    users.saveAddedUser('Autumn Toy');
    expect(users.addedUser).to.equal('Autumn Toy')
  })

});