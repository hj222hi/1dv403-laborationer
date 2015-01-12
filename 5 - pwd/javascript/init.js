"use strict"
var theWindow = {
//initeierar galleriknappen
    setButtonPics: function(){
        
         document.getElementById("picslink").addEventListener("click", function(){ 

            var Window1 = new WindowCapselr.Window(Gallery.SetUpImages,"Gallery", "pics/pics.png");
          
        
        });
    },
//initeierar rssknappen    
    setRSSPics: function(){
        document.getElementById("rsslink").onclick = function(){ 
   
       var window2 = new WindowCapselr.Window(RssWindow.SetUpRss(),"RSS","pics/rss.png");
       
        }
        // addToO();
        },
//initeierar memoryknappen
    setMemoryPics: function(){
        document.getElementById("memolink").onclick = function(){ 
   
        var window3 = new WindowCapselr.Window(Memory.initMemory(),"Memory","pics/game.png");
        
        // addToO();
        }
    },
//Kör koderna som fixar knapparna
    initButton: function(){
       theWindow.setButtonPics();
       theWindow.setRSSPics()
       theWindow.setMemoryPics()
       console.log(window);
    }, 
    // }
  
    };

//Kör initfunktionen
window.onLoad = theWindow.initButton();
