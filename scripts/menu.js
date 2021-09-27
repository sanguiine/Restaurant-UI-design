var open=true;

function openMenu(){
	if(open){
		document.getElementById('rozwijanemenu').style.display="block";
		open=false;
	}
	else{
		closeMenu();
	}
}
		
function closeMenu(){
	document.getElementById('rozwijanemenu').style.display="none";
	open=true;
}