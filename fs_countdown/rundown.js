"use strict;"
var globalCheck;
// Data
function insertData(data){
  
  $('#text').text(data['text']);

  var userMilliseconds = (data['countdown'] * 60000),
      dateMilliseconds = new Date().getTime(),
      milliseconds = dateMilliseconds + userMilliseconds,
      yyyy = new Date(milliseconds).getFullYear(),
      mm = new Date(milliseconds).getMonth()+1,
      dd = new Date(milliseconds).getDate(),
      hr = new Date(milliseconds).getHours(),
      min = new Date(milliseconds).getMinutes(),
      sec = new Date(milliseconds).getSeconds();

  if(dd<10) {
      dd='0'+dd
  }

  if(mm<10) {
      mm='0'+mm
  }

  if(sec<10) {
      sec='0'+sec
  }

  var countdown = yyyy +'-' + mm +'-' + dd +' ' + hr + ':' + min + ':' + sec ;

  if(data['countdown'] > 0){
    $("#countdown").countdown(countdown, function(event){
      $(this).text(event.strftime('%M:%S'));
    });
    $("#countdown").css({"display": "initial"});
  } else {
    $("#countdown").css({"display": "none"});
  }


}
// Animate text and visual elements
function ContentLayer(action){
  if(action === 'play') {
    $("#content-container").delay(200).fadeTo(250, '1.0');
  }
  if(action === 'stop') {
    $("#content-container").delay(200).fadeTo(250, '0.0');
  }
}

function localTime(){
  if(globalCheck == 'false'){
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
  }
}