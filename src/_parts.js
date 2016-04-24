
module.exports = function () { // 外部から呼べるようにexportsする








class Pw {

  constructor() {
	this.name = "テストだよ";
  }

  say(){

  	return this.name;

  }
}



	var hh = new Pw();




    return hh.say();
};

