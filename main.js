/* Global variables */
var button1; 
var audio = [];  // audios played when time's up (Audio array)
var musicNumber = 0;

/* p5 functions */
function setup(){
    button1 = document.createElement("button");
    document.body.appendChild(button1);
    button1.innerHTML = "Duck";
    button1.addEventListener("click", button1_Clicked);
    
    audio[0] = new Audio("0.mp3");

}

function draw(){
    var isPlaying = false;
 
            isPlaying = audio[musicNumber].currentTime > 0 && !audio[musicNumber].paused && !audio[musicNumber].ended && audio[musicNumber].readyState > 2;
            
            if(isPlaying){
                console.log(musicNumber + " playing");
            }else{
                 if(audio[musicNumber].paused){
                console.log(musicNumber + " audio paused");
              } if(audio[musicNumber].currentTime <= 0){
                console.log(musicNumber + " audio currentTime not positive: " + audio[musicNumber].currentTime);
              } if(audio[musicNumber].ended){
                console.log(musicNumber + " audio ended");
              } if(audio[musicNumber].readyState <= 2){
                console.log(musicNumber + " audio not ready: " + audio[musicNumber].readyState);
              }
            }
}

/* User-defined functions */
function button1_Clicked(){
    audio[0].play();
}