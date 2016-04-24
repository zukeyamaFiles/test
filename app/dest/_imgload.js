"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.requestAnimationFrame = function () {
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback, element) {
				window.setTimeout(callback, 1000 / 60);
		};
}();

var Loder = function () {
		function Loder() {
				var _this = this;

				_classCallCheck(this, Loder);

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

				for (var i = 0; i < label_.length; i++) {

						this.p[i] = new createjs.Text(label_[i], "24px san-serif");

						this.p[i].x += 25 * i;

						this.stage.addChild(this.p[i]);
				}

				this.set(this.bit, 500, 100);
				this.set(this.bit2, 100, 50);

				load.addEventListener("fileload", function (evt) {
						_this.stage.update();
				});
		}

		_createClass(Loder, [{
				key: "set",
				value: function set(instanc, x, y) {

						instanc.x = x;
						instanc.y = y;
						this.stage.addChild(instanc);
				}
		}, {
				key: "draw",
				value: function draw() {}
		}, {
				key: "addEv",
				value: function addEv() {
						var _this2 = this;

						window.addEventListener("keydown", function (evt) {

								var j = "S".charCodeAt();

								console.log(evt.keyCode);

								if (j == evt.keyCode) {
										_this2.p[2].rotation -= 20;
								}

								_this2.stage.update();
						});
				}
		}]);

		return Loder;
}();

new Loder().addEv();