define(["jquery","cookie"],function(){
	function init(){
		$(function(){
			$(".logo").mouseover(function() {
				$(".logo").animate({
					"backgroundPositionX": "-57px",
					"backgroundPositionY": "0",
					},300);
			});
			$(".logo").mouseout(function() {
				$(".logo").animate({
					"backgroundPositionX": "0",
					"backgroundPositionY": "0",
					},300);
			});
			$.ajax({
				url: '../json/data.json',
				type: 'get',
				dataType: 'json',
				success:function(data){
					var str = '';
					var special = '';
					var sum = 0;
					var count = 0;
					if($.cookie("shop")){
						var cookie = JSON.parse($.cookie("shop")) ;
						for(var i in cookie){
							count++;
							if(cookie[i][2] == "直接购买"){
								special = "普通款";
							}else{
								special = "定制款";
							}
							for(var j in data){
								if(i == data[j].id){
									var str1 = '￥'+cookie[i][3]*data[j].price.slice(1)+'.0';
									sum+=cookie[i][3]*data[j].price.slice(1);
									str+='<li data-id="'+data[j].id+'"><p class="pleft"><img src="'+data[j].small1+'"><span><a href="#">'+data[j].title+'</a><em>礼物款式:'+cookie[i][0]+'</em><em>礼物颜色:'+cookie[i][1]+'</em><em>个性定制:'+special+'</em></span></p><p class="pright"><span>'+data[j].price+'</span><span class="inputspan"><a href="##" class="sub">-</a><input type="text" value="'+cookie[i][3]+'"><a href="##" class="add">+</a></span><span>有库存</span><span>'+str1+'</span><a href="##"><i class="del"></i></a></p></li>'
								}
							}
						}
						$(".shoplist").html(str);
						var s = '￥'+sum+'.0';
						$(".itemprice").find("b").html(s);
						$(".itemnum").find("em").html(count);
					}
					$(".shoplist").on('click', function(e) {
						var target = $(e.target);	
						//加					
						if(target.attr("class")=="add"){
							var num = target.prev().val();
							num++;
							target.prev().val(num);
							var list = JSON.parse($.cookie("shop"));
							var sId = target.parent().parent().parent().attr("data-id");
							list[sId][3] = num;
							$.cookie("shop",JSON.stringify(list),{path:"/",expires:7});
							var price = target.parent().prev().html().slice(1);
							var total = '￥'+Number(num)*Number(price)+'.0';
							sum+=Number(price);
							var s = '￥'+sum+'.0';
							$(".itemprice").find("b").html(s);
							target.parent().next().next().html(total);
						}
						//减
						if(target.attr("class")=="sub"){
							var num = target.next().val();
							if(num<=1){
								num=1;
							}else{
								num--;
							}
							target.next().val(num);
							var list = JSON.parse($.cookie("shop"));
							var sId = target.parent().parent().parent().attr("data-id");
							list[sId][3] = num;
							$.cookie("shop",JSON.stringify(list),{path:"/",expires:7});
							var price = target.parent().prev().html().slice(1);
							var total = '￥'+Number(num)*Number(price)+'.0';
							sum-=Number(price);
							var s = '￥'+sum+'.0';
							$(".itemprice").find("b").html(s);
							target.parent().next().next().html(total);
						}
						//删除
						if(target.attr("class")=="del"){
							target.parent().parent().parent().remove();
							var sId = target.parent().parent().parent().attr("data-id");
							var list = JSON.parse($.cookie("shop"));
							delete list[sId];
							$.cookie("shop",JSON.stringify(list),{path:"/",expires:7});
							sum = 0;
							var s = '￥'+sum+'.0';
							$(".itemprice").find("b").html(s);
						}
					});
				}
			})
			
		})
	}
	return {
		init:init
	}
})