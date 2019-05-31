import fetch from 'cross-fetch';
import DOMupdates from './DOMupdates';

var usersFetchData;
fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/users/users')
  .then(function(response) {
    return response.json()
  })
  .then(function(parsedData) {
    usersFetchData = parsedData.users
  })
  .catch(err => console.error(err));
  

  class Users {
    constructor() {
      this.users = []
      this.searchedUser;
      this.matchedUpUser;
      this.saveAddedUser;
    }

    getUsers(){
      this.users.push(usersFetchData)
      console.log('Users', this.users)
    }

    saveSeachedUser(user) {
      this.searchedUser = user;
    }

    findUser() {
      let curUser = this.searchedUser.toLowerCase()
      let matchUser = this.users[0].find(user => {
       return user.name.toLowerCase() === curUser
      })
      
      this.matchedUpUser = matchUser
      console.log(this.matchedUpUser)
      if(this.matchedUpUser === undefined){
        DOMupdates.displayNoUser()
      } else {
       DOMupdates.displaySearchedUser(this.matchedUpUser)
      }
    }

    saveAddedUser(user) {
      this.addedUser = user;
      DOMupdates.displayAddedUser(this.addedUser)
    }

  }

  export default Users;