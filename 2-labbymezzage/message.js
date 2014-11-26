function Message(message, date){

	this.getText = function(){
			return message;
	}
	this.setText = function(_text){
		message = _text;
	}
	this.getDate = function(){
		return date
	}
	this.setDate = function(_date){
		var day = _date.getDate();
	    var month = _date.getMonth() + 1;
	    var year = _date.getFullYear();
	    date = _date.getFullYear();
	    //(day + "/" + month + "/" + year); 
	    
	    
	}

	Message.prototype.toString = function(){
		return this.getText()+"("+this.getDate()+")";
	}

	Message.prototype.getHTMLText = function(){}
}