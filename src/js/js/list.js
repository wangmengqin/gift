define(["jquery","paging"],function(){
	function init(){
		$(function(){
			$.ajax({
				url: '../../json/data.json',
				type: 'get',
				dataType: 'json',
				success:function(data){
					var len = data.length;
					$("#Pagination").pagination(len,{
						//每页显示的数目
						items_per_page:8,
						//左侧显示的页数
						num_display_entries:1,
						//右侧显示的页数
						num_edge_entries:1,
						prev_text:"上一页",	
						next_text:"下一页",			
						callback:function(n){
							
							//内容填充
							var str = '';
							for(var i=n*8;i<Math.min(len,(n+1)*8);i++){
								str+='<li data-id="'+data[i].id+'"><a href="#"><img src="'+data[i].img+'"></a><p class="list-title">'+data[i].title+'</p><p>'+data[i].price+'</p><p class="list-sort"><span class="fleft">可定制</span><em class="fright">'+data[i].evaluate+'人评价</em></p></li>'
							}
							$(".list").html(str);
							//销量
							var arr = [];
							for(var index in data){
								var id = data[index].id;
								var eva =  data[index].evaluate;
								var str=id+":"+eva;
								arr.push(str);
								
							}
							arr = arr.sort(function(a,b){
								return b.split(":")[1]-a.split(":")[1];
							})
							var str1 = '';
							for(var j=n*8;j<Math.min(arr.length,(n+1)*8);j++){
								for(var i=0;i<len;i++){
									if(arr[j].split(":")[0]==data[i].id){
										str1+='<li data-id="'+data[i].id+'"><a href="#"><img src="'+data[i].img+'"></a><p class="list-title">'+data[i].title+'</p><p>'+data[i].price+'</p><p class="list-sort"><span class="fleft">可定制</span><em class="fright">'+data[i].evaluate+'人评价</em></p></li>'
									}
								}
							}
							$("#sortSales").html(str1);
							//按价格排序
							var arr1 = [];
							for(var index in data){
								var id = data[index].id;
								var pri =  data[index].price.slice(1);
								var str=id+":"+pri;
								arr1.push(str);	
							}
							$(".orderup").click(function(){
								arr1 = arr1.sort(function(a,b){
									return a.split(":")[1]-b.split(":")[1];
								})
								var str1 = '';
								for(var j=n*8;j<Math.min(arr1.length,(n+1)*8);j++){
									for(var i=0;i<len;i++){
										if(arr1[j].split(":")[0]==data[i].id){
											str1+='<li data-id="'+data[i].id+'"><a href="##"><img src="'+data[i].img+'"></a><p class="list-title">'+data[i].title+'</p><p>'+data[i].price+'</p><p class="list-sort"><span class="fleft">可定制</span><em class="fright">'+data[i].evaluate+'人评价</em></p></li>'
										}
									}
								}
								$("#sortSales").html(str1);
							});
							$(".orderdown").click(function(){
								arr1 = arr1.sort(function(a,b){
									return b.split(":")[1]-a.split(":")[1];
								})
								var str1 = '';
								for(var j=n*8;j<Math.min(arr1.length,(n+1)*8);j++){
									for(var i=0;i<len;i++){
										if(arr1[j].split(":")[0]==data[i].id){
											str1+='<li data-id="'+data[i].id+'"><a href="##"><img src="'+data[i].img+'"></a><p class="list-title">'+data[i].title+'</p><p>'+data[i].price+'</p><p class="list-sort"><span class="fleft">可定制</span><em class="fright">'+data[i].evaluate+'人评价</em></p></li>'
										}
									}
								}
								$("#sortSales").html(str1);
							});
						}
					})
					$(".list>li").click(function() {
						console.log($(this));
						var id = $(this).attr("data-id");
						location.href="detail.html?"+id;
					});
					$("#sortSales>li").click(function() {
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