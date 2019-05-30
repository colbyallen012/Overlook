import fetch from 'cross-fetch';

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
    }

    getUsers(){
      this.users.push(usersFetchData)
      console.log('Users', this.users)
    }

  }

  export default Users;