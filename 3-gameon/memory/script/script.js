"use strict";
var Memory = {
	pics: [], 
	cols: 4,
	rows: 4,
	pressed: [],
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
				if(Memory.pressed[0] == Memory.pressed[1]){
					
					alert("hoj");
				}
				else
				{
					var imgtag = document.getElementsByClassName("press");
					// console.log(imgtag);
					for(var k = 0; k > imgtag; k++ ){
					document.getElementsByTagName("img")[k].setAttribute("src","pics/0.png");
					}// imgtag.img.setAttribute("");			
					Memory.pressed = [];
				}
			};
        	
	},
	cardChecker: function(imgclass, imgclass2){
		
	}
	

}
window.onload = Memory.init;
