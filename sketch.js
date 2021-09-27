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
  createCanvas(windowWidth,windowHeight);
  
  hin = createInput("");
  min = createInput("");
  sin = createInput("");
  button = createButton("Set Alarm");
  stops = createButton("Stop");
  hin.position(width/2-100,height/2-100);
  min.position(width/2-100,height/2);
  sin.position(width/2-100,height/2+100);
  stops.position(width/2,height/2+50);
  button.position(width/2-100,height/2+150);
  hin.style("height","30px");
  min.style("height","30px");
  sin.style("height","30px");
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
      textSize(50);
      text("NOTE:- ENTER HOUR IN 24 HOUR FORMAT.",width/2,height/2-350);
    pop();

    push();
     textSize(50);
     text("Hour",width/2-100,height/2-130);
     text("Minute",width/2-100,height/2-80);
     text("Second",width/2-100,height/2-30);
    pop();
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
    text("Your Alarm Has Been Set",width/2,height/2);
  }

  if(int(hv)===h && int(mv)===m && int(sv)===s && gameState==="on") {
    gameState="end";
  }

  if(gameState==="end") {
    fill(255);
    textFont(a);
    textSize(20);
    textAlign(CENTER);
    text("Alarm",width/2,height/2);
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

