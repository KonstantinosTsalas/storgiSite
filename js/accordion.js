// JavaScript Document
$(document).ready(function(){
	'use strict';
	$("#accordion h3").click(function(){
		if ($(this).next().css("display") === "block"){
			$(this).find("i").toggleClass("rotate");
			$(this).next().css("display","none");
			}
		else{
			if ($(this).parent().find("i").hasClass("rotate")){
				$(this).parent().find("i").removeClass("rotate");
				}
			$(this).find("i").toggleClass("rotate");
			$("#accordion div").css("display","none");
			$(this).next().css("display","block");
			}
		
		});
	});