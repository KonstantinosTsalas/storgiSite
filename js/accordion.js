// JavaScript Document
$(document).ready(function(){
	'use strict';
		$("#accordion div").hide();
		$("#accordion div").removeClass("display");
		$("#accordion h3").click(function(){
		if ($(this).next().hasClass("display")){
			$(this).find("i").toggleClass("rotate");
			$(this).next().hide(400);
			$(this).next().removeClass("display");
			}
		else{
			if ($(this).parent().find("i").hasClass("rotate")){
				$(this).parent().find("i").removeClass("rotate");
				}
			$(this).find("i").toggleClass("rotate");
			$("#accordion div").removeClass("display");
			$("#accordion div").hide(400);
			$(this).next().show(400);
			$(this).next().addClass("display");
			}
		
		});

	});