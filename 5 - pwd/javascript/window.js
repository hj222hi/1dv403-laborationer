var WindowCapselr = {     
    //Funktionen som skapar fönstret
    // Den hämtar in tre parametrar som är funktionen som ska köras
    //i fönstret, Namnet på fönstret och src till ikonen
    Window: function (func, name, src){
        console.log(func);
        //variabel som håller koll på vilket numer det aktuella fönstret har
        variables.windowCounter += 1;
        console.log(variables.windowCounter);
        //Hämtar HTML Templaten
        
        var windowTemplate;
        var template = document.querySelector("#template");
        var tmp = document.documentMode;
        if(tmp){
             windowTemplate = template.querySelector(".window");
        }else{
             windowTemplate = template.content.querySelector(".window");
        }

        // var windowTemplate = template.content.querySelector(".window");
        //Clonar ut templatet
        var w = windowTemplate.cloneNode(true);
       //Appendar templaten i #wrapper
        document.querySelector('#wrapper').appendChild(
        w);
        //Hämtar p tagen som ska hålla namnet
         var wt = document.querySelectorAll(".wname");
        console.log(wt);
        //Stoppar in nament 
        wt[variables.windowCounter].innerHTML = name;
        //Hämtar ut img tagen som ska hålla ikoenn
        var wimg = document.querySelectorAll(".wimg");
        console.log(wimg);
        //Stoppar in bilden
        wimg[variables.windowCounter].setAttribute("src",src);
       //Kör funktionen som ska vara i fönstret
        func();
        //Kod som puttar ner näta fönster
        var ThisWindow = document.querySelectorAll(".window");
        console.log(ThisWindow[variables.windowCounter]);
        console.log(variables.windowCounter);
        ThisWindow[variables.windowCounter].style.zIndex = ""+variables.zindexNumber+"";
        ThisWindow[variables.windowCounter].style.marginTop = ""+variables.marginTop+"px"
        WindowCapselr.fokusWindow(ThisWindow[variables.windowCounter]);
        //Ökar z-indexet för nästa fönster
        variables.zindexNumber++;
        //Ökar marginalen för nästa fönster
        variables.marginTop += 30;
        //Kör funktionen som laddar stängningskanppen
        WindowCapselr.loadCloseButton(variables.windowCounter);
     
    },
    //Funktion som laddar stängknappen
    loadCloseButton: function(windowNumber){
        var allTheWindows = document.querySelectorAll(".window");
        //Hämtar det aktuellafönstret
        // var theWindowThatsAboutToBeClosed = allTheWindows[windowNumber];
        //Hämtar ut stängkanppen
        var closeButton = document.querySelectorAll(".closeb");
        //  console.log(closeButton);
        console.log(variables.windowCounter);
        console.log(closeButton[variables.windowCounter]);
        //Lägger en klick funktion på stängknappen
        closeButton[windowNumber].addEventListener("click", function(){
          //Stänger kalaset
        console.log(allTheWindows[variables.windowCounter]);
        allTheWindows[windowNumber].style.display = 'none';
        // variables.marginTop - 30;
             
         });
    },
     //Funktion för att sokusera fönstert
    fokusWindow: function(thisWIndow){
         
        thisWIndow.addEventListener("click", function(){
            var higherZindex = variables.zindexNumber += 1;
            thisWIndow.style.zIndex = ""+ higherZindex+"";
        });
    },
     
};