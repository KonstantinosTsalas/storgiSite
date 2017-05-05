// JavaScript Document

$(window).resize(function(){
	'use strict';
	if($(this).width() < 1200){
		$("footer").replaceWith(function() {
        return '<footer><div class="container"><div class="row"><div class=""><ul class="social-btns" style="float:none;text-align:center;"><li><a href="https://www.facebook.com/" target="_blank" data-placement="top" title="Facebook"><i class="fa fa-facebook fa-2x"></i></a></li><li><a href="https://twitter.com/" target="_blank" data-placement="top" title="Twitter"><i class="fa fa-twitter fa-2x"></i></a></li><li><a href="https://www.linkedin.com/" target="_blank" data-placement="top" title="Linkedin"><i class="fa fa-linkedin fa-2x"></i></a></li><li><a href="https://gr.pinterest.com/" target="_blank" data-placement="top" title="Pinterest"><i class="fa fa-pinterest fa-2x"></i></a></li><li><a href="https://plus.google.com/collections/featured?hl=el" target="_blank" data-placement="top" title="Google plus"><i class="fa fa-google-plus fa-2x"></i></a></li></ul></div><div class="" style="clear:both;text-align:center;">&copy; All Rights Reserved - Storgi - Tsalas Konstantinos 2017 </div></div></div></footer>';
        });
		$(".social-btns li").css("float","none");
		$(".social-btns li").css("display","inline");
		$("ul.social-btns").css("padding-left","0");
		}
	else {
		$("footer").replaceWith(function(){
			return '<footer><div class="container"><div class="row"><div class="col-sm-12 col-lg-6">&copy; All Rights Reserved - Storgi - Tsalas Konstantinos 2017</div><div class="col-sm-12 col-lg-6"><ul class="social-btns"><li><a href="https://www.facebook.com/" target="_blank" data-placement="top" title="Facebook"><i class="fa fa-facebook fa-2x"></i></a></li><li><a href="https://twitter.com/" target="_blank" data-placement="top" title="Twitter"><i class="fa fa-twitter fa-2x"></i></a></li><li><a href="https://www.linkedin.com/"<li><a href="https://gr.pinterest.com/" target="_blank" data-placement="top" title="Pinterest"><i class="fa fa-pinterest fa-2x"></i></a></li><li><a href="https://plus.google.com/collections/featured?hl=el" target="_blank" data-placement="top" title="Google plus"><i class="fa fa-google-plus fa-2x"></i></a></li></ul></div></div></div></footer>';});
		}
		
	
	if($(this).width() > 991){
		$(".stuff img").removeClass("img-responsive");
		$(".stuff").css("max-width","100%");
		$(".portfolio").addClass("row");
		$(".portfolio>div").css("margin-bottom","0");
		if ($(this).width() < 1200){
			$(".stuff img").addClass("img-responsive");
			}
		}
	else if ($(this).width() > 767){
		$(".stuff img").removeClass("img-responsive");
		$(".stuff").css("max-width","100%");
		$(".portfolio").addClass("row");
		$(".portfolio>div").css("margin-bottom","0");
		}
	else {
		$(".stuff img").addClass("img-responsive");
		$(".stuff").css("max-width","380px");
		$(".portfolio").removeClass("row");
		$(".portfolio>div").css("margin-bottom","20px");
		}
		
	});


if($(window).width() < 1200 ){
	
	$("footer").replaceWith(function() {
		'use strict';
        return '<footer><div class="container"><div class="row"><div class=""><ul class="social-btns" style="float:none;text-align:center;"><li><a href="https://www.facebook.com/" target="_blank" data-placement="top" title="Facebook"><i class="fa fa-facebook fa-2x"></i></a></li><li><a href="https://twitter.com/" target="_blank" data-placement="top" title="Twitter"><i class="fa fa-twitter fa-2x"></i></a></li><li><a href="https://www.linkedin.com/" target="_blank" data-placement="top" title="Linkedin"><i class="fa fa-linkedin fa-2x"></i></a></li><li><a href="https://gr.pinterest.com/" target="_blank" data-placement="top" title="Pinterest"><i class="fa fa-pinterest fa-2x"></i></a></li><li><a href="https://plus.google.com/collections/featured?hl=el" target="_blank" data-placement="top" title="Google plus"><i class="fa fa-google-plus fa-2x"></i></a></li></ul></div><div class="" style="clear:both;text-align:center;">&copy; All Rights Reserved - Storgi - Tsalas Konstantinos 2017 </div></div></div></footer>';
    });
	$(".social-btns li").css("float","none");
	$(".social-btns li").css("display","inline");
	$("ul.social-btns").css("padding-left","0");
	}
	
	
if ($(window).width() > 767 ){
	$(".stuff img").removeClass("img-responsive");
	$(".stuff").css("max-width","100%");
	}
else {
	$(".portfolio").removeClass("row");
	$(".portfolio>div").css("margin-bottom","20px");
	}
