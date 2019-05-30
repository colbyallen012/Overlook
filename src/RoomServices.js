import fetch from 'cross-fetch';

var servicesFetchData;
fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/room-services/roomServices')
  .then(function(response) {
    return response.json()
  })
  .then(function(parsedData) {
    servicesFetchData = parsedData.roomServices
  })
  .catch(err => console.error(err));
  

  class RoomServices {
    constructor() {
      this.services = []
    }

    getServices(){
      this.services.push(servicesFetchData)
      console.log('Services',this.services)
    }

  }

  export default RoomServices;