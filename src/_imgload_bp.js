

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


		this.time = 0;

		 this.tm = $(".t");

		

		this.timer = setInterval(()=> {

		this.time++;





		},1000);


		this.stage = new createjs.Stage("a");
		this.stage.canvas.width = 1000;
		this.stage.canvas.height = 3000;
		this.bit = new createjs.Bitmap("../html/img/01.jpg");
		this.arr = 0;
		this.bit2 = new createjs.Bitmap("../html/img/01.jpg");
		var load = new createjs.LoadQueue(false);
		load.loadFile("../html/img/01.jpg");
		var labelw = new createjs.Text("fslhnftg;", "24px san-serif");




		this.container = new createjs.Container();



	


		this.set();

	

		this.sound();


		this.stage.update();

	

		load.addEventListener("fileload", (evt) =>  {
			this.stage.update();
		})

		
	}

	set (){
		


		this.label_ = ["mu","ika","ninngenn","myu","wani","sonnakotonaideuyo","majidesuka","kinnsidesu","mouikkaidake","sounanndeuyone","ikutudesuka","matakayo","wakarimasita","nannnanndesuka"];



		if(this.arr == 0) {
			this.aa_length = this.label_.length;



		}



		this.label_ = this.label_[this.arr].toUpperCase();



		this.label_ = this.label_.split("");



		this.p = [];

		for(var i = 0; i < this.label_.length; i++){
			this.p[i] = new createjs.Text(this.label_[i], "34px Arial");
			this.p[i].x += 30*i;
			this.container.addChild(this.p[i]);

		}

		this.container.y = 100;
		this.container.x = -200;
		this.stage.addChild(this.container)





		createjs.Tween.get(this.container).to({x: 200}, 100);
       


      createjs.Ticker.addEventListener("tick", this.stage);


	}

	rest (){

		if(this.arr == this.aa_length -1) {

			setTimeout(() => {

			this.tm.text(this.time);

			$("#over").show();

			},100)

			return false;

			

		}
		this.lang = 0;
		this.arr += 1;

		this.set();



	}




	addEv (){











var rad = Math.atan2(-1, -1);

var reg = rad*180/Math.PI;


		this.lang = 0;



		window.addEventListener("keydown", (evt) =>  {



			var len = this.p.length;
			
			var code = this.p[this.lang].text.charCodeAt(0);

			
			
			
			if(code == evt.keyCode) {
				this.p[this.lang].color = "blue";
			this.p[this.lang].color= "blue";	
				this.lang++;






				if(this.lang === len) {

		this.container.removeAllChildren();	
			this.stage.update();

					
					

					this.rest();

				}
	
			}



			this.stage.update();


		})

	}



	sound (){


	



		createjs.Sound.registerSound("../html/audio/btn.mp3","sound01");


window.addEventListener("keydown", (evt) =>  {

loadHandler();


	});

	   function loadHandler() {
      // IDを使って再生します。
      createjs.Sound.play("sound01");
    }
		


	}

}



new Loder().addEv();

















