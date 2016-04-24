
;(function($){
	var slide_val = {};
	var prifix = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
	var prefix_trans;
	var callback;
	var pre;

	var setting = {
		prev: ".vri-prev",
		next: ".vri-next",
		slide_block: ".vri-carousel-list",
		page_cnt: ".vri-cnt-page",
		current_length: ".current-length",
		all_length: ".all-length",
		slide_length: 5
	}

	var setting4 = {
		prev: ".vri-prev2",
		next: ".vri-next2",
		slide_block: ".vri-carousel-list2",
		page_cnt: ".vri-cnt-page2",
		current_length: ".current-length2",
		all_length: ".all-length2",
		slide_length: 5
	}


	var setting5 = {
		prev: ".vri-prev3",
		next: ".vri-next3",
		slide_block: ".vri-carousel-list3",
		page_cnt: ".vri-cnt-page3",
		current_length: ".current-length3",
		all_length: ".all-length3",
		slide_length: 5
	}


	var setting2 = {
		prev: ".pic-prev",
		next: ".pic-next",
		slide_block: ".pict-list",
		page_cnt: ".pic-cnt-page",
		current_length: ".pic-length",
		all_length: ".pic-all-length",
		slide_length: 1
	}



/*
function new_db_carousel(setting){
	return (this instanceof new_db_carousel) ?
	this.init(setting) :
	new new_db_carousel(setting);
}
*/




function new_db_carousel(setting){
	return (this instanceof new_db_carousel) ?
	this.init(setting) :
	new new_db_carousel(setting);
}


new_db_carousel.prototype.init = function(setting){
	//if(this.length == 0 ) return;
	var slide_val = {};
	var prifix = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
	var prefix_trans;
	var callback;
	var pre;
	this.vri_prev = $(setting.prev);
	this.vri_next = $(setting.next)
	this.vri_carousel_list = $(setting.slide_block);
	this.vri_li = this.vri_carousel_list.find("li");
	this.vri_cnt_page = $(setting.page_cnt);
	this.current_length = $(setting.current_length);
	this.all_length = $(setting.all_length);
	this.vri_all = $(".vri-all").find("span");
	this.slide_val = undefined;
	this.li_width = this.vri_li.width();
	this.li_len = this.vri_li.length;
	this.li_m = this.vri_li.css("margin-right");
	this.ul_init_w = (this.li_width * this.li_len) + (parseFloat(this.li_m) * (this.li_len));
	this.slide_w = (this.li_width * setting.slide_length) + (parseFloat(this.li_m) * setting.slide_length);
	this.slide_length = 1;
	this.pager_length = Math.ceil(this.ul_init_w/this.slide_w);
	this.all_length.html(this.pager_length);
	this.vri_all.html(this.li_len);
	this.vri_carousel_list.css("width",this.ul_init_w);
	if(this.slide_val === undefined || 0) {
		this.vri_prev.addClass("disabled");
	}
	if(this.slide_w >= this.ul_init_w) {
	 this.vri_next.addClass("disabled");
	}
	if(this.li_len <= setting.slide_length) {
		this.vri_next.hide();
		this.vri_prev.hide();
	}
	var pre;
	for (var i = 0; i < prifix.length; i++) {
		if (this.vri_carousel_list[0].style[prifix[i]] !== undefined) {
			pre = prifix[i].replace('Perspective', '');
			this.prefix_trans = pre + 'Transform';
		}
	}
this.addAction();



}











new_db_carousel.prototype.addAction = function(){
		this.callback = this.addActionDetail.bind(this);
		this.vri_prev.bind("click",this.callback);/*イベント登録*/
		this.vri_next.bind("click",this.callback);
}

new_db_carousel.prototype.slide = function(e){
var _this = this;

	if(e.className.match("prev")) {
		if(this.slide_val === undefined || this.slide_val === 0) return false;　/*イベント登録*/
		this.current_length.html(this.current_length.text() - this.slide_length);
		this.vri_prev.unbind("click");
		this.vri_carousel_list[0].style[this.prefix_trans] = "translate3d("+ this.moveposition(e.className.match("prev")) +"px,0,0)"

		/*スライドアニメーション終了時*/
		this.vri_carousel_list.bind("webkitTransitionEnd transitionend",function(){
			if(_this.slide_val === undefined || _this.slide_val === 0) {
			 _this.vri_prev.addClass("disabled");
			}
			if(Math.abs(this.slide_val) <= _this.ul_init_w - _this.slide_w) {
			 _this.vri_next.removeClass("disabled");
			}
			_this.vri_prev.bind("click",_this.callback);
			_this.vri_carousel_list.unbind("webkitTransitionEnd transitionend");
		})

	} else {

		if(Math.abs(this.slide_val) >= this.ul_init_w - this.slide_w || this.slide_w  >= this.ul_init_w) return false;
		this.vri_next.unbind("click");
		this.vri_carousel_list[0].style[this.prefix_trans] = "translate3d("+ this.moveposition(e.className.match("prev")) +"px,0,0)"
		//this.current_length.html(parseInt(this.current_length.text()) + this.slide_length);
		/*スライドアニメーション終了時*/
		this.vri_carousel_list.bind("webkitTransitionEnd transitionend",function(){
			if(_this.slide_val !== undefined || _this.slide_val !== 0) {
			 _this.vri_prev.removeClass("disabled");
			}
			if(Math.abs(_this.slide_val) >= _this.ul_init_w - _this.slide_w) {
			 _this.vri_next.addClass("disabled");
			}
			_this.vri_next.bind("click",_this.callback);
			_this.vri_carousel_list.unbind("webkitTransitionEnd transitionend");
		})
	}
}

new_db_carousel.prototype.moveposition = function(el){
	/*
	ボタンクリック時に最初にくクリックした時(undefined時)、prev,nextクリック時にスライドの移動値を渡す
	*/
	this.slide_val = this.slide_val === undefined ? -this.slide_w: el ? (parseInt(this.slide_val,10)+this.slide_w) : (parseInt(this.slide_val,10)-this.slide_w);
	return this.slide_val;
}

new_db_carousel.prototype.addActionDetail = function(e){

	this.slide(e.target);
}



$(function(){

new_db_carousel(setting);

new_db_carousel(setting4);
new_db_carousel(setting5);
})


})(jQuery);
