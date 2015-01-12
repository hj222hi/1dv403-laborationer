
var Gallery ={
    SetUpImages: function(){
       
        variables.xhr.onreadystatechange = function(){
        console.log(variables.windowCounter);
        var imgArray;  
        //Hämtar och vissar load bilden
        var load = document.querySelectorAll(".hidden");
        var load2 = document.querySelectorAll(".load");
        var load3 = document.querySelectorAll(".loadtext");
        
        if(variables.xhr.readyState === 4 && variables.xhr.status !== 400){
            //Döljer load bilden och vissar galleiet
            console.log(load[variables.windowCounter]);
            load[variables.windowCounter].classList.add("hidden")
            load2[variables.windowCounter].classList.add("hidden")
            load3[variables.windowCounter].classList.add("hidden")
            imgArray = JSON.parse(variables.xhr.responseText);
            var windowCenter = document.querySelectorAll(".windowcenter");
           //Skriver ut bilder
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
               //Här kollar vi måtten på den största tumben genom att testa dom mot två värden 
                var maxWidth = 75;
                var maxHeight = 50;
                if(imgArray[i].thumbWidth > maxWidth){
                    maxWidth = imgArray[i].thumbWidth;
                            
                }
                if(imgArray[i].thumbHeight > maxHeight){
                    maxHeight = imgArray[i].thumbHeight;
                            // console.log(maxHeight);
                }
                //Här sätter vi måtten för tumbarna       
                tumbHolder.style.height = ""+maxHeight+"px";
                tumbHolder.style.width = ""+maxWidth+"px";
                    //  console.log(imgArray[i].URL);
              
                Gallery.setBackground(tumbHolder, imgArray[i].URL);
             
            }
            console.log(variables.windowCounter);
            
            tumbHolder.appendChild(tumb);
        }
                // console.log(windowCenter);
                 
            };
            //Hämtar bilder
        variables.xhr.open('GET','http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/', true); 
        variables.xhr.send(null);
            
        // var wName = document.getElementsByClassName("windowname") 
        // for(var n = 0; n< wName.length; n++){
        //   wName[n].innerHTML("Pics")  
        // };
            
            
    },
    //Ändrar bakgrund
    setBackground: function(tumbHolder, url){
        //  console.log(tumbHolder);
        tumbHolder.addEventListener("click", function(){
            var body = document.getElementById("dabody");
            //  console.log(body);
            body.style.backgroundImage = 'url('+url+')';
        })
         
     }
};   
