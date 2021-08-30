var h,m,s;
var hin,min,sin,button;
var hv,mv,sv;
var sound;
var gameState = "start";

function preload() {
  sound = loadSound("Radar.mp3");
}

function setup() {
  createCanvas(400,400);
  
  hin = createInput("Hour");
  min = createInput("Minute");
  sin = createInput("Second");
  button = createButton("Alarm");
  hin.position(100,150);
  min.position(100,200);
  sin.position(100,250);
  button.position(150,300);
}

function draw() {
  background(0);

  h = hour();
  m = minute();
  s = second();

  button.mousePressed(()=>{
    hin.hide();
    min.hide();
    sin.hide();
    button.hide();
    hv = hin.value();
    mv = min.value();
    sv = sin.value();
    gameState = "on";
  });

  if(int(hv)===h && int(mv)===m && int(sv)===s && gameState==="on") {
    gameState="end";
  }

  if(gameState==="end") {
    fill(255);
    text("Alarm",200,200);
    sound.play();
  }
}

