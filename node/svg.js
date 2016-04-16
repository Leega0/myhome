function updateTime() {
	var now = new Date();
	var seconds = now.getSeconds();
	var min = (now.getMinutes()%60)+seconds/60;
	var hour = (now.getHours()%12)+min/60;
	

	var secondangle = seconds*6;
	var minangle = min*6;
	var hourangle = hour*30;

	var seconds = document.getElementById('minsecond')
	var minhand = document.getElementById('minutehand');
	var hourhand = document.getElementById('hourhand');

	seconds.setAttribute("transform","rotate("+secondangle+",50,50)");
	minhand.setAttribute("transform","rotate("+minangle+",50,50)");
	hourhand.setAttribute("transform","rotate("+hourangle+",50,50)");
	

	setTimeout(updateTime,1000);
}