"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.requestAnimationFrame = function () {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback, element) {
		window.setTimeout(callback, 1000 / 60);
	};
}();

var App = function () {
	function App() {
		var _this = this;

		_classCallCheck(this, App);

		window.addEventListener("load", function () {
			_this.init();
		});
	}

	_createClass(App, [{
		key: "mouse_down",
		value: function mouse_down() {
			var _this2 = this;

			this.stage.addEventListener("stagemousedown", function (evt) {
				_this2.r = new createjs.Shape();
				_this2.stage.addChild(_this2.r);
				_this2.sayHello = _this2.mouse_move.bind(_this2);
				_this2.stage.addEventListener("stagemousemove", _this2.sayHello);
			});
		}
	}, {
		key: "mouse_up",
		value: function mouse_up() {
			var _this3 = this;

			this.stage.addEventListener("stagemouseup", function (evt) {
				_this3.color = createjs.Graphics.getHSL(Math.random() * 360, 100, 50);
				_this3.size = 2;
				_this3.oldX = 0;
				_this3.oldY = 0;
				_this3.stage.removeEventListener("stagemousemove", _this3.sayHello);
			});
		}
	}, {
		key: "mouse_move",
		value: function mouse_move(evt) {
			if (this.oldX) {
				this.r.graphics.beginStroke(this.color).setStrokeStyle(this.size, "round").moveTo(this.oldX, this.oldY).lineTo(evt.stageX, evt.stageY).closePath();
				this.stage.update();
			}
			this.oldX = evt.stageX;
			this.oldY = evt.stageY;
		}
	}, {
		key: "init",
		value: function init() {

			this.oldX;
			this.oldY;
			this.shape2;
			this.b;
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
	}]);

	return App;
}();

new App();