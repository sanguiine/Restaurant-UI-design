function Slajd(n) {
	if(n==1) {
		document.getElementById("slajdy").style.backgroundImage = "url('images/naglowek2.jpg')"; 
	}
	
	if(n==2) {
		document.getElementById("slajdy").style.backgroundImage = "url('images/naglowek.jpg')"; 
	}
	
	if(n==3) {
		document.getElementById("slajdy").style.backgroundImage = "url('images/naglowek3.jpg')"; 
	}
	
	var dots = document.getElementsByClassName("kropki");
	
	for (i=0; i<dots.length; i++) {
      		dots[i].className = dots[i].className.replace(" active", "");
	}
	
	dots[n-1].className += " active";
}