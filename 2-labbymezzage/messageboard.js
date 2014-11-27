"use strict";
window.onload = function(){
    var MessageBoard = {
    counter:0,
       messages: [],
        
        init: function(value){
    
            var mess = new Message(value, new Date());
            MessageBoard.messages.push(mess);
            console.log(MessageBoard.messages[0]);
            console.log(MessageBoard.messages.length);
             
   
		},
		
		changeText: function(){
     	document.getElementById('messcount').innerHTML = 'HOJ meddelande';//+ MessageBoard.messages.length;
     	
      	}
    }
      
    var link = document.getElementById("button");
	link.addEventListener("click",MessageBoard.init, MessageBoard.changeText);

	
	
	
	
}