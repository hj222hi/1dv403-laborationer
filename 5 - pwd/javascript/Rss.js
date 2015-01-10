
   
    //  function Window(func){
        
    //     var template = document.querySelector("#template");
    //     var windowTemplate = template.content.querySelector(".window");
    //     var w = windowTemplate.cloneNode(true);
        
    //     document.querySelector('#wrapper').appendChild(
    //     w);
    //     func();
    // };
       
       function SetUpRss(){
          
           console.log("den kör");
        variables.xhr.onreadystatechange = function(){
           
         var load = document.querySelectorAll(".hidden");
         var load2 = document.querySelectorAll(".load");
         var load3 = document.querySelectorAll(".loadtext");
         
            //  load[o].classList.add("show");

                if(variables.xhr.readyState === 4 && variables.xhr.status !== 400){}
            var windowCenter = document.querySelectorAll(".windowcenter");
                //   windowCenter[o].innerHTML="";     
                var parser = new DOMParser();
                var feed = parser.parseFromString(variables.xhr.responseText, "text/html");

                
                console.log(windowCenter);
                
                windowCenter[variables.o].appendChild(feed.firstChild); 
                       
                      
                    // console.log(windowCenter[o]);
                       
                     
                        
                       
                
                // console.log(windowCenter);
                loadCloseButton(variables.o);
               
            }
             console.log(variables.o);
                    
           variables.xhr.open('GET',"http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://gatuslang.se/feed/")); 
        variables.xhr.send(null);
        //  o++     
        
        //  addToO();   
   };
   
     function addToO(){
         variables.o++
     };
     
     function loadCloseButton(windowNumber){
         console.log("plus")
        var allTheWindows = document.querySelectorAll(".window");
        var theWindowThatsAboutToBeClosed = allTheWindows[windowNumber];
         var closeButton = document.querySelectorAll(".closeb");
        //  console.log(closeButton);
         closeButton[windowNumber].addEventListener("click", function(theWindowThatsAboutToBeClosed){
            //  console.log(theWindowThatsAboutToBeClosed);
             allTheWindows[windowNumber].style.display = 'none';
             
             
         });
     }
    //  presser: function(imgA){
        
    //         var body = document.getElementsByTagName('body')[0];
    //             body.style.backgroundImage = "url("+imgA.URL+")";
            
        
                
           
    //     },
    //  };