var ToolTip=function(e,t){this.target=e,this.text=t,this.delayTimeout=null,this.delaytime=1500,this.element=document.createElement("div"),this.element.style.display="none",this.element.style.position="absolute",this.element.className="tooltip",document.getElementsByTagName("body")[0].appendChild(this.element),this.element.innerHTML=this.text;var i=this;this.target.addEventListener("mouseover",function(e){i.showDelay(e)}),this.target.addEventListener("mouseout",function(e){i.hide()})};ToolTip.prototype={showDelay:function(e){if(null==this.delayTimeout){var t=this,i=e.clientX,l=e.clientY;this.delayTimeout=setTimeout(function(){t.show(i,l)},this.delaytime)}},show:function(e,t){clearTimeout(this.delayTimeout),this.delayTimeout=null,this.element.style.left=e+"px",this.element.style.top=t+20+"px",this.element.style.display="block"},hide:function(){clearTimeout(this.delayTimeout),this.delayTimeout=null,this.element.style.display="none"}};var tt=new ToolTip(linkElement,"hello");