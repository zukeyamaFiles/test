

window.requestAnimationFrame = (function(){
	return window.requestAnimationFrame		||
		window.webkitRequestAnimationFrame	||
		window.mozRequestAnimationFrame		||
		window.oRequestAnimationFrame		||
		window.msRequestAnimationFrame		||
		function(callback, element){
			window.setTimeout(callback, 1000 / 60);
		};
})();
	

class Loder {
  

	constructor(){

		this.stage = new createjs.Stage("a");
		this.stage.canvas.width = 1000;
		this.stage.canvas.height = 3000;
		this.bit = new createjs.Bitmap("../html/img/01.jpg");

		this.bit2 = new createjs.Bitmap("../html/img/01.jpg");
		var load = new createjs.LoadQueue(false);


		load.loadFile("../html/img/01.jpg");


		

var labelw = new createjs.Text("fslhnftg;", "24px san-serif");







		var label_ = "もんしろちょう";

		label_ = label_.split("");



		this.p = [];

		for(var i = 0; i < label_.length; i++){

			

			this.p[i] = new createjs.Text(label_[i], "24px san-serif");





			this.p[i].x += 25*i;






			this.stage.addChild(this.p[i]);

		}


	
	

		this.set(this.bit,500,100);
		this.set(this.bit2,100,50);


		load.addEventListener("fileload", (evt) =>  {
			this.stage.update();
		})

		
	}

	set (instanc,x,y){

		instanc.x = x;
		instanc.y = y;
		this.stage.addChild(instanc);
	}

	draw (){


	}




	addEv (){




	



		window.addEventListener("keydown", (evt) =>  {

			


			
			

			var j = "S".charCodeAt();






		

			console.log(evt.keyCode)
			
			if(j == evt.keyCode) {
				this.p[2].rotation -= 20;
			}



			this.stage.update();


		})

	}

}



new Loder().addEv();

















