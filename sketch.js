var h,m,s;
var hin,min,sin,button,stops;
var hv,mv,sv;
var sound;
var gameState = "start";
var a;
var count = 0,ccc = 0;;

function preload() {
  sound = loadSound("Radar.mp3");
  a = loadFont("h.TTF");
}

function TimeIt() {
 if(gameState==="on") {
   ccc++;
   h+=floor(ccc/3600); 
   m+=floor(ccc/60);
   s+=ccc;
 }
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  setInterval(1000,TimeIt);
  
  hin = createInput("");
  min = createInput("");
  sin = createInput("");
  button = createButton("Set Alarm");
  stops = createButton("Stop");
  hin.position(width/2-100,height/2-100);
  min.position(width/2-100,height/2);
  sin.position(width/2-100,height/2+100);
  stops.position(width/2-50,height/2+100);
  button.position(width/2-50,height/2+200);
  hin.style("height","30px");
  min.style("height","30px");
  sin.style("height","30px");
  button.style("width","80px");
  button.style("height","60px");
  stops.style("width","50px");
  stops.style("height","40px");
}

function draw() {
  background(0);
  
  console.log(h+";"+m+";"+s+";"+ccc);

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
     text("Hour",width/2-100,height/2-110);
     text("Minute",width/2-100,height/2-10);
     text("Second",width/2-100,height/2+90);
    pop();
  }

  button.mousePressed(()=>{
    h = hour();
    m = minute();
    s = second();
    
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
    textSize(50);
    textAlign(CENTER);
    text("Your Alarm Has Been Set",width/2,height/2);
  }

  if(int(hv)===h && int(mv)===m && int(sv)===s && gameState==="on") {
    gameState="end";
  }

  if(gameState==="end") {
    fill(255);
    textFont(a);
    textSize(50);
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

