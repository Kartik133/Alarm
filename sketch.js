var h,m,s;
var hin,min,sin,button,stop;
var hv,mv,sv;
var sound;
var gameState = "start";
var a

function preload() {
  sound = loadSound("Radar.mp3");
  a = loadFont("h.ttf");
}

function setup() {
  createCanvas(400,400);
  
  hin = createInput("Hour");
  min = createInput("Minute");
  sin = createInput("Second");
  button = createButton("Set Alarm");
  stop = createButton("Stop");
  hin.position(100,150);
  min.position(100,200);
  sin.position(100,250);
  stop.position(150,300);
  button.position(140,300);

  stop.hide();
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

  stop.mousePressed(()=>{
    stop.hide();
    sound.stop();
  });

  if(gameState==="on") {
    fill(255);
    textFont(a);
    text("Your Alarm Has Been Set");
  }

  if(int(hv)===h && int(mv)===m && int(sv)===s && gameState==="on") {
    gameState="end";
  }

  if(gameState==="end") {
    fill(255);
    text("Alarm",200,200);
    sound.play();
    stop.show();
  }
}

