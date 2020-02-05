"use strict;"
window.requestAnimationFrame(step);
function step(e){
  return e;
}

var width = document.getElementById("container").offsetWidth,
height = document.getElementById("container").offsetHeight,
fps = 60,
interval = 1000/fps,
now,
then = Date.now(),
delta,
currentvideo = 'video-start',
videostate = 'start';

console.log('Template:',width, 'x', height, '@', fps, 'fps')

if(dev){
  document.getElementById('container').style.backgroundImage = "url('img/example.png')";
  $('body').css('opacity','1.0')
  document.getElementById('graphic-container').style.opacity = "1.0";
  document.getElementById("content-container").style.opacity = '1.0';
}

if(gotVideo){
  var GRAPHICS_CONTAINER = '<video id="video-start"><source src="vid/start_'+ height +'.webm" type=video/webm></video>';
  
  if(!fadeOut) {
    GRAPHICS_CONTAINER += '<video id="video-stop"><source src="vid/stop_'+ height +'.webm" type=video/webm></video>';
  }
  if(gotWipe) {
    GRAPHICS_CONTAINER += '<video id="video-wipe"><source src="vid/wipe_'+ height +'.webm" type=video/webm></video>';
  }
  if(gotLoop) {
    GRAPHICS_CONTAINER += '<video id="video-loop" loop><source src="vid/loop_'+ height +'.webm" type=video/webm></video>';
  }

  document.getElementById('graphic-container').innerHTML = GRAPHICS_CONTAINER

  var videomain = document.getElementById('video-start');
  var videostart = document.getElementById('video-start');
  if(!fadeOut) var videostop = document.getElementById('video-stop');
  if(gotWipe) var videowipe = document.getElementById('video-wipe');
  if(gotLoop) var videoloop = document.getElementById('video-loop');
    
     
  // document.getElementById('graphic-container').innerHTML =
  // '<video id="video-start"><source src="vid/start_'+ height +'.webm" type=video/webm></video>' +
  // '<video id="video-loop" loop><source src="vid/loop_'+ height +'.webm" type=video/webm></video>' +
  // '<video id="video-wipe"><source src="vid/wipe_'+ height +'.webm" type=video/webm></video>' +
  // '<video id="video-stop"><source src="vid/stop_'+ height +'.webm" type=video/webm></video>' ;

  // var  videomain = document.getElementById('video-start'),
  //     videostart = document.getElementById('video-start'),
  //     videoloop = document.getElementById('video-loop'),
  //     videowipe = document.getElementById('video-wipe'),
  //     videostop = document.getElementById('video-stop');
  
}

if(gotImage){
  document.getElementById('graphic-container').innerHTML =
  '<img id="graphic-container" width="'+ width +'"height="'+ height +'" src="img/backplate_'+ height +'.png">';
}

function play(){
  if(fadeIn) $('body').fadeTo(500, '1.0');
  if(gotContent) ContentLayer('play');
  if(gotVideo) VideoLayer('play');
}
function wipe(){
  if(gotVideo && gotWipe) VideoLayer('wipe');
}
function stop(){
  if(fadeOut) $('body').fadeTo(500, '0.0');
  if(gotContent) ContentLayer('stop');
  if(gotVideo) VideoLayer('stop');
}

if(gotLoop){
  videostart.onended = function(){
    if(gotLoop){
      videomain = videoloop;
      videoloop.play();
      currentvideo = 'video-loop';
      $("#video-loop").css('opacity', 1);
      $("#video-start").delay(2000).css('opacity', 0);
    }
  };
}

function VideoLayer(action){
  if(action === 'play'){
    console.log('play')
    videomain = videostart;
    videostart.play();
    currentvideo = 'video-start';
    $("#video-start").animate({opacity: 1.0}, 500, 'easeOutQuart');
  }
  if(action === 'wipe'){
    console.log('wipe')
    videomain = videowipe;
    videowipe.play();
    currentvideo = 'video-wipe';
    $("#video-wipe").css('opacity', 1);
    $("#video-start").animate({opacity: 0.0}, 500, 'easeOutQuart');
  }
  if(action === 'stop' && !fadeOut){
    console.log('stop')
    videomain = videostop;
    videostop.play();
    // videomain.play();
    currentvideo = 'video-stop';
    $("#video-stop").css('opacity', 1);
    $("#video-start").animate({opacity: 0.0}, 500, 'easeOutQuart');
    $("#video-loop").animate({opacity: 0.0}, 500, 'easeOutQuart');
    if(gotWipe) $("#video-wipe").animate({opacity: 0.0}, 500, 'easeOutQuart');
  }
}
