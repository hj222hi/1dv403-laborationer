"use strict"
var theWindow = {

    setButtonPics: function(){
        
         document.getElementById("picslink").onclick = function(){ 

        var window1 = new Window(SetUpImages);
        window1;
        
        };
    },
    
    setRSSPics: function(){
        document.getElementById("rsslink").onclick = function(){ 
   
        var window2 = new Window(SetUpRss);
        window2;
        // addToO();
        };
    },
    initButton: function(){
       theWindow.setButtonPics();
       theWindow.setRSSPics()
    }, 
    // }
  
    };


window.onLoad = theWindow.initButton();
