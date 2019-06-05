import fetch from 'cross-fetch';
import DOMupdates from './DOMupdates';

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
      this.numb= [];
      this.roomType=[];
      this.hasBidet = [];
      this.bedSize = [];
      this.bedCount = [];
      this.cost = [];
    }

    getRooms(){
      this.rooms = roomsFetchData;
      console.log('Rooms',this.rooms)
    }

    showRoomsAvailable(todaysRooms) {
      this.getRooms();
      let occupiedRooms = todaysRooms

      let available = this.rooms.rooms.reduce((acc, room) => {
        occupiedRooms.forEach(num => {
          if(room.number !== num.roomNumber){
            acc.push(room)
          }
        })
        return acc;
      },[])



      available.forEach(room =>{
        this.numb.push(room.number)
      })

      available.forEach(room =>{
        this.roomType.push(room.roomType)
      })

      available.forEach(room =>{
        this.hasBidet.push(room.bidet)
      })

      available.forEach(room =>{
        this.bedSize.push(room.bedSize)
      })

      available.forEach(room =>{
        this.bedCount.push(room.numBeds)
      })

      available.forEach(room =>{
        this.cost.push(room.costPerNight)
      })

      DOMupdates.displayRoomTable()
      DOMupdates.displayAvailableRoomNumbs(this.numb)
      DOMupdates.displayAvailableRoomTypes(this.roomType)
      DOMupdates.displayAvailableBidet(this.hasBidet)
      DOMupdates.displayAvailableBedSizes(this.bedSize)
      DOMupdates.displayAvailableBedCount(this.bedCount)
      DOMupdates.displayAvailableRoomCost(this.cost)
    }

    displayNewBooking(numb) {
      let pickedRoom = this.rooms.rooms.find(room => {
        return room.number === parseInt(numb)
      })

      DOMupdates.displayBookedRoom(pickedRoom)
    }

  }

  export default Rooms;