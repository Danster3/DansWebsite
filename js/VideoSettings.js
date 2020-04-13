var myVideo = document.getElementById("video1"); 
var myVideo = document.getElementById("video2"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function makeBig() { 
    myVideo.width = 560; 
} 

function makeSmall() { 
    myVideo.width = 320; 
} 

function makeNormal() { 
    myVideo.width = 420; 
} 

let page = document.documentElement;

page.style.setProperty('--size--','auto');
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var element = document.getElementById('text');
if (isMobile) {
    // element.innerHTML = "You are using Mobile";
    page.style.setProperty('--size--','300px');
} else {
  // element.innerHTML = "You are using Desktop";
  page.style.setProperty('--size--','auto');
}

