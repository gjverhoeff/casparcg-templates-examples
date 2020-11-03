"use strict;"


function ContentLayer(action){
  if(action === 'play') {
    $("#content-container").delay(350).fadeTo(350, '1.0');
  }
  if(action === 'stop') {
    $("#content-container").fadeTo(250, '0.0');
  }
}

function insertData(data){


   

    if(data['localtime'] == 'true'){
      $("#time").text(localTime());
      setInterval(function(){
        $("#time").text(localTime());
      },3000);
    } 

    

    


}

// setInterval(function(){
  // $("#time").text(localTime());
// },3000);

function localTime(){
  // if(globalCheck == 'false'){
    var localTime;
    var d = new Date();
    var min = d.getMinutes();
    var hour = d.getHours();
    if(min<10) {
        min='0'+min
    }
    if(hour<10) {
        hour='0'+hour
    }
    localTime = hour + ':' + min;
    return localTime;
  // }
}
