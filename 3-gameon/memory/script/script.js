"use strict";
var Memory = {
	pics: [], 
	cols: 4,
	rows: 4,
	
	init: function(){
		var rimg = new RandomGenerator.getPictureArray(Memory.cols, Memory.rows );
		Memory.pics.push(rimg)
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
				a.setAttribute("class",""+ j +"");
				col.setAttribute("class", ""+ counter +"");
				
				img.setAttribute("src","pics/0.png");
				a.setAttribute("href","#");
				a.addEventListener('click', function(){
					// var number = document.getElementsByClassName( ""+ counter +""); 
					//  var num = 0;
     //       			number.setAttribute("src","pics/"+Memory.pics[0][num]+".png");
     //       			num++;
     alert("hoj");
        		});
			
				a.appendChild(img);
				col.appendChild(a);
				row.appendChild(col);


			}
			table.appendChild(row);
			wrapper.appendChild(table);
		}

	
		
		
		

	}

}
window.onload = Memory.init;
