"use strict"
var theWindow = {

    setButtonPics: function(){
        
         document.getElementById("picslink").onclick = function(){ 

        window1: new Window(SetUpImages);
  
        
        };
    },
    
    setRSSPics: function(){
        document.getElementById("rsslink").onclick = function(){ 
   
        window2: new Window(rssWindow.SetUpRss);
       
        }
        // addToO();
        },
        
    setMemoryPics: function(){
        document.getElementById("memolink").onclick = function(){ 
   
        Memorywindow: new Window(Memory.initMemory());
        
        // addToO();
        }
    },
   
    initButton: function(){
       theWindow.setButtonPics();
       theWindow.setRSSPics()
       theWindow.setMemoryPics()
       console.log(window);
    }, 
    // }
  
    };


window.onLoad = theWindow.initButton();
