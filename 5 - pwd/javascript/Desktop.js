// var theWindow = {
    var xhr = new XMLHttpRequest(); 
  var o = 0;
   
     function Window(func){
        
        var template = document.querySelector("#template");
        var windowTemplate = template.content.querySelector(".window");
        var w = windowTemplate.cloneNode(true);
        
        document.querySelector('#wrapper').appendChild(
        w);
        func;
    };
       
       function SetUpImages(){
        xhr.onreadystatechange = function(){
         var imgArray;  
         var load = document.querySelectorAll(".hidden");
         var load2 = document.querySelectorAll(".load");
         var load3 = document.querySelectorAll(".loadtext");
         
            //  load[o].classList.add("show");

                if(xhr.readyState === 4 &&xhr.status !== 400){
                      console.log(load[o]);
                    load[o].classList.add("hidden")
                    load2[o].classList.add("hidden")
                    load3[o].classList.add("hidden")
                     
                   imgArray = JSON.parse(xhr.responseText);
                //   console.log(imgArray);
                  
                    var windowCenter = document.querySelectorAll(".windowcenter");
                    console.log(windowCenter[o]);
                   
                    for(var i = 0; i < imgArray.length; i++){
                        var tumbHolder = document.createElement("div");
                        tumbHolder.setAttribute("class","tumbholder")
                        
                        var tumb = document.createElement("img");
                        var a = document.createElement("a");
                        a.setAttribute("href","#")
                        a.setAttribute("class","atag")
                        
                        windowCenter[o].appendChild(a);
                       
                        a.appendChild(tumbHolder);
                        tumb.setAttribute("class",""+i+"")
                          tumb.setAttribute("class","tumb")
                        tumb.setAttribute("src",""+imgArray[i].thumbURL+"")
                       
                        tumbHolder.appendChild(tumb);
                        var maxWidth = 75;
                        var maxHeight = 50;
                
                        if(imgArray[i].thumbWidth > maxWidth){
                            maxWidth = imgArray[i].thumbWidth;
                            
                             }
                        
                        if(imgArray[i].thumbHeight > maxHeight){
                            maxHeight = imgArray[i].thumbHeight;
                            // console.log(maxHeight);
                             }
                       
                    tumbHolder.style.height = ""+maxHeight+"px";
                    tumbHolder.style.width = ""+maxWidth+"px";
                    //  console.log(imgArray[i].URL);
              
              setBackground(tumbHolder, imgArray[i].URL);
             
                    }
                        console.log(o);
                        loadCloseButton(o);
                        o++ 
                        tumbHolder.appendChild(tumb);
                        // var atagArray = document.querySelector(".atag");
                        //  for(var k = 0; k < imgArray.length; k++){
                        // atagArray[k].onclick =presser(imgArray[k]);
                    // }
                        
                       
                }
                // console.log(windowCenter);
                 
            };
           xhr.open('GET','http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/', true); 
        xhr.send(null);
            
        // var wName = document.getElementsByClassName("windowname") 
        // for(var n = 0; n< wName.length; n++){
        //   wName[n].innerHTML("Pics")  
        // };
            
            
    };
     function setBackground (tumbHolder, url){
        //  console.log(tumbHolder);
            tumbHolder.addEventListener("click", function(){
                 var body = document.getElementsByTagName("body");
                //  console.log(body);
                  body[0].style.backgroundImage = 'url('+url+')';
            })
         
     };
     
     function loadCloseButton(windowNumber){
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