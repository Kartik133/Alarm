var h,m,s;
var hin,min,sin,button;
var hv,mv,sv;
var gameState = "start";

function setup() {
  createCanvas(400,400);
  
  hin = createInput("hour");
  min = createInput("minute");
  sin = createInput("second");
  button = createButton("alarm");
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

  if(gameState==="end) {
    fill(255);
    text("Alarm",200,200);
  }
}

