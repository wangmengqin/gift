define(["jquery","cookie"],function(){
	function init(){
		$(function(){
			var obj = {};
			if($.cookie("user")){
				obj = JSON.parse($.cookie("user"));
			}
			if($.cookie("username")){
				$(".phonenum").val($.cookie("username"));
				$(".pwd").val($.cookie("password"));
			}
			$(".loginBtn").click(function() {
				for(var i in obj){
					if($(".phonenum").val()==i&&$(".pwd").val()==obj[i]){
						location.href = "../index.html";
						break;
					}
				}
				if($(".check").attr("checked")=="checked"){
					console.log(11)
					$.cookie("username",$(".phonenum").val(),{path:"/",expires:7});
					$.cookie("password",$(".pwd").val(),{path:"/",expires:7});
					console.log($.cookie("username"),$.cookie("password"));
				}	
			});

		})
	}
	return {
		init:init
	}
})