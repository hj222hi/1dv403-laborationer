{"filter":false,"title":"rss.js","tooltip":"/5 - pwd/javascript/rss.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":4},"end":{"row":6,"column":8},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":4},"end":{"row":6,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"remove","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":["G"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":26},"end":{"row":3,"column":27},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":26},"end":{"row":3,"column":27},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"remove","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":26},"end":{"row":4,"column":0},"action":"insert","lines":["",""]},{"start":{"row":4,"column":0},"end":{"row":4,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":8},"end":{"row":5,"column":0},"action":"insert","lines":["",""]},{"start":{"row":5,"column":0},"end":{"row":5,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":8},"end":{"row":18,"column":6},"action":"insert","lines":["var xhr = new XMLHttpRequest();","    xhr.onreadystatechange = function(){","        if(xhr.readyState === 4){","            if(xhr.status === 200){","                ","                obj.content.innerHTML =\"\";","                var parser = new DOMParser();","                var feed = parser.parseFromString(xhr.responseText, \"text/html\");","","                console.log(feed.firstChild);","                obj.content.appendChild(feed.firstChild);","            }","        }    ","    };"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":3},"end":{"row":6,"column":4},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":4},"end":{"row":6,"column":8},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":8},"end":{"row":6,"column":12},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":8},"end":{"row":6,"column":12},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":4},"end":{"row":6,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":2},"end":{"row":0,"column":36},"action":"remove","lines":["  var xhr = new XMLHttpRequest(); "]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":2},"end":{"row":1,"column":3},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":1},"end":{"row":1,"column":2},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":20},"end":{"row":10,"column":21},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":21},"end":{"row":10,"column":22},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":22},"end":{"row":10,"column":23},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":23},"end":{"row":10,"column":24},"action":"remove","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":23},"end":{"row":10,"column":24},"action":"insert","lines":["P"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":20},"end":{"row":11,"column":21},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":21},"end":{"row":11,"column":22},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":22},"end":{"row":11,"column":23},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":23},"end":{"row":11,"column":24},"action":"remove","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":23},"end":{"row":11,"column":24},"action":"insert","lines":["F"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":16},"end":{"row":9,"column":27},"action":"remove","lines":["obj.content"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":16},"end":{"row":8,"column":17},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":17},"end":{"row":8,"column":18},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":18},"end":{"row":8,"column":19},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":16},"end":{"row":8,"column":19},"action":"remove","lines":["get"]},{"start":{"row":8,"column":16},"end":{"row":8,"column":78},"action":"insert","lines":["var windowCenter = document.querySelectorAll(\".windowcenter\");"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":78},"end":{"row":9,"column":0},"action":"insert","lines":["",""]},{"start":{"row":9,"column":0},"end":{"row":9,"column":16},"action":"insert","lines":["                "]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":16},"end":{"row":9,"column":17},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":16},"end":{"row":9,"column":17},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":21,"column":6},"action":"remove","lines":[" var o = 0;","    ","    function GetRssFeed(){","        ","        var xhr = new XMLHttpRequest();","     xhr.onreadystatechange = function(){","        if(xhr.readyState === 4){","            if(xhr.status === 200){","                var windowCenter = document.querySelectorAll(\".windowcenter\");","                ","                .innerHTML =\"\";","                var theParser = new DOMParser();","                var theFeed = parser.parseFromString(xhr.responseText, \"text/html\");","","                console.log(feed.firstChild);","                obj.content.appendChild(feed.firstChild);","            }","        }    ","    };","    ","    ","    };"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":35,"column":2},"action":"insert","lines":["\"use strict\";","","function Rss(obj){","    ","    var that = this;","    this.getRssFeed(obj);","    ","    this.intevall = setInterval(function () {","        that.getRssFeed(obj); ","    }, 30000);","    ","","    obj.w.querySelector(\".appClose\").addEventListener(\"click\", function(){","        clearInterval(that.intevall);","    });","}","","Rss.prototype.getRssFeed = function(obj) {","    var xhr = new XMLHttpRequest();","    xhr.onreadystatechange = function(){","        if(xhr.readyState === 4){","            if(xhr.status === 200){","                ","                obj.content.innerHTML =\"\";","                var parser = new DOMParser();","                var feed = parser.parseFromString(xhr.responseText, \"text/html\");","","                console.log(feed.firstChild);","                obj.content.appendChild(feed.firstChild);","            }","        }    ","    };","    ","    xhr.open(\"GET\", \"http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url=\"+escape(\"http://www.dn.se/m/rss/senaste-nytt\"));","    xhr.send(null);","};"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":13},"end":{"row":2,"column":16},"action":"remove","lines":["obj"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":20},"end":{"row":5,"column":23},"action":"remove","lines":["obj"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":25},"end":{"row":8,"column":26},"action":"remove","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":35,"column":2},"action":"remove","lines":["\"use strict\";","","function Rss(){","    ","    var that = this;","    this.getRssFeed();","    ","    this.intevall = setInterval(function () {","        that.getRssFeed(oj); ","    }, 30000);","    ","","    obj.w.querySelector(\".appClose\").addEventListener(\"click\", function(){","        clearInterval(that.intevall);","    });","}","","Rss.prototype.getRssFeed = function(obj) {","    var xhr = new XMLHttpRequest();","    xhr.onreadystatechange = function(){","        if(xhr.readyState === 4){","            if(xhr.status === 200){","                ","                obj.content.innerHTML =\"\";","                var parser = new DOMParser();","                var feed = parser.parseFromString(xhr.responseText, \"text/html\");","","                console.log(feed.firstChild);","                obj.content.appendChild(feed.firstChild);","            }","        }    ","    };","    ","    xhr.open(\"GET\", \"http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url=\"+escape(\"http://www.dn.se/m/rss/senaste-nytt\"));","    xhr.send(null);","};"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":128,"column":10},"action":"insert","lines":["// var theWindow = {","    var xhr = new XMLHttpRequest(); ","  var o = 0;","   ","     function Window(func){","        ","        var template = document.querySelector(\"#template\");","        var windowTemplate = template.content.querySelector(\".window\");","        var w = windowTemplate.cloneNode(true);","        ","        document.querySelector('#wrapper').appendChild(","        w);","        func;","    };","       ","       function SetUpImages(){","        xhr.onreadystatechange = function(){","         var imgArray;  ","         var load = document.querySelectorAll(\".hidden\");","         var load2 = document.querySelectorAll(\".load\");","         var load3 = document.querySelectorAll(\".loadtext\");","         ","            //  load[o].classList.add(\"show\");","","                if(xhr.readyState === 4 && xhr.status !== 400){","                      console.log(load[o]);","                    load[o].classList.add(\"hidden\")","                    load2[o].classList.add(\"hidden\")","                    load3[o].classList.add(\"hidden\")","                     ","                   imgArray = JSON.parse(xhr.responseText);","                //   console.log(imgArray);","                  ","                    var windowCenter = document.querySelectorAll(\".windowcenter\");","                    console.log(windowCenter[o]);","                   ","                    for(var i = 0; i < imgArray.length; i++){","                        var tumbHolder = document.createElement(\"div\");","                        tumbHolder.setAttribute(\"class\",\"tumbholder\")","                        ","                        var tumb = document.createElement(\"img\");","                        var a = document.createElement(\"a\");","                        a.setAttribute(\"href\",\"#\")","                        a.setAttribute(\"class\",\"atag\")","                        ","                        windowCenter[o].appendChild(a);","                       ","                        a.appendChild(tumbHolder);","                        tumb.setAttribute(\"class\",\"\"+i+\"\")","                          tumb.setAttribute(\"class\",\"tumb\")","                        tumb.setAttribute(\"src\",\"\"+imgArray[i].thumbURL+\"\")","                       ","                        tumbHolder.appendChild(tumb);","                        var maxWidth = 75;","                        var maxHeight = 50;","                ","                        if(imgArray[i].thumbWidth > maxWidth){","                            maxWidth = imgArray[i].thumbWidth;","                            ","                             }","                        ","                        if(imgArray[i].thumbHeight > maxHeight){","                            maxHeight = imgArray[i].thumbHeight;","                            // console.log(maxHeight);","                             }","                       ","                    tumbHolder.style.height = \"\"+maxHeight+\"px\";","                    tumbHolder.style.width = \"\"+maxWidth+\"px\";","                    //  console.log(imgArray[i].URL);","              ","              setBackground(tumbHolder, imgArray[i].URL);","             ","                    }","                        console.log(o);","                        loadCloseButton(o);","                        o++ ","                        tumbHolder.appendChild(tumb);","                        // var atagArray = document.querySelector(\".atag\");","                        //  for(var k = 0; k < imgArray.length; k++){","                        // atagArray[k].onclick =presser(imgArray[k]);","                    // }","                        ","                       ","                }","                // console.log(windowCenter);","                 ","            };","           xhr.open('GET','http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/', true); ","        xhr.send(null);","            ","        // var wName = document.getElementsByClassName(\"windowname\") ","        // for(var n = 0; n< wName.length; n++){","        //   wName[n].innerHTML(\"Pics\")  ","        // };","            ","            ","    };","     function setBackground (tumbHolder, url){","        //  console.log(tumbHolder);","            tumbHolder.addEventListener(\"click\", function(){","                 var body = document.getElementsByTagName(\"body\");","                //  console.log(body);","                  body[0].style.backgroundImage = 'url('+url+')';","            })","         ","     };","     ","     function loadCloseButton(windowNumber){","        var allTheWindows = document.querySelectorAll(\".window\");","        var theWindowThatsAboutToBeClosed = allTheWindows[windowNumber];","         var closeButton = document.querySelectorAll(\".closeb\");","        //  console.log(closeButton);","         closeButton[windowNumber].addEventListener(\"click\", function(theWindowThatsAboutToBeClosed){","            //  console.log(theWindowThatsAboutToBeClosed);","             allTheWindows[windowNumber].style.display = 'none';","             ","             ","         });","     }","    //  presser: function(imgA){","        ","    //         var body = document.getElementsByTagName('body')[0];","    //             body.style.backgroundImage = \"url(\"+imgA.URL+\")\";","            ","        ","                ","           ","    //     },","    //  };"]}]}],[{"group":"doc","deltas":[{"start":{"row":97,"column":3},"end":{"row":105,"column":7},"action":"remove","lines":["  function setBackground (tumbHolder, url){","        //  console.log(tumbHolder);","            tumbHolder.addEventListener(\"click\", function(){","                 var body = document.getElementsByTagName(\"body\");","                //  console.log(body);","                  body[0].style.backgroundImage = 'url('+url+')';","            })","         ","     };"]}]}],[{"group":"doc","deltas":[{"start":{"row":90,"column":8},"end":{"row":94,"column":12},"action":"remove","lines":["// var wName = document.getElementsByClassName(\"windowname\") ","        // for(var n = 0; n< wName.length; n++){","        //   wName[n].innerHTML(\"Pics\")  ","        // };","            "]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":21},"end":{"row":80,"column":24},"action":"remove","lines":["   tumbHolder.appendChild(tumb);","                        // var atagArray = document.querySelector(\".atag\");","                        //  for(var k = 0; k < imgArray.length; k++){","                        // atagArray[k].onclick =presser(imgArray[k]);","                    // }"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":12},"end":{"row":72,"column":21},"action":"remove","lines":["          console.log(load[o]);","                    load[o].classList.add(\"hidden\")","                    load2[o].classList.add(\"hidden\")","                    load3[o].classList.add(\"hidden\")","                     ","                   imgArray = JSON.parse(xhr.responseText);","                //   console.log(imgArray);","                  ","                    var windowCenter = document.querySelectorAll(\".windowcenter\");","                    console.log(windowCenter[o]);","                   ","                    for(var i = 0; i < imgArray.length; i++){","                        var tumbHolder = document.createElement(\"div\");","                        tumbHolder.setAttribute(\"class\",\"tumbholder\")","                        ","                        var tumb = document.createElement(\"img\");","                        var a = document.createElement(\"a\");","                        a.setAttribute(\"href\",\"#\")","                        a.setAttribute(\"class\",\"atag\")","                        ","                        windowCenter[o].appendChild(a);","                       ","                        a.appendChild(tumbHolder);","                        tumb.setAttribute(\"class\",\"\"+i+\"\")","                          tumb.setAttribute(\"class\",\"tumb\")","                        tumb.setAttribute(\"src\",\"\"+imgArray[i].thumbURL+\"\")","                       ","                        tumbHolder.appendChild(tumb);","                        var maxWidth = 75;","                        var maxHeight = 50;","                ","                        if(imgArray[i].thumbWidth > maxWidth){","                            maxWidth = imgArray[i].thumbWidth;","                            ","                             }","                        ","                        if(imgArray[i].thumbHeight > maxHeight){","                            maxHeight = imgArray[i].thumbHeight;","                            // console.log(maxHeight);","                             }","                       ","                    tumbHolder.style.height = \"\"+maxHeight+\"px\";","                    tumbHolder.style.width = \"\"+maxWidth+\"px\";","                    //  console.log(imgArray[i].URL);","              ","              setBackground(tumbHolder, imgArray[i].URL);","             ","                    }"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":63},"end":{"row":24,"column":64},"action":"insert","lines":["}"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":24},"end":{"row":26,"column":39},"action":"remove","lines":["console.log(o);"]}]}],[{"group":"doc","deltas":[{"start":{"row":41,"column":5},"end":{"row":41,"column":6},"action":"remove","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":41,"column":5},"end":{"row":41,"column":6},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":41,"column":5},"end":{"row":41,"column":6},"action":"remove","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":41,"column":5},"end":{"row":41,"column":6},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":13},"end":{"row":35,"column":14},"action":"remove","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":41,"column":3},"end":{"row":41,"column":4},"action":"insert","lines":["}"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":16},"end":{"row":32,"column":17},"action":"remove","lines":["}"]}]}],[{"group":"doc","deltas":[{"start":{"row":41,"column":2},"end":{"row":41,"column":4},"action":"remove","lines":[" }"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":23},"end":{"row":31,"column":57},"action":"insert","lines":[" obj.content.innerHTML =\"\";","                var parser = new DOMParser();","                var feed = parser.parseFromString(xhr.responseText, \"text/html\");","","                console.log(feed.firstChild);","                obj.content.appendChild(feed.firstChild);"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":23},"end":{"row":33,"column":0},"action":"insert","lines":["",""]},{"start":{"row":33,"column":0},"end":{"row":33,"column":23},"action":"insert","lines":["                       "]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":23},"end":{"row":34,"column":0},"action":"insert","lines":["",""]},{"start":{"row":34,"column":0},"end":{"row":34,"column":23},"action":"insert","lines":["                       "]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":23},"end":{"row":34,"column":49},"action":"insert","lines":["var windowCenter = document.querySelectorAll(\".windowcenter\");","                    console.log(windowCenter[o]);"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":16},"end":{"row":30,"column":45},"action":"remove","lines":["console.log(feed.firstChild);"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":16},"end":{"row":31,"column":27},"action":"remove","lines":["obj.content"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":16},"end":{"row":31,"column":28},"action":"insert","lines":["windowCenter"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":28},"end":{"row":31,"column":30},"action":"insert","lines":["[]"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":29},"end":{"row":31,"column":30},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":22},"end":{"row":33,"column":85},"action":"remove","lines":[" var windowCenter = document.querySelectorAll(\".windowcenter\");"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":16},"end":{"row":30,"column":79},"action":"insert","lines":[" var windowCenter = document.querySelectorAll(\".windowcenter\");"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":16},"end":{"row":30,"column":17},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":23},"end":{"row":26,"column":50},"action":"remove","lines":[" obj.content.innerHTML =\"\";"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":21},"end":{"row":15,"column":27},"action":"remove","lines":["Images"]},{"start":{"row":15,"column":21},"end":{"row":15,"column":22},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":22},"end":{"row":15,"column":23},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":23},"end":{"row":15,"column":24},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":21},"end":{"row":15,"column":22},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":21},"end":{"row":15,"column":22},"action":"insert","lines":["R"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":27},"end":{"row":16,"column":0},"action":"insert","lines":["",""]},{"start":{"row":16,"column":0},"end":{"row":16,"column":11},"action":"insert","lines":["           "]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":11},"end":{"row":16,"column":12},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":12},"end":{"row":16,"column":13},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":13},"end":{"row":16,"column":14},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":11},"end":{"row":16,"column":14},"action":"remove","lines":["con"]},{"start":{"row":16,"column":11},"end":{"row":16,"column":18},"action":"insert","lines":["console"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":18},"end":{"row":16,"column":19},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":19},"end":{"row":16,"column":20},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":20},"end":{"row":16,"column":21},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":19},"end":{"row":16,"column":21},"action":"remove","lines":["lo"]},{"start":{"row":16,"column":19},"end":{"row":16,"column":24},"action":"insert","lines":["log()"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":23},"end":{"row":16,"column":25},"action":"insert","lines":["\"\""]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":24},"end":{"row":16,"column":25},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":25},"end":{"row":16,"column":26},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":26},"end":{"row":16,"column":27},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":27},"end":{"row":16,"column":28},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":28},"end":{"row":16,"column":29},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":29},"end":{"row":16,"column":30},"action":"insert","lines":["ö"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":30},"end":{"row":16,"column":31},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":33},"end":{"row":16,"column":34},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":9},"end":{"row":18,"column":22},"action":"remove","lines":["var imgArray;"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":26},"end":{"row":45,"column":91},"action":"remove","lines":["'http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/', true"]},{"start":{"row":45,"column":26},"end":{"row":45,"column":135},"action":"insert","lines":["\"http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url=\"+escape(\"http://www.dn.se/m/rss/senaste-nytt\")"]}]}]]},"ace":{"folds":[],"scrolltop":366,"scrollleft":0,"selection":{"start":{"row":46,"column":19},"end":{"row":46,"column":19},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":25,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1420487357625,"hash":"26583cb93f6346bd835a9577fdef8f56bb08f492"}