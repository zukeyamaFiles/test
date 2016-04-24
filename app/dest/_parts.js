"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  // 外部から呼べるようにexportsする

  var Pw = function () {
    function Pw() {
      _classCallCheck(this, Pw);

      this.name = "テストだよ";
    }

    _createClass(Pw, [{
      key: "say",
      value: function say() {

        return this.name;
      }
    }]);

    return Pw;
  }();

  var hh = new Pw();

  return hh.say();
};