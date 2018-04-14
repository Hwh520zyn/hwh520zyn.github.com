define(["main"],function(){
	return {
		closeTopimg : function(){
			$(".close").click(function(){
				$(".topImg-box").css( {"display":"none"} );
			})
		},
		hoverMore : function(){
			$(".hoverMo").mouseenter(function(){
				$(".more-spl").show().css( { "zIndex":1 } );
				$(this).find("em").html("∧");
			}).mouseleave(function(){
				$(".more-spl").hide().css( { "zIndex":1 } );
				$(this).find("em").html("∨");
			})
		},
		focusDisappear : function(){
			$(".seartxt").focus(function(){
				$(".search-bar").css({"display":"none"});
			}).blur(function(){
				$(".search-bar").css({"display":"block"});
			})
		},
		bannerPlay : function(){
			var timer=setInterval( autoPlay, 3000 );
			var index=0;
			function autoPlay(){
				index++;
				if( index==$(".bannerlist li").length ){
					index=0;
				}
				
				$(".banner-index li").eq(index).addClass("current").siblings().removeClass();
				$(".bannerlist li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
			}
		}
		
		
		
		
		
		
		
		
		
	}
})