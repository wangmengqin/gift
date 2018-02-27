define(["jquery"],function(){
	function init(){
		$(function(){
			$("#header").load("../../html/head.html",function(){
				var nameCookie;
				if($.cookie("username")){
					nameCookie = $.cookie("username");
					$(".loginbox").find(".log").html(nameCookie);
					$(".loginbox").find(".log").click(function() {
						location.href = "../../html/integral.html";
					});
					$(".myorder").click(function() {
						location.href = "../../html/integral.html";
					});
					$(".mycollect").click(function() {
						location.href = "../../html/collection.html";
					});
				}else{
					$(".loginbox").find(".log").click(function() {
						location.href = "../../html/login.html";
					});
					$(".myorder").click(function() {
						location.href = "../../html/login.html";
					});
					$(".mycollect").click(function() {
						location.href = "../../html/login.html";
					});
				}
				//礼物分类
				$("#sort").mouseover(function(){
					$("#submenu").css("display","block");
				});
				$("#submenu").mouseover(function(){
					
					$("#submenu").css("display","block");
				});
				$("#submenu").mouseout(function(){
					$("#submenu").css("display","none");
				});
				//送礼导航
				$("#sendnav").mouseover(function(){
					
					$("#giftnav").css("display","block");
				});
				$("#giftnav").mouseover(function(){
					
					$("#giftnav").css("display","block");
				});
				$("#giftnav").mouseout(function(){
					$("#giftnav").css("display","none");
				});
				//用户
				$("#user").mouseover(function(){
					$("#user-position").css("display","block");
				});
				$("#user-position").mouseover(function(){	
					$("#user-position").css("display","block");
				});
				$("#user-position").mouseout(function(){
					$("#user-position").css("display","none");
				});
				
				//logo移入动画效果
				$(".logo").mouseover(function() {
					$(".logo").stop(true).animate({
						"backgroundPositionX": "-57px",
						"backgroundPositionY": "0",
						},500);
				});
				$(".logo").mouseout(function() {
					$(".logo").stop(true).animate({
						"backgroundPositionX": "0",
						"backgroundPositionY": "0",
						},500);
				});
				//用户和购物车移入效果
				$("#user").parent().mouseover(function() {
					$("#user").stop(true).animate({
						"backgroundPositionX": "-147px",
						"backgroundPositionY": "-14px",
					}, 300);
				});
				$(".shop").parent().mouseover(function() {
					$(".shop").stop(true).animate({
						"backgroundPositionX": "-164px",
						"backgroundPositionY": "-14px",
					}, 300);
				});
				$("#user").parent().mouseout(function() {
					$("#user").stop(true).animate({
						"backgroundPositionX": "-147px",
						"backgroundPositionY": "0px",
					}, 300);
				});
				$(".shop").parent().mouseout(function() {
					$(".shop").stop(true).animate({
						"backgroundPositionX": "-164px",
						"backgroundPositionY": "0px",
					}, 300);
				});
			});
			$("#footer").load("../../html/foot.html",function(){
				$(".backtop").click(function() {
					$(window).scrollTop(0);
				});
			});
		})
	}
	return {
		init:init
	}
})