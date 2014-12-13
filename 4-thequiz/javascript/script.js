
"use strict"; //objekt.metod/egenskap(argument)

var Quiz = {
    nrOfTriesArray: [],
    quizObj: undefined,
    xhr: new XMLHttpRequest(), // skapar requestObjekt
    countTries: undefined,
    counter: 0, // antal klick
    init: function(e) { 
        
        Quiz.question('http://vhost3.lnu.se:20080/question/1');	
        	
        		if(!e){ e = window.event; }

			if(e.keyCode == 13 && !e.shiftKey){
				e.preventDefault();
				Quiz.messageText();			
		}
    },
        
        
                question: function(url) { 
            var pTag = document.getElementById("question");
               Quiz.countTries = document.getElementById("countTries");
            
            Quiz.xhr.onreadystatechange = function(){
                if(Quiz.xhr.readyState === 4 && Quiz.xhr.status === 200){
                   Quiz.quizObj = JSON.parse(Quiz.xhr.responseText);
                    console.log(Quiz.quizObj.question);
                    pTag.innerHTML = Quiz.quizObj.question; // skriver ut frågan
               
                    Quiz.click();
                }
            };
            // nästa gång den körs vill jag att den ska köra url
            Quiz.xhr.open('GET', url, true); // måste köra en open för att konfiguera. Alltså Open("GET", "vad vill vi anropa?")
            Quiz.xhr.send(null);
        },
        
        answer: function(url){
          var messbox = document.getElementById("messageText");
        
            Quiz.xhr.open('POST', url, true);
              Quiz.xhr.setRequestHeader('Content-Type', 'application/json');
              Quiz.xhr.send(JSON.stringify(quizanswer));
        },
        
         click: function(){  
            document.getElementById("button").onclick = function(e){ // hämtar ut knappen och kopplar en eventhanterare
              Quiz.counter++;
              
            Quiz.answer(Quiz.quizObj.nextURL);
        };
        },
             
            
        }
       
    

//När sidan har laddads in så anropas init.
window.onload = Quiz.init;






