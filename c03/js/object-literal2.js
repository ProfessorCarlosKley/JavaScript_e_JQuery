// Set up the object
var hotel = {
  name : 'CARVALHO',
  rooms : 120,
  booked : 77,
  checkAvailability : function() {//Uma expressão de função.
    return this.rooms - this.booked; // Need "this" because inside function
  }
    //Nos objetos, as variáveis, ou seja, as chaves, são atribuidas com o uso de :.
};

// Update the HTML
var elName = document.getElementById('hotelName'); // Get element
elName.textContent = hotel.name;                   // Update HTML with property of the object

var elRooms = document.getElementById('rooms');    // Get element
elRooms.textContent = hotel.checkAvailability();   // Update HTML with property of the object

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on lines 13 and 16, but note the security issues on p228-231
*/