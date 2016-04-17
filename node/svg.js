var ToolTip = function(targetElement,text){
	this.target = targetElement;
	this.text = text;
	this.delayTimeout = null;
	this.delaytime = 1500;
	// 开始创建dom
	this.element = document.createElement('div');
	this.element.style.display = 'none';
	this.element.style.position = 'absolute';
	this.element.className = 'tooltip';
	document.getElementsByTagName('body')[0].appendChild(this.element);
	this.element.innerHTML = this.text;

	// 绑定事件
	var that = this;
	this.target.addEventListener('mouseover',function(e){
		that.showDelay(e);
	});
	this.target.addEventListener('mouseout',function(e){
		that.hide();
	});
};
ToolTip.prototype = {
	showDelay:function(e){
		if (this.delayTimeout==null) {
			var that =this;
			var x = e.clientX;
			var y = e.clientY;
			this.delayTimeout = setTimeout(function(){
				that.show(x,y);
			},this.delaytime);
		}
	},
	show:function(x,y){
		clearTimeout(this.delayTimeout);
		this.delayTimeout = null;
		this.element.style.left = x+'px';
		this.element.style.top = (y+20)+'px';
		this.element.style.display = 'block';
	},
	hide:function(){
		clearTimeout(this.delayTimeout);
		this.delayTimeout = null;
		this.element.style.display = 'none';
	}
};
var tt = new ToolTip(linkElement,'hello')