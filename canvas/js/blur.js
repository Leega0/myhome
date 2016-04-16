var canvasWidth = window.innerWidth,
canvasHeight=window.innerHeight;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

canvas.width = canvasWidth;
canvas.height = canvasHeight;

var image = new Image();
var radius = 50;

var clippingRegion = {x:400,y:200,r:50};
var leftMargin=0,topMargin=0;


image.src = "img/canvas.jpg";

image.onload = function () {
	$("#blur-div").css("width",canvasWidth+"px");
	$("#blur-div").css("height",canvasHeight+"px");
	$("#blur-image").css("width",image.width+"px");
	$("#blur-image").css("height",image.height+"px");
	leftMargin = (image.width-canvas.width)/2;
	topMargin = (image.height-canvas.height)/2;
	console.log(leftMargin);

	$("#blur-image").css("left",String(-leftMargin)+"px");
	$("#blur-image").css("top",String(-topMargin)+"px");
	 initCanvas(); 
}

function initCanvas () {

	var theLeft = leftMargin<0?-leftMargin:0;
	var theTop = topMargin<0?-toptMargin:0;
	clippingRegion = {x:Math.random()*(canvas.width-2*radius-2*theLeft)+radius+theLeft,
		y:Math.random()*(canvas.height-2*radius-2*theTop)+radius+theTop,r:50};
	 draw(image,clippingRegion); 
}

function setClippingRegion (clippingRegion) {
	 // 设置剪辑区域
	 context.beginPath();
	 context.arc(clippingRegion.x,clippingRegion.y,clippingRegion.r,0,Math.PI*2,false);
	 context.clip();
}

function draw (image,clippingRegion) {
	 context.clearRect(0,0,canvas.width,canvas.height);

	 context.save();
	 setClippingRegion(clippingRegion);
	 context.drawImage(image,leftMargin,topMargin,canvas.width,canvas.height,0,0,
	 	canvas.width,canvas.height) ;
	 context.restore();
}

function reset () {
	 initCanvas ();
}

function show () {	 
	 var theAnimation = setInterval(function () {
	 	 clippingRegion.r += 70;
	 	 if(clippingRegion.r>2*Math.max(canvas.width,canvas.height)){
	 	 	clearInterval(theAnimation);
	 	 }
	 	 draw (image,clippingRegion);
	 }, 30)

}




