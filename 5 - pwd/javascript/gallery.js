
       
       function SetUpImages(){
              var wt = document.querySelectorAll(".windowtop");
            var wtText = document.createElement("p");
        wtText.innerHTML = "Galleri";
        console.log(variables.windowCounter);
        wt[variables.windowCounter].appendChild(wtText);
            WindowCapselr.loadCloseButton(variables.windowCounter);
                      
        //   var o = document.querySelectorAll(".windowcenter").length;
        
        console.log(wt);
       
        //   variables.windowCounter++ 
        variables.xhr.onreadystatechange = function(){
            console.log(variables.windowCounter);
         var imgArray;  
         var load = document.querySelectorAll(".hidden");
         var load2 = document.querySelectorAll(".load");
         var load3 = document.querySelectorAll(".loadtext");
         
            //  load[o].classList.add("show");

                if(variables.xhr.readyState === 4 && variables.xhr.status !== 400){
                      console.log(load[variables.windowCounter]);
                    load[variables.windowCounter].classList.add("hidden")
                    load2[variables.windowCounter].classList.add("hidden")
                    load3[variables.windowCounter].classList.add("hidden")
                     
                   imgArray = JSON.parse(variables.xhr.responseText);
                //   console.log(imgArray);
                  
                    var windowCenter = document.querySelectorAll(".windowcenter");
                    console.log(windowCenter[variables.windowCounter]);
                   
                    for(var i = 0; i < imgArray.length; i++){
                        var tumbHolder = document.createElement("div");
                        tumbHolder.setAttribute("class","tumbholder")
                        
                        var tumb = document.createElement("img");
                        var a = document.createElement("a");
                        a.setAttribute("href","#")
                        a.setAttribute("class","atag")
                        
                        windowCenter[variables.windowCounter].appendChild(a);
                       
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
                        console.log(variables.windowCounter);
                       
                        tumbHolder.appendChild(tumb);
                        // var atagArray = document.querySelector(".atag");
                        //  for(var k = 0; k < imgArray.length; k++){
                        // atagArray[k].onclick =presser(imgArray[k]);
                    // }
                        
                       
                }
                // console.log(windowCenter);
                 
            };
           variables.xhr.open('GET','http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/', true); 
        variables.xhr.send(null);
            
        // var wName = document.getElementsByClassName("windowname") 
        // for(var n = 0; n< wName.length; n++){
        //   wName[n].innerHTML("Pics")  
        // };
            
            
    };
     function setBackground (tumbHolder, url){
        //  console.log(tumbHolder);
            tumbHolder.addEventListener("click", function(){
                 var body = document.getElementById("dabody");
                //  console.log(body);
                  body.style.backgroundImage = 'url('+url+')';
            })
         
     };
     
