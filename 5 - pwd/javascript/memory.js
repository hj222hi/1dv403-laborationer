"use strict";
var Memory = {
	pics: [], 
	cols: 4,
	rows: 4,
	pressed: [],
	rightpics: [],
	klickcounter: [],
	
	initMemory: function(){
		//var rimg 
		Memory.pics =  RandomGenerator.getPictureArray(Memory.cols, Memory.rows );
		//.push(rimg)
		console.log(Memory.pics);
		console.log("46");
		WindowCapselr.loadCloseButton(variables.windowCounter);
		Memory.renderGame();
	},
	renderGame: function(){

		var table = document.createElement("table");
	
		
		for(var i = 0; i < Memory.rows; ++i){
		var row = document.createElement("tr");
		
		
			for (var j = 0; j < Memory.cols; ++j) {
				var col = document.createElement("td");
				var a = document.createElement("a");
				var img = document.createElement("img");
				var p = document.createElement("p");
				var counter = (i*Memory.cols)+j;
				//a.setAttribute("class",""+ j +"");
				var imageclass = Memory.pics[counter];
				img.setAttribute("class",imageclass );
				p.setAttribute("class","scorep");
				img.setAttribute("src","pics/0.jpg");
				a.setAttribute("href","#");
				a.setAttribute("class","classtag");
				a.flipped = false;
				a.appendChild(img)
				col.appendChild(a);
				row.appendChild(col);
				a.addEventListener('click', Memory.card);

			}
			table.appendChild(row);
			var windowCenter = document.querySelectorAll(".windowcenter");
			var Window = document.querySelectorAll(".window");
			windowCenter[variables.windowCounter].appendChild(table);
			windowCenter[variables.windowCounter].appendChild(p);
			windowCenter[variables.windowCounter].style.height = "639px";
			Window[variables.windowCounter].style.height = "680px";
			Window[variables.windowCounter].style.width = "553px";
			
			
		}

	},
	card: function(){
					
if(this.flipped == false){
	this.flipped = true;
					var imgclass = this.firstChild;
					var imgpath = imgclass.getAttribute("class")
					console.log(imgclass.classList);
						console.log(this.firstChild);
						var imgPathRight = imgclass.classList[0];
			imgclass.setAttribute("src","pics/"+imgPathRight+".jpg");
			imgclass.className += " press";
			Memory.pressed.push(imgclass);
			Memory.klickcounter.push(imgclass);
			var amountOfClicks = Memory.klickcounter.length;
				var scoreHolder = document.querySelectorAll(".scorep");
				scoreHolder[variables.windowCounter].innerHTML="Antal klick " + amountOfClicks;
			
			console.log(Memory.pressed)
			if (Memory.pressed.length > 1) {
				var class1 = Memory.pressed[0].classList[0];
				var class2 = Memory.pressed[1].classList[0];
				var element1 =  Memory.pressed[1];
				var element2 = Memory.pressed[0];

				if( class1 === class2 ){
					this.removeEventListener("click",Memory.card);
					element2.setAttribute("class","right");
					element1.setAttribute("class","right");
					console.log(element1);
					console.log(element2);
					Memory.rightpics.push(element1,element2);
					console.log(Memory.rightpics);
					var amountOfRightPics = Memory.rightpics.length;
					// var scoreHolder document.querySelectorAll(".scorep");
					scoreHolder[variables.windowCounter].innerHTML= "Antal rätt " + amountOfRightPics/2;
					Memory.pressed = [];
					console.log(Memory.rightpics.length);					
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
					element1.parentNode.flipped = false;
					element2.parentNode.flipped = false;
					setTimeout(function(){
						for(var l = 0; l < imgtag.length; l++){
						imgtag[l].setAttribute("src","pics/0.jpg");

						imgclass.className + " press";
						for(var m = 0; m < atags.length; m++){
							atags[m].addEventListener("click", Memory.card);
						}
					}
						imgtag = [];
						Memory.pressed = [];
						console.log(imgtag);
						console.log(Memory.pressed);

					}, 1000); 
					
					Memory.pressed = [];
					
				}
			};
        	Memory.cardChecker();
	}},
	cardChecker: function(){
		if (Memory.rightpics.length === (Memory.cols * Memory.rows)) {
			alert("GRATTIS DU VANN!! ")
		};
		
	}
	

}
// window.onload = Memory.init;
