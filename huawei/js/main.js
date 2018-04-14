requirejs.config({
	paths : {
		jquery : "jquery-1.11.1.min",
		index : "index"
	}
})

requirejs( ["jquery","index"],function($,index){
	//关闭top图片
	index.closeTopimg();
	//划过更多精彩
	index.hoverMore();
	//聚焦搜索框
	index.focusDisappear();
	//轮播图
	index.bannerPlay();
})
