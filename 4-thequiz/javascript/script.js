// "use strict";
// window.onload = function(){

// 	document.getElementById("submit").addEvenlistener("click", function(){

// 		var xhr = new XMLHttpRequest();

// 		xhr.onreadystatechanged = function(){
//              if(xhr.readyState === 4){
//                     if(xhr.status == 200){
//                         console.log(xhr.responseText);
//                     }
//              else {
//                 console.log("Läsfel, status:"+xhr.status);
//                 }
//             }
//         }; 

// 		xhr.open("GET", "http://vhost3.lnu.se:20080/question1")
//         xhr.send("null")

// 	});
// }
"use strict"; //objekt.metod/egenskap(argument)

var Quiz = {
    quizObj: undefined,
    init: function() { 
        
        Quiz.question();    
    },
        
        
        question: function() { 
        document.getElementById("button").addEventListener("click", function(e){ // hämtar ut knappen och kopplar ene eventhanterare
            var xhr = new XMLHttpRequest(); // skapar requestObjekt
            var pTag = document.getElementById("question");
             
            // Koppla en händelsehanterare på vad som ska hända när vi får ett svar
            // onreadeystaychange = en händelsehanterare. Vi kopplar den till en funktion. Det som står i det blocket är det som
            // ska köras när vi får ett svar.
          
            xhr.onreadystatechange = function(){
                
                if(xhr.readyState === 4 && xhr.status === 200){
                   
                   Quiz.quizObj = JSON.parse(xhr.responseText);
                    console.log("Quiz.quizObj.question");
                    pTag.innerHTML = Quiz.quizObj.question; // skriver ut frågan
                }
                 
                 
            };
            
            xhr.open('GET', ' http://vhost3.lnu.se:20080/question/1', true); // måste köra en open för att konfiguera. Alltså Open("GET", "vad vill vi anropa?")
            xhr.send(null);
            
            xhr.open('POST', 'http://vhost3.lnu.se:20080/answer/1',true );
            xhr.setRequestHeader('Content-Type', '')
        });
        },
   
};
//När sidan har laddads in så anropas init.
window.onload = Quiz.init;






//("GET", "vad vill vi anropa?" , true);
//  http://vhost3.lnu.se:20080/question/1
//xhr.send(null);

//mitt quizobj
//Object {id: 1, question: "Vad är 1+1?", nextURL: "http://vhost3.lnu.se:20080/answer/1", message: "You got your question! Now send me the answer via HTTP POST to the nextURL in JSON-format"}