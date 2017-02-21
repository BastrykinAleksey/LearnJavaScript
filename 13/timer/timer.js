function displayTime(){
	var elt = document.getElementById("timer");
	var time = new Date();
	elt.innerHtml = time.toLocaleTimeString();
	setTimeout(dispalyTime,1000);

}