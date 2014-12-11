"use strict";
var Memory = {
	pics: [], 
	cols: 4,
	rows: 4,
	pressed: [],
	rightpics: [],
	init: function(){
		//var rimg 
		Memory.pics =  RandomGenerator.getPictureArray(Memory.cols, Memory.rows );
		//.push(rimg)
		console.log(Memory.pics);
		console.log("46");
		Memory.renderGame();
	},
	renderGame: function(){

		var table = document.createElement("table");
		var wrapper = document.getElementById("wrapper")
		
		for(var i = 0; i < Memory.rows; ++i){
		var row = document.createElement("tr");
		
		
			for (var j = 0; j < Memory.cols; ++j) {
				var col = document.createElement("td");
				var a = document.createElement("a");
				var img = document.createElement("img");
				
				var counter = (i*Memory.cols)+j;
				//a.setAttribute("class",""+ j +"");
				var imageclass = Memory.pics[counter];
				img.setAttribute("class",imageclass );
				
				img.setAttribute("src","pics/0.png");
				a.setAttribute("href","#");
				a.setAttribute("class","classtag");
				a.appendChild(img)
				col.appendChild(a);
				row.appendChild(col);
				a.addEventListener('click', Memory.card);

			}
			table.appendChild(row);
			wrapper.appendChild(table);
		}

	
		
		
		

	},
	card: function(){
					
					var imgclass = this.firstChild;
					var imgpath = imgclass.getAttribute("class")
						console.log(this.firstChild);
			imgclass.setAttribute("src","pics/"+imgpath+".png");
			imgclass.className += " press";
			Memory.pressed.push(imgclass);
			
			console.log(Memory.pressed)
			if (Memory.pressed.length > 1) {
				var class1 = Memory.pressed[0].getAttribute("class");
				var class2 = Memory.pressed[1].getAttribute("class");
				var element1 =  Memory.pressed[1];
				var element2 = Memory.pressed[0];

				if( class1 === class2 ){
					element2.setAttribute("class","right");
					element1.setAttribute("class","right");
					console.log(element1);
					console.log(element2);
					Memory.rightpics.push(element1,element2);
					console.log(Memory.rightpics);
					Memory.pressed = [];
					//alert("hoj");
				}
				else
				{
					var imgtag = document.getElementsByClassName("press");
					console.log(Memory.renderGame.a);
					var atags = document.querySelectorAll(".classtag");
					console.log(atags);
					for(var m = 0; m < atags.length; m++){
					atags[m].removeEventListener("click", Memory.card);
					}
					setTimeout(function(){
						for(var l = 0; l < imgtag.length; l++){
						imgtag[l].setAttribute("src","pics/0.png");
						imgclass.className + " press";
					}
						imgtag = [];
						Memory.pressed = [];
						console.log(imgtag);
						console.log(Memory.pressed);
					}, 1000); 
					
					
								
					Memory.pressed = [];
				}
			};
        	
	},
	cardChecker: function(imgclass, imgclass2){
		
	}
	

}
window.onload = Memory.init;
