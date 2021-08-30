var h,m,s;
var hin,min,sin,button,stops;
var hv,mv,sv;
var sound;
var gameState = "start";
var a;
var count = 0;

function preload() {
  sound = loadSound("Radar.mp3");
  a = loadFont("h.TTF");
}

function setup() {
  createCanvas(400,400);
  
  hin = createInput("");
  min = createInput("");
  sin = createInput("");
  button = createButton("Set Alarm");
  stops = createButton("Stop");
  hin.position(100,150);
  min.position(100,200);
  sin.position(100,250);
  stops.position(180,230);
  button.position(140,300);
}

function draw() {
  background(0);

  h = hour();
  m = minute();
  s = second();

  if(gameState==="start") {
    stops.hide();
    hin.show();
    min.show();
    sin.show();
    button.show();
    fill(255);
    textSize(20);
    textFont(a);

    push();
      textAlign(CENTER);
      text("NOTE:- ENTER HOUR IN 24 HOUR FORMAT.",200,70);
    pop();

    text("Hour",100,145);
    text("Minute",100,195);
    text("Second",100,245);
  }

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

  stops.mousePressed(()=>{
    stops.hide();
    sound.stop();
    count = 0;
    gameState = "start";
  });

  if(gameState==="on") {
    fill(255);
    textFont(a);
    textSize(30);
    textAlign(CENTER);
    text("Your Alarm Has Been Set",200,200);
  }

  if(int(hv)===h && int(mv)===m && int(sv)===s && gameState==="on") {
    gameState="end";
  }

  if(gameState==="end") {
    fill(255);
    textFont(a);
    textSize(20);
    textAlign(CENTER);
    text("Alarm",200,200);
    sound.play();
    stops.show();
    count++;
    if(count===250) {
      stops.hide();
      sound.stop();
      count = 0;
      gameState = "start";
    }
  }
}

