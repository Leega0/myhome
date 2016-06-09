(function () {
	if (!window.addEventListener) return;
	var canvas = document.getElementById('starCanvas');
	var context = canvas.getContext("2d");

	var stars = {},
	particleIndex =0,
	settings = {
		r:1400,
		height:260,
		density:300,
		maxLife:100,
		groundLevel:canvas.height,
		leftWall:0,
		rigthWall:canvas.width,
		alpha:0.0,
		maxAlpha:1
	};
	var getMinRandom = function(){
		var rand = Math.random();
		var step = Math.ceil(1 / (1-rand) );
		var arr =[];
		for (var i = 0; i < step; i++) {
			arr.push(Math.random());
		}
		return Math.min.apply(null,arr);
		};
	function resizeCanvas(){
		canvas.width=1920;
		canvas.height = 800;
		settings.rigthWall = canvas.width;
		canvas.groundLevel = canvas.height;
		settings.height = 260 + (canvas.height - 800) /2;
		redraw();
	}
	resizeCanvas();

	window.addEventListener('reszie',resizeCanvas);

	function redraw(){
		context.clearRect(0,0,canvas.width,canvas.height);
		context.fillStyle = "rgba(0,0,0,0)";
		context.fillRect(0,0,canvas.width,canvas.height);
	}

	function Star(){
		var a = canvas.width/2, b = canvas.height - settings.height + settings.r;
		this.x = Math.floor(Math.random() * canvas.width);
		this.offsety = getMinRandom()*(canvas.height - settings.height);
		this.y = b - Math.sqrt(settings.r*settings.r -(this.x - a)*(this.x - a)) - this.offsety;
		this.vx = Math.random()*0.05 + 0.25;

		this.particleSize = 0.5+(Math.random()+0.1/4);
		particleIndex++;
		stars[particleIndex] = this;
		this.alpha = 0.0;
		this.maxAlpha = 0.2 + (this.y/canvas.height)*Math.random()*0.8;
		this.alphaAction = 1;

	}
	Star.prototype.draw  = function(){
		this.x += this.vx;
		this.y = canvas.height - settings.height + settings.r - Math.sqrt(settings.r * settings.r - (this.x - canvas.width/2) * (this.x - canvas.width/2)) - this.offsety;
		if (this.alphaAction == 1) {
            if (this.alpha < this.maxAlpha ) {
                this.alpha += 0.005;
            } else {
                this.alphaAction = -1;
            }
        } else {
            if (this.alpha > 0.2 ) {
                this.alpha -= 0.002;
            } else {
                this.alphaAction = 1;
            }
        }

        if ( this.x + (this.particleSize*2) >= settings.rightWall ) {
            this.x = this.x - settings.rightWall;
        }

        context.beginPath();
        context.fillStyle="rgba(255,255,255," + this.alpha.toString() + ")";
        context.arc(this.x, this.y, this.particleSize, 0, Math.PI*2, true); 
        context.closePath();
        context.fill();
	}
	function render(){
		redraw();
		var length = 400;
		if (!history.pushState) {
			length = 200;
		}else if (document.msHidden!=undefined) {
			length =300;
		}
		if ( Object.keys(stars).length > length ) {
            settings.density = 0;
        }

        for ( var i = 0; i < settings.density; i++ ) {
            if ( Math.random() > 0.97 ) {
                new Star();
            }
        }
        for ( var i in stars ) {
            stars[i].draw();
        }

        requestAnimationFrame(render);
	}
	if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(fn) {
            setTimeout(fn, 17);
        };
    }
    render();
})();



