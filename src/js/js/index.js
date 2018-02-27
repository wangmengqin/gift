define(["jquery"],function(){
	function init(){
		$(function(){
			$.ajax({
				url: '../json/product.json',
				type: 'get',
				dataType: 'json',
				success:function(data){
					var str = "";
					var str1 = "";
					var str2 = "";
					for(var i=0;i<data.length;i++){
						for(var j=1;j<data[i].title.length;j++){
							str2+='<li data-id="'+data[i].title[j].id+'"><a href="##"><img src="'+data[i].title[j].img+'"></a><p class="product-title"><a href="#">'+data[i].title[j].title+'</a></p><p class="price">'+data[i].title[j].price+'</p></li>'
						}
						for(var j=0;j<1;j++){
							str1+='<div class="title"><h3>'+data[i].title[j].h3+'</h3><a href="../../html/creative.html">'+data[i].title[j].a+'</a></div><div class="birthday"><p class="float-p" data-id="'+data[i].title[j].id+'"><a href="##"><img src="'+data[i].title[j].img1+'"></a></p>'
						}
						str+='<div class="birth-product">'+str1+'<ul>'+str2+'</ul></div></div>';
						str1='';
						str2='';
					}
					$("#birthday").html(str);
					$("#birthday").on('click', 'img', function(e) {
						var target = $(e.target);
						if(e.target.tagName=="IMG"){
							var id = $(this).parent().parent().attr("data-id");
							console.log(111)
							location.href = "html/detail.html?"+id;
						}
					});
					$("#product").on('click', 'img', function(e) {
						var target = $(e.target);
						if(e.target.tagName=="IMG"){
							var id = $(this).parent().attr("data-id");
							location.href = "html/detail.html?"+id;
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