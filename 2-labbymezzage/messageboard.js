"use strict";
var MessageBoard = {
    counter:0,
    messages: [],
    
    sender: function(value){

        var mess = new Message(value, new Date());
        console.log(mess)
        MessageBoard.messages.push(mess);
        document.getElementById('texta').value = "";
        console.log(MessageBoard.messages[0]);
        console.log(MessageBoard.messages.length);
        document.getElementById('texta').value = "";
        MessageBoard.renderMessage(MessageBoard.messages.length)

    },
    
    clearText: function(){
       MessageBoard.messages = [];
       document.getElementById('messcount').innerHTML = 'Antal meddelande '+ (MessageBoard.messages.length);
       document.getElementById('texta').value = "";
       document.getElementById("messageholder").innerHTML = "";
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
        var cb = document.createElement("a");
        cb.className = "closeb";
        mesagearea.className = "meddelande";
        var messArea = document.getElementById("messageholder");
        text.innerHTML = MessageBoard.messages[messageID -1].getHTMLText();
        mesagearea.appendChild(cb);
        messArea.appendChild(mesagearea);
        mesagearea.appendChild(text);
    }
}

window.onload = function(){
    var submit = document.getElementById("button");
    // submit.addEventListener("click", MessageBoard.changeText);
	// submit.addEventListener("click", MessageBoard.sender);

    submit.addEventListener("click", function(){
        var texta = document.getElementById('texta');
        var text = texta.value;
        console.log(texta);
        console.log(text);
        MessageBoard.sender(text); 
        document.getElementById('messcount').innerHTML = 'Antal meddelande '+ (MessageBoard.messages.length);

    });


    var clear = document.getElementById("cbutton");
    clear.addEventListener("click",MessageBoard.clearText);
   
    
}