var WindowCapselr = {     
    
    Window: function (func){
        variables.windowCounter++;
        console.log(variables.windowCounter);
        var template = document.querySelector("#template");
        var windowTemplate = template.content.querySelector(".window");
        var w = windowTemplate.cloneNode(true);
        // var wt = document.querySelectorAll(".windowtop");
        // console.log(wt);
        // wt.innerHTML(name);
        document.querySelector('#wrapper').appendChild(
        w);
       
        func();
        
        var ThisWindow = document.querySelectorAll(".window");
        // var o = document.querySelectorAll(".windowcenter").length;
        console.log(ThisWindow[variables.windowCounter]);
        console.log(variables.windowCounter);
        ThisWindow[variables.windowCounter].style.zIndex = ""+variables.zindexNumber+"";
        ThisWindow[variables.windowCounter].style.marginTop = ""+variables.marginTop+"px"
        fokusWindow(ThisWindow[variables.windowCounter]);
        variables.zindexNumber++;
        variables.marginTop += 30;
     
    },
    
    loadCloseButton: function(windowNumber){
        var allTheWindows = document.querySelectorAll(".window");
        var theWindowThatsAboutToBeClosed = allTheWindows[windowNumber];
        
        var closeButton = document.querySelectorAll(".closeb");
        //  console.log(closeButton);
        closeButton[windowNumber].addEventListener("click", function(theWindowThatsAboutToBeClosed){
            //  console.log(theWindowThatsAboutToBeClosed);
        allTheWindows[windowNumber].style.display = 'none';
        variables.marginTop - 30;
             
         });
    },
     
    fokusWindow: function(thisWIndow){
         
        thisWIndow.addEventListener("click", function(){
            var higherZindex = variables.zindexNumber += 1;
            thisWIndow.style.zIndex = ""+ higherZindex+"";
        });
    },
     
};