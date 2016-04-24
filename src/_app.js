


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
	

class App {
  
	constructor(){
		window.addEventListener("load", () => {this.init()});
	}


	mouse_down(){
		this.stage.addEventListener("stagemousedown", (evt) =>  {
			this.r = new createjs.Shape();
			this.stage.addChild(this.r);			
			this.sayHello = this.mouse_move.bind(this);
			this.stage.addEventListener("stagemousemove",this.sayHello);
		})    

	}

	mouse_up(){
		this.stage.addEventListener("stagemouseup", (evt) =>  {
			this.color = createjs.Graphics.getHSL(Math.random()*360, 100, 50);
			this.size = 2;
			this.oldX = 0;
			this.oldY = 0;
			this.stage.removeEventListener("stagemousemove",this.sayHello);
		})

	}

	mouse_move(evt){
		if (this.oldX) {
			this.r.graphics.beginStroke(this.color)
						  .setStrokeStyle(this.size, "round")
						  .moveTo(this.oldX, this.oldY)
						  .lineTo(evt.stageX, evt.stageY).closePath();		 
			this.stage.update();
		}
		this.oldX = evt.stageX;
		this.oldY = evt.stageY;
	}

	init(){

		this.oldX
		this.oldY
		this.shape2
		this.b
		this.b = 0;
		this.r = null;




		this.stage = new createjs.Stage("a");

		this.stage.canvas.width = 2000;
		this.stage.canvas.height = 9000;


		this.stage.enableDOMEvents(true);
		var label = new createjs.Text("finger paint", "24px Arial");
		label.x = label.y = 10;
		var shape2 = new createjs.Shape();
		this.stage.addChild(shape2, label);
		this.color = "#0FF";
		this.size = 10;
		this.mouse_down();
		this.mouse_up(); 
  		this.stage.update();


	}

}





new App();















