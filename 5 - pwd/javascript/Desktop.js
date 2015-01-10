// var theWindow = {
//   var variables = {  
//       xhr: new XMLHttpRequest(),
//   o: -1,
//     //   o: document.querySelectorAll(".windowcenter").length,
//         // console.log(o),
//     // o: variables.k.length,
//         // console.log(o)
//       zindexNumber: 0,
//       marginTop: 30,
//   };
    //  function Window(func){
    //       variables.o++;
    //       console.log(variables.o);
    //     var template = document.querySelector("#template");
    //     var windowTemplate = template.content.querySelector(".window");
    //     var w = windowTemplate.cloneNode(true);
    //     // var wt = document.querySelectorAll(".windowtop");
    //     // console.log(wt);
    //     // wt.innerHTML(name);
    //     document.querySelector('#wrapper').appendChild(
    //     w);
       
    //     func();
        
    //     var ThisWindow = document.querySelectorAll(".window");
    //     // var o = document.querySelectorAll(".windowcenter").length;
    //     console.log(ThisWindow[variables.o]);
    //  console.log(variables.o);
    //     ThisWindow[variables.o].style.zIndex = ""+variables.zindexNumber+"";
    //     ThisWindow[variables.o].style.marginTop = ""+variables.marginTop+"px"
    //     fokusWindow(ThisWindow[variables.o]);
    //     variables.zindexNumber++;
    //     variables.marginTop += 30;
     
    // };
       
       function SetUpImages(){
            loadCloseButton(variables.o);
                      
        //   var o = document.querySelectorAll(".windowcenter").length;
        //   var wt = document.querySelectorAll(".windowtop");
        // console.log(wt);
        // wt.innerHTML("Galleri");
        //   variables.o++ 
        variables.xhr.onreadystatechange = function(){
            console.log(variables.o);
         var imgArray;  
         var load = document.querySelectorAll(".hidden");
         var load2 = document.querySelectorAll(".load");
         var load3 = document.querySelectorAll(".loadtext");
         
            //  load[o].classList.add("show");

                if(variables.xhr.readyState === 4 && variables.xhr.status !== 400){
                      console.log(load[variables.o]);
                    load[variables.o].classList.add("hidden")
                    load2[variables.o].classList.add("hidden")
                    load3[variables.o].classList.add("hidden")
                     
                   imgArray = JSON.parse(variables.xhr.responseText);
                //   console.log(imgArray);
                  
                    var windowCenter = document.querySelectorAll(".windowcenter");
                    console.log(windowCenter[variables.o]);
                   
                    for(var i = 0; i < imgArray.length; i++){
                        var tumbHolder = document.createElement("div");
                        tumbHolder.setAttribute("class","tumbholder")
                        
                        var tumb = document.createElement("img");
                        var a = document.createElement("a");
                        a.setAttribute("href","#")
                        a.setAttribute("class","atag")
                        
                        windowCenter[variables.o].appendChild(a);
                       
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
                        console.log(variables.o);
                       
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
     
     function loadCloseButton(windowNumber){
        var allTheWindows = document.querySelectorAll(".window");
        var theWindowThatsAboutToBeClosed = allTheWindows[windowNumber];
         var closeButton = document.querySelectorAll(".closeb");
        //  console.log(closeButton);
         closeButton[windowNumber].addEventListener("click", function(theWindowThatsAboutToBeClosed){
            //  console.log(theWindowThatsAboutToBeClosed);
             allTheWindows[windowNumber].style.display = 'none';
             variables.marginTop - 30;
             
         });
     };
     
     function fokusWindow(thisWIndow){
         
         thisWIndow.addEventListener("click", function(){
             var higherZindex = variables.zindexNumber += 1;
             thisWIndow.style.zIndex = ""+ higherZindex+"";
         });
     };
    //  presser: function(imgA){
        
    //         var body = document.getElementsByTagName('body')[0];
    //             body.style.backgroundImage = "url("+imgA.URL+")";
            
        
                
           
    //     },
    //  };