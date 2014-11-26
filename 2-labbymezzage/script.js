
	window.onload=function(){
	var mess = new Message("Testmeddelande", new Date());
	alert(mess);
	
	mess.setText("En annan text");
	alert(mess);
	}
