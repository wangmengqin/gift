define(["jquery","cookie"],function(){
	function init(){
		$(function(){
			$.ajax({
				url: '../json/data.json',
				type: 'get',
				dataType: 'json',
				success:function(data){
					if($.cookie("collect")){
						var product = JSON.parse($.cookie("collect"));
						var str = '';
						for(var i in product){
							for(var j in data){
								if(i == data[j].id){
									str+='<li data-id="'+data[j].id+'"><a href="#"><img src="'+data[j].img+'"></a><p class="product-title"><a href="#">'+data[j].title+'</a></p><p>'+data[j].price+'</p><p class="pdel"><a href="##" class="delbtn"><i></i></a></p></li>';
								}
							}
						}
						$("#collect-list").html(str);
						$("#collect-list>li").mouseover(function() {
							$(this).find(".delbtn").css("display","block");
							$(this).css("border-color","#eee");
							var _this = $(this);
							$(this).find(".delbtn").click(function(){
								_this.remove();
								var sId = _this.attr("data-id");
								var list = JSON.parse($.cookie("collect"));
								delete list[sId];
								$.cookie("collect",JSON.stringify(list),{path:"/",expires:7});
							})
						});
						$("#collect-list>li").mouseout(function() {
							$(this).find(".delbtn").css("display","none");
							$(this).css("border-color","#fff");
						});
						$("#collect-list>li").click(function() {
							var id = $(this).attr("data-id");
							location.href="detail.html?"+id;
						});
					}
				}
			})
			
		})
	}
	return {
		init:init
	}
})