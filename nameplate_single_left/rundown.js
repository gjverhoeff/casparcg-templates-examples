"use strict;"

// Data
function insertData(data){
  $('#name').text(data['name']);
  $('#twitter').text(data['twitter']);
}

// Animate text and visual elements
function ContentLayer(action){
  if(action === 'play') {
    $("#content-container").delay(1000).fadeTo(650, '1.0');
  }
  if(action === 'stop') {
    $("#content-container").delay(250).fadeTo(250, '0.0');
  }
}