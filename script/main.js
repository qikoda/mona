$(function(){
	$("a").click(function(e){
		if($(this).attr("href") =="#"){
			e.preventDefault();
		}
	});
	$("#nav > ul > li").hover(
		function(){
			$(this).find("ul").stop().slideDown(300);
		},
		function(){
			$(this).find("ul").stop().slideUp(300);
		}
	);

	var timer=setInterval(function(){
		$("#main ul").animate({left:"-100%"},600, function(){
			$("#main ul").append($("#main ul li").first());
			$("#main ul").css({left:0});
		})
	}, 5000);

	var name="";
	var src="images/banner";

	$("#quick_banner li").hover(
		function(){
			name=(($(this).index())+3)+"_over.jpg";
			$(this).find("img").attr({src:src+name});
		},
		function(){
			name=(($(this).index())+3)+".jpg";
			$(this).find("img").attr({"src":src+name});
		}
	);

	var value=0;

	$("#news .title li").click(function(){
		value=$(this).index();
		$("#news .title li").removeClass("on");
		$(this).addClass("on");
		$("#news .news_list li").hide();
		$("#news .news_list li").eq(value).show();
	});
	$("#pop_open").click(function(){
		$("#popup").show();
	});
	$("#popup .close").click(function(){
		$(this).parent().hide();
	});
});