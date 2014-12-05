"use strict";
var MessageBoard = {
    counter:0,
    messages: [],
    
    sender: function(value){
        if(value == ""){
            return;
        }
        var mess = new Message(value, new Date());
        MessageBoard.messages.push(mess);
        document.getElementById('texta').value = "";
        MessageBoard.renderMessage(MessageBoard.messages.length -1);
        document.getElementById('messcount').innerHTML = 'Antal meddelande '+ (MessageBoard.messages.length);
    },
    
    clearText: function(){

        var r = confirm("Säker? Tänk på att detta raderar ALLA meddelanden");
        if (r == true) {
            MessageBoard.messages = [];
           document.getElementById('messcount').innerHTML = 'Antal meddelande '+ (MessageBoard.messages.length);
           document.getElementById('texta').value = "";
           document.getElementById("messageholder").innerHTML = "";
         
        } 
       
    },
    
    
    changeText: function(){
        
    },
    
    renderMessages: function(){
        document.getElementById('messageholder').innerHTML = "";

        for(var i = 0; i < MessageBoard.messages.length; ++i){
            MessageBoard.renderMessage(i);
        }

       
    },
    
    renderMessage: function(messageID){
        var text = document.createElement("p");
        var time = document.createElement("p");
        text.innerHTML = MessageBoard.messages[messageID].getHTMLText();
        time.innerHTML = MessageBoard.messages[messageID].getDateText();
        var mesagearea = document.createElement("div");
        var messArea = document.getElementById("messageholder");
        var cb = document.createElement("a");
        var cimg = document.createElement("img");
        mesagearea.className = "meddelande";
        cimg.className = "closeb";
        time.className = "time";
        cb.className = "clink";
        cb.setAttribute("href","#");
        cimg.setAttribute("src","closeb.png");
        cb.appendChild(cimg);
        var tb = document.createElement("a");
        var timg = document.createElement("img");
        timg.className = "timeb";
        tb.className = "clink";
        tb.setAttribute("href","#");
        timg.setAttribute("src","time.png");
        tb.appendChild(timg);
        mesagearea.appendChild(tb);
        mesagearea.appendChild(cb);
        messArea.appendChild(mesagearea);
        mesagearea.appendChild(text);
        mesagearea.appendChild(time);
        cb.addEventListener('click', function(){
            MessageBoard.removeMessage(messageID);
            document.getElementById('messcount').innerHTML = 'Antal meddelande '+ (MessageBoard.messages.length);
        });
        tb.addEventListener('click', function(){
           alert(MessageBoard.messages[messageID].getDate());
        });
        

        


        //MessageBoard.btn(messageID);
    },
    removeMessage: function(messageID){
            var r = confirm("Säker? Tänk om de står något viktigt!");
                if (r == true) {
                 MessageBoard.messages.splice(messageID, 1);
                 MessageBoard.renderMessages();
                } 
            

            //document.getElementById('messcount').innerHTML = 'Antal meddelande '+ (MessageBoard.messages.length);
            
    }
   
    
}

window.onload = function(){
    var submit = document.getElementById("button");
    var remove = document.getElementsByClassName("closeb");
        // submit.addEventListener("click", MessageBoard.changeText);
    // submit.addEventListener("click", MessageBoard.sender);
    var messArea = document.getElementById("texta");
    messArea.addEventListener("keypress", function(e){
      
        if (e.keyCode == 13 && !e.shiftKey){
            e.preventDefault();
             var texta = document.getElementById('texta');
            var text = texta.value;
            MessageBoard.sender(text); 
        }
    });
    submit.addEventListener("click", function(e){
        e.preventDefault();
        var texta = document.getElementById('texta');
        var text = texta.value;
        MessageBoard.sender(text); 
        //document.getElementById('messcount').innerHTML = 'Antal meddelande '+ (MessageBoard.messages.length);

    });
    
    

};

var clear = document.getElementById("cbutton");
clear.addEventListener("click",MessageBoard.clearText);
   
    
//}
