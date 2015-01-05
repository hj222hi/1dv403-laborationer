"use strict"
var theWindow = {
    //  xhr: new XMLHttpRequest(), 

    // Window: function(){
       
    //     var template = document.querySelector("#template");
    //     var windowTemplate = template.content.querySelector(".window");
    //     var w = windowTemplate.cloneNode(true);
        
    //     document.querySelector('#wrapper').appendChild(
    //     w);
    // },
    
    setButtonPics: function(){
        
         document.getElementById("picslink").onclick = function(){ 
     
        var window1 = new Window(SetUpImages());
        // var imageSetter = new SetUpImages();
        window1;
        // imageSetter;
        };
    },
  
    //     setUpImages: function(){
    //         console.log("hoj");
    //      theWindow.xhr.onreadystatechange = function(){
    //      var imgArray;  
    //      var load = document.getElementsByClassName("hidden");
    //      for(var l = 0; l< load.length; l++){
    //          load[l].classList.add("show");
    //      }
    //             if(theWindow.xhr.readyState === 4 && theWindow.xhr.status !== 400){
    //                   var show = document.getElementsByClassName("show");
    //                   for(var m = 0; m < show.length; m++){
    //                         show[m].classList.remove("show");
    //                         load[m].classList.remove("show");
    //                  }
    //               imgArray = JSON.parse(theWindow.xhr.responseText);
    //               console.log(imgArray);
                    
    //                 var windowCenter = document.querySelector(".windowcenter");
    //                 console.log(windowCenter);
                     
    //                 for(var i = 0; i < imgArray.length; i++){
    //                     var tumbHolder = document.createElement("div");
    //                     tumbHolder.setAttribute("class","tumbholder")
                        
    //                     var tumb = document.createElement("img");
    //                     var a = document.createElement("a");
    //                     a.setAttribute("href","#")
    //                     a.setAttribute("class","atag")
    //                     windowCenter.appendChild(a);
    //                     a.appendChild(tumbHolder);
    //                     tumb.setAttribute("class",""+i+"")
    //                       tumb.setAttribute("class","tumb")
    //                     tumb.setAttribute("src",""+imgArray[i].thumbURL+"")
                       
    //                     tumbHolder.appendChild(tumb);
    //                     var maxWidth = 75;
    //                     var maxHeight = 50;
                
    //                     if(imgArray[i].thumbWidth > maxWidth){
    //                         maxWidth = imgArray[i].thumbWidth;
                            
    //                          }
                        
    //                     if(imgArray[i].thumbHeight > maxHeight){
    //                         maxHeight = imgArray[i].thumbHeight;
    //                         console.log(maxHeight);
    //                          }
                       
    //                 tumbHolder.style.height = ""+maxHeight+"px";
    //                 tumbHolder.style.width = ""+maxWidth+"px";
    //                  console.log(imgArray[i].URL);
              
    //           theWindow.setBackground(tumbHolder, imgArray[i].URL);
    //                 }
                        
    //                     tumbHolder.appendChild(tumb);
    //                     var atagArray = document.querySelector(".atag");
    //                      for(var k = 0; k < imgArray.length; k++){
    //                     atagArray[k].onclick = theWindow.presser(imgArray[k]);
    //                 }
                        
                       
    //             }
    //         };
    //         theWindow.xhr.open('GET','http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/', true); 
    //      theWindow.xhr.send(null);
            
              
            
            
    // },
    //  setBackground: function (tumbHolder, url){
    //      console.log(tumbHolder);
    //         tumbHolder.addEventListener("click", function(){
    //              var body = document.getElementsByTagName("body");
    //              console.log(body);
    //               body[0].style.backgroundImage = 'url('+url+')';
    //         })
         
    //  }
    // //  presser: function(imgA){
        
    // //         var body = document.getElementsByTagName('body')[0];
    // //             body.style.backgroundImage = "url("+imgA.URL+")";
            
        
                
           
    // //     },
    };
// }

window.onLoad = theWindow.setButtonPics();