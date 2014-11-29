"use strict";
window.onload = function(){
    var MessageBoard = {
    counter:0,
       messages: [],
        
        init: function(value){
    
            var mess = new Message(value, new Date());
            MessageBoard.messages.push(mess);
             document.getElementById('texta').value = "";
            console.log(MessageBoard.messages[0]);
            console.log(MessageBoard.messages.length);
             document.getElementById('texta').value = "";
   
		},
		
        clearText: function(){
           MessageBoard.messages = [];
           document.getElementById('messcount').innerHTML = 'Antal meddelande '+ (MessageBoard.messages.length);
           document.getElementById('texta').value = "";
        },
		changeText: function(){
     	document.getElementById('messcount').innerHTML = 'Antal meddelande '+ (MessageBoard.messages.length+1);
     	
      	},
        
        renderMessages: function(){
            document.getElementById('texta').innerHTML = "";

            for(var i = 0; 1 < MessageBoard.messages.length; ++i){
                MessageBoard.renderMessages(i);
            }
        },
        
        renderMessage: function(messageID){
            var text = document.createElement("p");
            var mesagearea = document.createElement("div");
            var messArea = document.getElementById("texta")
            text.innerHTML = MessageBoard.messages[messID -1].mess.toString().getHTMLText();
            messArea.appendChild(mesagearea);
            mesagearea.appendChild(text);
        }
    }
      
    var submit = document.getElementById("button");
    submit.addEventListener("click", MessageBoard.changeText);
	submit.addEventListener("click", MessageBoard.init);
    submit.addEventListener("click", MessageBoard.renderMessage);
    var clear = document.getElementById("cbutton");
    clear.addEventListener("click",MessageBoard.clearText);
     
    
  
      



	
	
	
	
}