var rssWindow ={
       
    SetUpRss: function(){
        console.log("den kör");
        variables.xhr.onreadystatechange = function(){
            var load = document.querySelectorAll(".hidden");
            var load2 = document.querySelectorAll(".load");
            var load3 = document.querySelectorAll(".loadtext");
            if(variables.xhr.readyState === 4 && variables.xhr.status !== 400){
                var windowCenter = document.querySelectorAll(".windowcenter");
                var parser = new DOMParser();
                var feed = parser.parseFromString(variables.xhr.responseText, "text/html");
                console.log(windowCenter);
                windowCenter[variables.windowCounter].appendChild(feed.firstChild); 
                WindowCapselr.loadCloseButton(variables.windowCounter);
                }    
            }
            console.log(variables.windowCounter);
            variables.xhr.open('GET',"http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://gatuslang.se/feed/")); 
            variables.xhr.send(null);
   }
   
     
};