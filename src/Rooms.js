import fetch from 'cross-fetch';

var roomsFetchData;
fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/rooms/rooms')
  .then(function(response) {
    return response.json()
  })
  .then(function(parsedData) {
    roomsFetchData = parsedData
  })
  .catch(err => console.error(err));
  

  class Rooms {
    constructor() {
      this.rooms;
    }

    getRooms(){
      this.rooms = roomsFetchData;
      console.log('Rooms',this.rooms)
    }

  }

  export default Rooms;