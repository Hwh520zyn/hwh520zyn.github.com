//根据id查找页面元素
function $id( id ){
	return document.getElementById( id );
}


//获取任意区间
function rand( min,max ){
	return Math.round(  Math.random()*(max-min)+min  );
}

//随机颜色值获取
function getColor(){
	var str = "0123456789abcdef";
	var color = "#";
	for( var i =1 ; i <= 6 ; i++ ){
		color += str.charAt( rand(0,15) );
	}
	return color;
}




//日期时间格式封装
function dateToString( sign ){
		sign =sign || "-";
		var d=new Date();
		var y=d.getFullYear();
		var m= toTwo(d.getMonth()+1);
		var _date= toTwo( d.getDay());
		var h= toTwo(d.getHours());
		var min= toTwo(d.getMinutes());
		var s= toTwo(d.getSeconds());
		return y+ "/"+ m + "/"+  _date + "  "+h+":"+min+":"+s;
	}
	function toTwo(val){
		return val<10 ?  "0"+val : val;
	}
	
	//时间差函数
	function timeDiff( start,end ){
		return Math.abs( start.getTime()-end.getTime() )/1000;
	}
	
	
	//动态创建元素
	function create(ele ){
		return document.createElement( ele );
	}

//获取cookie
function setCookie(key ,value, day){
	if( day ){
		var d=new Date();
		d.setDate( d.getDate() + day );
		document.cookie="key" + "=" +"value" + ";expires=" +d;
	}else{
			document.cookie="key" + "=" +"value" ;
	}
}
//获取cookie
function getCookie( key ){
	if(document.cookie){
		var  str=document.cookie;
		var  arr=str.split( "; " );
		for( var i=0; i<arr.length; i++ ){
			var  item= arr[i].split( "=" );
			if( item=="key" ){
				return item[1];
			}
		}
		return "";
	}
	return "";
}

//删除cookie
function delCookie(  ){
	setCookie(key ,"", -1);
}

//碰撞检测
		function  pz(obj1 , obj2){ 
			if( obj1.offsetTop+obj1.offsetHeight>=obj2.offsetTop&&
				obj1.offsetLeft+obj1.offsetWidth>=obj2.offsetLeft&&
				obj2.offsetTop+obj2.offsetHeight >=obj1.offsetTop &&
				obj2.offsetLeft+obj2.offsetWidth >=obj1.offsetLeft )
			{
				return true;
			}else{
				return false;
			}
		}


//obj要操作的对象
//json[attr]  目标值
// attr  操作的样式属性
// callback 表示一个函数    一个函数作为参数，这样的函数 叫做   回调函数
function startMove( obj, json, callback ){
	clearInterval( obj.timer );
	obj.timer=setInterval( function(){
		var flag=true;
		for( var attr in json ){  
					var current=0;
					if( attr=="opacity" ){
						current=parseFloat( getStyle( obj, attr ) )*100;
					}else if(attr=="zIndex"){
						current=parseInt( getStyle( obj, attr ) );
					} else{
						current=parseInt( getStyle( obj, attr ) );
					}
				
				var speed=(json[attr]-current)/10;
				speed=speed>0 ? Math.ceil( speed ) : Math.floor( speed );
				if( json[attr]!=current ){
					flag=false;
				}
				
				if( attr=="opacity" ){
							obj.style[ attr ]=(current+speed)/100;
					}else if(attr=="zIndex"){
							obj.style[ attr ]=json[ attr ];
					} else{
							obj.style[ attr ]=current+speed +"px";
					}
				}
		
				if( flag ){
					clearInterval( obj.timer );
					if( callback ){
						callback();
					}
				}
				
	   	
	},30 )
}
//获取非行间样式
function getStyle( obj, attr ){
	if( window.getComputedStyle ){
		return window.getComputedStyle( obj,false )[ attr ];
	}else{
		return obj.currentStyle[ attr ]
	}
}

//ajax的封装
function ajaxGet( url, callback, date ){
	if( window.XMLHttpRequest ){
		ajax=new XMLHttpRequest();
	}else{
		ajax=new ActiveXObject("Microsoft.XMLHTML");
	}
	if( date ){
		url=url + "?"  +date;
	}
	ajax.open( "get", url );
	ajax.send();
	ajax.onreadystatechange=function(){
		if( ajax.readyState==4 && ajax.status==200 ){
			callback(ajax.responseText);
		}
	}
}

//获取随机n位验证码（n=length）
	function randCode(length) {
	    var str = Math.random().toString(36).substr(2);
	    if (str.length>=length) {
	        return str.substr(0, length);
	    }
	    str += random(length-str.length);
	    return str;
	}
