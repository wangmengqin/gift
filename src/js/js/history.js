define(["jquery","cookie"],function(){
	function init(){
		$(function(){
			var historyCookie = {};
			if($.cookie("history")){
				historyCookie = JSON.parse($.cookie("history"));
			}
			$.ajax({
				url: '../json/data.json',
				type: 'get',
				dataType: 'json',
				success:function(data){
					var str = '';
					for(var i in historyCookie){
						for(var j in data){
							if(i == data[j].id){
								str+='<li data-id="'+data[j].id+'"><a href="#"><img src="'+data[j].img+'"></a><p class="list-title">'+data[j].title+'</p><p>'+data[j].price+'</p><p class="list-sort"><span class="fleft">可定制</span><em class="fright">'+data[j].evaluate+'人评价</em></p></li>'
							}
						}
					}
					$("#history-list").html(str);
					$("#history-list>li").click(function() {
						console.log($(this));
						var id = $(this).attr("data-id");
						location.href="detail.html?"+id;
					});
				}
			})
		})
	}
	return {
		init:init
	}
})