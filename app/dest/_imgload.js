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

				this.time = 0;

				this.tm = $(".t");

				this.timer = setInterval(function () {

						_this.time++;
				}, 1000);

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

				load.addEventListener("fileload", function (evt) {
						_this.stage.update();
				});
		}

		_createClass(Loder, [{
				key: "set",
				value: function set() {

						this.label_ = ["mu", "ika", "ninngenn", "myu", "wani", "sonnakotonaideuyo", "majidesuka", "kinnsidesu", "mouikkaidake", "sounanndeuyone", "ikutudesuka", "matakayo", "wakarimasita", "nannnanndesuka"];

						if (this.arr == 0) {
								this.aa_length = this.label_.length;
						}

						this.label_ = this.label_[this.arr].toUpperCase();

						this.label_ = this.label_.split("");

						this.p = [];

						for (var i = 0; i < this.label_.length; i++) {
								this.p[i] = new createjs.Text(this.label_[i], "34px Arial");
								this.p[i].x += 30 * i;
								this.container.addChild(this.p[i]);
						}

						this.container.y = 100;
						this.container.x = -200;
						this.stage.addChild(this.container);

						createjs.Tween.get(this.container).to({ x: 200 }, 100);

						createjs.Ticker.addEventListener("tick", this.stage);
				}
		}, {
				key: "rest",
				value: function rest() {
						var _this2 = this;

						if (this.arr == this.aa_length - 1) {

								setTimeout(function () {

										_this2.tm.text(_this2.time);

										$("#over").show();
								}, 100);

								return false;
						}
						this.lang = 0;
						this.arr += 1;

						this.set();
				}
		}, {
				key: "addEv",
				value: function addEv() {
						var _this3 = this;

						var rad = Math.atan2(-1, -1);

						var reg = rad * 180 / Math.PI;

						this.lang = 0;

						window.addEventListener("keydown", function (evt) {

								var len = _this3.p.length;

								var code = _this3.p[_this3.lang].text.charCodeAt(0);

								if (code == evt.keyCode) {
										_this3.p[_this3.lang].color = "blue";
										_this3.p[_this3.lang].color = "blue";
										_this3.lang++;

										if (_this3.lang === len) {

												_this3.container.removeAllChildren();
												_this3.stage.update();

												_this3.rest();
										}
								}

								_this3.stage.update();
						});
				}
		}, {
				key: "sound",
				value: function sound() {

						createjs.Sound.registerSound("../html/audio/btn.mp3", "sound01");

						window.addEventListener("keydown", function (evt) {

								loadHandler();
						});

						function loadHandler() {
								// IDを使って再生します。
								createjs.Sound.play("sound01");
						}
				}
		}]);

		return Loder;
}();

new Loder().addEv();