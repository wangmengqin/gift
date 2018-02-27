define(["jquery","cookie"],function(){
	function init(){
		$(function(){
			//记录每个信息的正确性
			var arr = [];
			//判断信息正确性
			$(".login-box").on('blur', 'input', function(e) {
				var target = $(e.target);
				var bTrue = false;
				switch(target.attr("class")){
					case "phone":
						bTrue = /^(13)|(15)|(17)|(18)\d{9}$/.test(target.val());
						break;
					case "password":
						bTrue = /^\w{6,18}$/.test(target.val());
						break;
					case "password1":
						bTrue = (target.val()==$(".password").val());
						break;
				}
				if(bTrue == false){
					target.next().css("opacity","1");
				}else{
					arr.push(1);
					target.next().css("opacity","0");
				}
			});
			//注册按钮点击事件
			var obj = {}; 
			$(".regist").click(function() {
				if(arr.length==3){
					if($.cookie("user")){
						obj = JSON.parse($.cookie("user"));
						console.log("对象",obj)
					}
					if(!obj[$(".phone").val()]){
						obj[$(".phone").val()] = $(".password").val();
						$.cookie("user",JSON.stringify(obj),{path:"/",expires:7});
					}else{
						console.log("用户名已存在")
					}
					console.log("cookie",$.cookie("user"));
				}else{
					console.log("信息不完整或信息填写不正确");
				}
			});
		});
	}
	return {
		init:init
	}
})