     function Window(func){
           variables.o++;
           console.log(variables.o);
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
        console.log(ThisWindow[variables.o]);
     console.log(variables.o);
        ThisWindow[variables.o].style.zIndex = ""+variables.zindexNumber+"";
        ThisWindow[variables.o].style.marginTop = ""+variables.marginTop+"px"
        fokusWindow(ThisWindow[variables.o]);
        variables.zindexNumber++;
        variables.marginTop += 30;
     
    };