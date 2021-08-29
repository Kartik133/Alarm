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

  h = hour();
  m = minute();
  s = second();
}

function draw() {
  background(0);

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
    fill(255);
    text("alarm",200,200);
  }
}

