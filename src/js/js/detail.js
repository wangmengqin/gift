define(["jquery","cookie","layer"],function(){
	function init(){
		$(function(){
			$.ajax({
				url: '../json/data.json',
				type: 'get',
				dataType: 'json',
				success:function(data){
					var url = location.href;
					var arr = url.split("?");
					var id = arr[1];
					var his = {};
					if($.cookie("history")){
						his = JSON.parse($.cookie("history"));
					}
					if(!his[id]){
						his[id] = 1;
						$.cookie("history",JSON.stringify(his),{path:"/",expires:7});
					}
					var str = '';
					var str1 = '';
					var str2 = '';
					var str3 = '';
					for(var i=0;i<data.length;i++){
						if(id==data[i].id){
							for(var j in data[i].giftitems){
								str1+='<a href="##">'+data[i].giftitems[j]+'</a>';
							}
							for(var j in data[i].giftcolor){
								str2+='<a href="##">'+data[i].giftcolor[j]+'</a>';
							}
							for(var j in data[i].detail){
								str3+='<img src="'+data[i].detail[j]+'"/>';
							}
							str+='<div class="con-nav"><p class="fleft"><a href="../index.html">首页</a>/<a href="#">'+data[i].title+'</a></p><p class="fright"><span>服务热线：400-611-2156 (8:00－24:00)</span><a href="#" class="inline">QQ在线交谈</a></p></div><div class="product-bg"><div class="product-box"><div class="fleft"><div id="small-box"><img src="'+data[i].small1+'" class="small" data-url="'+data[i].middle1+'"><img src="'+data[i].small2+'" class="small" data-url="'+data[i].middle2+'"><img src="'+data[i].small3+'" class="small" data-url="'+data[i].middle3+'"><img src="'+data[i].small4+'" class="small" data-url="'+data[i].middle4+'"><img src="'+data[i].small5+'" class="small" data-url="'+data[i].middle5+'"><img src="'+data[i].small6+'" class="small" data-url="'+data[i].middle6+'"></div><div id="middle-box"><p id="filter"></p><img src="'+data[i].middle1+'" class="middle" width="500" height="500"></div><div id="max-box"><img src="'+data[i].middle1+'" class="large" width="800" height="800"></div></div><div class="fright"><h3>'+data[i].title+'</h3><p class="describe">'+data[i].describe+'</p><p class="price"><strong>'+data[i].price+'</strong><em>有现货</em></p><div class="kind" data-id="'+data[i].id+'"><p class="kinditems">礼物款式：'+str1+'</p><p class="kindcolor">礼物颜色：'+str2+'</p><p class="kindspecial">个性定制：<a href="##">直接购买</a><a href="##">个性定制</a></p><p><a href="##" class="addShop" id="addShop">直接购买</a><a href="#" id="addCollect" class="collect"><i></i></a></p></div><p class="lookfor"><a href="##"><i></i>查看更多同类商品</a></p></div></div></div><div class="detail-bg"><div class="detail-title"><a href="##">礼品详情</a><a href="#specification">规格参数</a><a href="##">评价晒单('+data[i].evaluate+')</a><a href="##">咨询('+data[i].evaluate+')</a></div></div><div class="detail"><p class="explain">当天下午5点之前的订单当天发货</p><p>'+str3+'</p></div>'
						}
						$("#content").html(str);
					}
					//小图切换大图
					$("#small-box").mouseover(function(e) {
						var target = $(e.target);
						if(target.attr("class")=="small"){
							var url = target.attr("data-url");
							$('#small-box>img').css("border-color","#e6e6e6")

							//target.addClass('small active');
							 target.css("border-color","#d93732");
							$(".middle").attr("src",url);
							$(".large").attr("src",url);
						}
					});
					//放大镜
					$("#middle-box").mouseover(function() {
						$("#filter").css("display","block");
						$("#max-box").css("display","block");
						$("#middle-box").mousemove(function(e) {
							var target = $(e.target);
							var offset = $(".middle").offset();
							var x = e.pageX - offset.left - $("#filter").outerWidth()/2;
							var y = e.pageY - offset.top - $("#filter").outerHeight()/2 ;
							if(x<=0){
								x=0;
							}
							if(x>=$(".middle").outerWidth()- $("#filter").outerWidth()){
								x = $(".middle").outerWidth()- $("#filter").outerWidth();
							}
							if(y<=0){
								y=0;
							}
							if(y>=$(".middle").outerHeight()- $("#filter").outerHeight()){
								y = $(".middle").outerHeight()- $("#filter").outerHeight();
							}
							$("#filter").css({
								left: x,
								top: y
							});
							$(".large").css({
								left: -2*x,
								top: -2*y
							});
						});
					});
					$("#middle-box").mouseout(function(e) {
						$("#filter").css("display","none");
						$("#max-box").css("display","none");
					});
					//加入购物车
					var obj = {};
					var arr = [];
					var count = 0;
					$(".kinditems").on('click', 'a', function(e) {
						var target = $(e.target);
						count++;
						if(count%2!=0){
							target.css({
								"border-color": '#d93732',
								"color": '#d93732'
							});
							arr[0] = target.html();
						}else{
							$(".kinditems>a").css({
								"border-color": '#e6e6e6',
								"color": '#333'
							})
							arr[0] = null;
						}
						console.log(arr);
					});
					var count1 = 0;
					$(".kindcolor").on('click', 'a', function(e) {
						var target = $(e.target);
						count1++;
						if(count1%2!=0){
							target.css({
								"border-color": '#d93732',
								"color": '#d93732'
							});
							arr[1] = target.html();
						}else{
							$(".kindcolor>a").css({
								"border-color": '#e6e6e6',
								"color": '#333'
							})
							arr[1] = null;
						}
						console.log(arr);
					});
					var count2=0;
					$(".kindspecial").on('click', 'a', function(e) {
						var target = $(e.target);
						count2++;
						if(count2%2!=0){
							target.css({
								"border-color": '#d93732',
								"color": '#d93732'
							});
							arr[2] = target.html();	
						}else{
							$(".kindspecial>a").css({
								"border-color": '#e6e6e6',
								"color": '#333'
							})
							arr[2] = null;
						}
						console.log(arr);
					});
					$(".kind").on('click', 'a', function(e) {
						var target = $(e.target);
						if(target.attr("class") == "addShop"){
							var id = target.parent().parent().attr("data-id");
							if($.cookie("shop")){
								obj = JSON.parse($.cookie("shop"));
							}
							if(!obj[id]){
								if(arr[0]!=null&&arr[1]!=null&&arr[2]!=null){
									arr[3] = 1;
									obj[id] = arr;
								}else{
									alert("请选择规格");
								}
								console.log(obj);
								$.cookie("shop",JSON.stringify(obj),{path:"/",expires:7});
								layer.msg('成功添加');
							}else{
								var n = obj[id][3];
								n++;
								if(arr[0]!=null&&arr[1]!=null&&arr[2]!=null){
									arr[3] = n;
									obj[id] = arr;
								}else{
									alert("请选择规格")
								}
								
								console.log("exit",obj);
								$.cookie("shop",JSON.stringify(obj),{path:"/",expires:7});
								layer.msg('成功添加');
							}
							console.log($.cookie("shop"));
						}
					});
					//收藏商品
					var pro = {};
					$(".collect").click(function() {
						var id = $(this).parent().parent().attr("data-id");
						if($.cookie("collect")){
								pro = JSON.parse($.cookie("collect"));
							}
						if(!pro[id]){
							pro[id] = 1;
							$.cookie("collect",JSON.stringify(pro),{path:"/",expires:7});
							console.log($.cookie("collect"));
						}
					});
				}
			});
		});
	}
	return {
		init:init
	}
})