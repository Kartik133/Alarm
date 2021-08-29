var h,m,s;
var hin,min,sin,button;
var hv,mv,sv;

funtion setup() {
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
  });

  if(int(hin)===h && int(min)===m && int(sin)===s) {
    text("alarm",200,200);
  }
}

