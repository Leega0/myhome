function updateTime(){var t=new Date,e=t.getSeconds(),n=t.getMinutes()%60+e/60,o=t.getHours()%12+n/60,r=6*e,m=6*n,u=30*o,e=document.getElementById("minsecond"),a=document.getElementById("minutehand"),d=document.getElementById("hourhand");e.setAttribute("transform","rotate("+r+",50,50)"),a.setAttribute("transform","rotate("+m+",50,50)"),d.setAttribute("transform","rotate("+u+",50,50)"),setTimeout(updateTime,1e3)}