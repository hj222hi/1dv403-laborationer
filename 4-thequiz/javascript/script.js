"use strict"; //objekt.metod/egenskap(argument)

var Quiz = {
    nrOfTriesArray: [],
    quizObj: undefined,
    next: undefined,
    xhr: new XMLHttpRequest(), // skapar requestObjekt
    countTries: undefined,
    counter: 0, // antal klick
    res: document.getElementById("response"),
   
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
                if(Quiz.xhr.readyState === 4 && Quiz.xhr.status !== 400){
                   Quiz.quizObj = JSON.parse(Quiz.xhr.responseText);
                   
                    console.log(Quiz.quizObj.question);
                    pTag.innerHTML = Quiz.quizObj.question; // skriver ut frågan
                   //Quiz.res.innerHTML = Quiz.quizObj.message;
                   Quiz.next = Quiz.quizObj.nextURL;
                    Quiz.click();
                    
                }
            };
            // nästa gång den körs vill jag att den ska köra url
            Quiz.xhr.open('GET', url, true); // måste köra en open för att konfiguera. Alltså Open("GET", "vad vill vi anropa?")
            Quiz.xhr.send(null);
        },
        
        answer: function(url){
          var messbox = document.getElementById("messageText");
        
              var quizanswer = {
                 "answer": messbox.value
              };
              Quiz.xhr.onreadystatechange = function(){
                if(Quiz.xhr.readyState === 4 && Quiz.xhr.status !== 400){
             
                      
                      Quiz.quizObj = JSON.parse(Quiz.xhr.responseText);
                      Quiz.res.innerHTML = Quiz.quizObj.message;
                      Quiz.nrOfTriesArray.push(Quiz.counter);
                      Quiz.counter = 0;
                    if( Quiz.quizObj.nextURL === undefined){
                        var countPrinter = document.getElementById("countTries");
                       Quiz.nrOfTriesArray.push(Quiz.counter); 
                       Quiz.countTries.innerHTML = "Antal försök: ";
                       for (var i =1 ; i < Quiz.nrOfTriesArray.length; i++) {
                       Quiz.countTries.innerHTML += "<br>Fråga "+i+": " + Quiz.nrOfTriesArray[i-1];
                       }
                    }
                    else{
                      Quiz.question(Quiz.quizObj.nextURL);
                    }
                }
                else if (Quiz.xhr.readyState === 4)
                {
                    Quiz.quizObj = JSON.parse(Quiz.xhr.responseText);
                     Quiz.res.innerHTML = Quiz.quizObj.message;
                     console.log(Quiz.counter);
                    
                     
                }
                
                 messbox.value=""; 
              };
              
               Quiz.xhr.open('POST', url, true);
               
                Quiz.xhr.setRequestHeader('Content-Type', 'application/json');
                Quiz.xhr.send(JSON.stringify(quizanswer));
        },
        
         click: function(){  
            document.getElementById("button").onclick = function(e){ // hämtar ut knappen och kopplar en eventhanterare
              Quiz.counter++;
              
            Quiz.answer(Quiz.next);
            
        };
        },
             
            
        }
       
    

//När sidan har laddads in så anropas init.
window.onload = Quiz.init;






