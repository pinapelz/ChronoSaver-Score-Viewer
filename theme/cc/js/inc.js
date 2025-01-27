function layoutDiv() {
	var Header = $("#header");
	var Content = $("#contents");
	var Footer = $("#footer");
	var Mv = $('.mainVisual .slide_img');
	var Sv = $("#contents .sub_visual");
	var Pc = $("#contents .page_cover");
	var ST = $(window).scrollTop();

	//레이아웃 사이즈
	function conSize(){
		function Size(){
			var winW = $(window).width();
			var winH = $(window).height();
			var headerH = Header.outerHeight();
			var footerH = Footer.outerHeight();
			var SvH = Sv.outerHeight();
			var bgH = winH-headerH-40;

			Content.css({"min-height":winH-headerH, "padding-top":headerH})
			Mv.height(bgH);
			Pc.height(bgH);
		}
		$(document).ready(function(){
			Size()
		})
		$(window).resize(function(){
			Size()
		})
	}

	//Header gnb & sitemap
	function headerDiv() {
		//Sitemap
		var siteBtn = $("#header #sitemapBtn");
		var siteDp2 = "#header .siteMap_wrap .gnb > li .dp2";
		siteBtn.click(function(){
			toggleC("html")
			equalH(siteDp2)
		});

		//header
		$(document).ready(function(){
			var gnb = $("#header .gnb_wrap .gnb");
			var gnbBg = $("#header .gnbBg");
			var gnbDp1 = $("#header .gnb_wrap .gnb > li");
			var gnbDp2 = $("#header .gnb_wrap .gnb > li .dp2");
			var gnbDraw = $("#header .gnb_wrap .gnb > li .gnb_draw");
			var headerH = Header.outerHeight();

			gnbDp1.mouseenter(function(){
				$(this).find(".gnb_draw").show();
				gnbBg.show();
				var gnbDp2H = $(this).find(".dp2").outerHeight();
				gnbDraw.outerHeight(gnbDp2H-1);
				var gnbDrawH = $(this).find(".gnb_draw").outerHeight();
				gnbBg.outerHeight(gnbDrawH+1);
			}).mouseleave(function(){
				gnbDraw.hide();
				gnbBg.hide();
			});
		});
	}
	//

	function allWrap(){
		var obj = $("#header .all_wrap");
		var oBtn = obj.find(".allOpen");
		var cBtn = obj.find(".allClose");
		oBtn.click(function(){
			obj.addClass("on");
		});
		cBtn.click(function(){
			obj.removeClass("on");
		});
	}


	conSize();
	headerDiv();

}

layoutDiv();



$(document).ready(function() {
	$(".allOpen").on('click', function(){
		$("#header .all_wrap").addClass("on");
		$('body').css({
			overflowY : "hidden;",
			width: "100%",
			height : "100%",
			position: "fixed"
		});
		$("#header .all_wrap.on .all .in").css({
			overflowY : "scroll",
		});


	});

	$(".allClose").on('click', function(){
		$("#header .all_wrap").removeClass("on");
		$('body').css({
			overflowY : "auto;",
			width : "auto",
			height : "auto",
			position: "static"
		});
		$("#header .all_wrap.on .all .in").css({
			overflowY : "auto",
		});
	})

	$("#header .all_wrap .all").before().on('click', function(){
		$("#header .all_wrap").removeClass("on");
		$('body').css({
			overflowY : "auto;",
			width : "auto",
			height : "auto",
			position: "static"
		});
		$("#header .all_wrap.on .all .in").css({
			overflowY : "auto",
		});
	})



	$("#footer .f_gnb .gnb li.m_8 a").on('click',function(){
		$('#footer .add_mail').slideToggle();
	/*if($("#footer .add_mail").hasClass("on")){
			$('#footer .add_mail').slideDown();
			$("#footer .add_mail").removeClass("on");
	} else {
			$("#footer .add_mail").addClass("on");
			$('#footer .add_mail').slideUp();
	}*/
	});

});


// JavaScript Document

//<![CDATA[
//equalizeHeights
$.fn.equalizeHeights = function() {
var maxHeight = this.map(function( i, e ) {
return $( e ).outerHeight();
}).get();
return this.outerHeight( Math.max.apply( this, maxHeight ) );
};

function equalH(t){
	if(t==null){
	t=".equalH"
	}
	$(""+t+"").equalizeHeights();
}

function equalW() {
  var max_width = 0;
  $(".mypage_w .inner.music_m ul li .t1").each(function() {
    if($(this).width()>max_width) {
      max_width = $(this).width();
    }
  });
  $(".mypage_w .inner.music_m ul li .t1").width(max_width);
}

$(document).ready(function(){
  equalW()
})

function toggleC(t){
	if(t==null){
	t=".toggle"
	}
	$(""+t+"").toggleClass("on")
}



//gotop
function goTop() {
	$('body, html').animate({ scrollTop: 0 }, 400);
}

function Topbutton() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 80) {
			$('.fix_top_btn').fadeIn(300);
		} else {
			$('.fix_top_btn').fadeOut(300);
		}
	});

	$(".fix_top_btn").click(function() {
		$('html, body').animate({
			scrollTop : 0
		}, 400);
		return false;
	});
}


//faq_btn
function faqBtn() {
	$("body .faq_btn").click(function() {
		$('body .faq_target').animate({
			scrollTop : 0
		}, 400);
		return false;
	});
}




//서브 OEM/ODM PROCESS
function stepAni() {
	var Line1 = $(".conSection.secAni .step_process .line1");
	var Line2 = $(".conSection.secAni .step_process .line2");
	var Line3 = $(".conSection.secAni .step_process .line3");
	var IW = $(".step_process > li .inner").outerWidth();
	var LW = $(".step_process").parent().outerWidth();
	var LH = $(".step_process").outerHeight();
	Line1.animate({"width":LW-IW}, 600);
	Line2.delay(600).animate({"height":LH}, 600);
	Line3.delay(1200).animate({"width":LW-IW}, 600);
}

//input type file
var fileDiv = {
	inputFile : function(_target){
		var _t = $(_target);
		var _p = _t.parent();
		var _n = _t.val();

		if(_n != ""){
			_t.next().val(_n);
		}else{
			_t.next().val('');
		}
	}
}

//tab
$(function(){
	$(".tab_idx.over > li").each(function () {
		}).mouseenter(function () {
		var n = $(this).index();
		$(this).parents(".wrap_idx").find(".con_idx .idx").removeClass("on");
		$(this).parents(".wrap_idx").find(".con_idx .idx:eq("+n+")").addClass("on");
		$(this).parents(".wrap_idx").find(".tab_idx > li").removeClass("on");
		$(this).addClass("on");
	});
	$(".tab_idx.click > li").each(function () {
		}).click(function () {
		var n = $(this).index();
		$(this).parents(".wrap_idx").find(".con_idx .idx").removeClass("on");
		$(this).parents(".wrap_idx").find(".con_idx .idx:eq("+n+")").addClass("on")
		$(this).parents(".wrap_idx").find(".tab_idx > li").removeClass("on");
		$(this).addClass("on");
	});
});



$(function(){
	$(".img_w.tab_idx2.over > li").each(function () {
		}).mouseenter(function () {
		var n = $(this).index();
		$(this).parents(".wrap_idx2").find(".con_idx2 .idx").removeClass("on");
		$(this).parents(".wrap_idx2").find(".con_idx2 .idx:eq("+n+")").addClass("on");
		$(this).parents(".wrap_idx2").find(".tab_idx2 > li").removeClass("on");
		$(this).addClass("on");
	});
});

//pop
function layerOpen2(url,popW,popH,st){
	var bg = '<div class="layer_bg" onclick="layerClose()"></div>'
	var frame ='<div class="layer_frame"><iframe class="ifr" src="'+url+'" frameborder="0" scrolling="no"></iframe><a class="close" href="javascript:layerClose()"><i class="xi xi-close-min"></i></a></div>'
	var wrap = '<div class="layer_wrap '+st+'">'+bg+frame+'</div>'

	$("body").append(wrap);

	$(".layer_wrap").each(function(){
		var idx = $(this).index()-3
		$(this).attr("idx",idx)
	})
	//$(".layer_wrap").not("[idx=1]").find(".layer_bg").css("opacity",0)

	$("html").css("overflow-y","hidden");
	$(".layer_frame").animate({opacity:1},500)
	$(".layer_bg").fadeIn(800);

	function sizing(){
		var winW = $(window).width()
		var winH = $(window).height()
		if(winW > popW){
			var W = popW
			var H = popH
			var mgL = "-"+popW/2+"px"
			var mgT = "-"+popH/2+"px"
			var L = "50%"
			var T = "50%"
		}else{
			var W = winW*.9
			var H = winH*.9
			var mgL = 0
			var mgT = 0
			var L = "5%"
			var T = "5%"
		}
		$(".layer_wrap:last-child").find(".layer_frame").css({width:W, height:H, marginLeft:mgL, marginTop:mgT, left:L, top:T})
	}
	$(window).resize(function(){
	sizing()
	})
	sizing()
};




//scrollAni
$(window).scroll(function(){
	var scrollY = $(window).scrollTop();
	var winH = $(window).height();
	var obj = $(".scrollAni");
	obj.each(function(){
		var T = $(this).offset().top;
		var scrollC = scrollY + (winH*.9);
		if(scrollC > T){
			$(this).addClass("on");
		}
	});
	if(scrollY == 0){
		obj.removeClass("on");
	}
})

//pop
function layerOpen(url){
	var bg = '<div class="layer_bg"></div>'
	var frame ='<iframe class="layer_frame" src="'+url+'" frameborder="0" scrolling="no" allowtransparency="true"></iframe>'
	var wrap = '<div class="layer_wrap">'+frame+bg+'</div>'
	$("body").append(wrap);
	$("html").css("overflow-y","hidden");
	layerLoad()
};
function layerPage(url){
	$(".layer_wrap").find(".layer_frame").attr('src',url);
};
function layerLoad(){
	$(".layer_frame").load(function(){
		$(".layer_wrap").addClass("on")
		var obj = $(".layer_frame").contents().find('.popIn');
		var objW = $(".layer_frame").contents().find('.popWrap');
		var btnClose = "<a href='javascript:parent.layerClose()' class='popClose'><i class='xi xi-close'></i></a>"
		var bgClose = "<div class='layer_closeBg' onclick='parent.layerClose()'></div>"
		obj.append(btnClose);
		objW.append(bgClose);
	})
}

function layerClose(){
	$(".layer_wrap").remove()
	$("html").css("overflow-y","scroll");
};

function popResize(){
	var winH = $(window).height()*.8;
	var popH = $(".popIn").outerHeight()
	var conH = $(".popCon > *").outerHeight()
	if(winH > popH || winH > conH){
		$(".popIn").animate({height:conH+60},300)
	}
}

function popOpenC(u,w,h){
	var winW = window.screen.width;
	var winH = window.screen.height;
	var L = (winW-w)/2
	var T = (winH-h)/2
	window.open(u,'','width='+w+',height='+h+',left='+L+',top='+T+', status=yes, toolbar=no, menubar=no, location=no, scrollbars=yes')
}

function layerOpenImg(obj){
	var src = $(obj).find("img").attr("src");
	var bg = '<div class="layer_bg"></div>'
	var frame ='<div class="layer_img vm_wrap"><p class="layer_closeBg" onclick="layerClose()"></p><img src="'+src+'" alt="" /></div>'
	var wrap = '<div class="layer_wrap">'+bg+frame+'</div>'

	$("body").append(wrap);
	$("html").css("overflow-y","hidden");
	$(".layer_wrap").addClass("on")
};

function imgThumb(obj){
	var src = $(obj).find("img").attr("src");
	var target = $("#imgBig");
	target.attr("src",src);
	$(obj).siblings().removeClass("on");
	$(obj).addClass("on");
}



//
function imgResize(r,t){
	function resize(){
		if(r==null){
		r=.6666
		}
		if(t==null){
		t=".img_resize"
		}

		$(""+t+"").each(function (i) {
			var imgW = $(this).width();
			$(this).height(imgW*r)
		});
	}
	$(document).ready(function(){
		resize()
	})
	$(window).resize(function(){
		resize()
	})
}



//gall_thumb
function img_resize_gall(){
	$(".resize_gall").css("overflow","hidden");
	$(".resize_gall img").css("width","100%")
	function resize(){
		$(".resize_gall").each(function (i) {
			var W = $(this).width();
			$(this).height(W*0.6666)
			$(this).find("img").css("min-height",W*0.6666)
		});
	}
	function resize2(){
		$(".resize_gall").each(function (i) {
			var W = $(this).width();
			var H = $(this).height();
			var imgH = $(this).find("img").height();
			if(W < imgH || H < imgH || W == imgH){
				var gap = (imgH - $(".resize_gall").height())/2
				$(this).find("img").css("margin-top","-"+gap+"px")
			}
		});
	}
	$(document).ready(function(){
		resize()
		resize2()
	})
	$(window).resize(function(){
		resize()
		resize2()
	})
}

//폰트사이즈
$(function(){
	var zoomMax = 1.2;
	var zoomMin = .8;
	var zoom = 1;
	$(".pageZoom.in").on("click",function(){
		if(zoom < zoomMax){
			zoom = zoom + .02;
		}else alert("가장 큰 화면크기입니다.");
		$("html").css("transform","scale("+zoom+")").css("transform-origin","center top");
	});
	$(".pageZoom.out").on("click",function(){
		if(zoom > zoomMin){
			zoom = zoom - .02;
		}else alert("가장 작은 화면크기입니다.");
		$("html").css("transform","scale("+zoom+")").css("transform-origin","center top");
	});
	$(".pageZoom.default").on("click",function(){
		zoom = 1;
		$("html").css("transform","scale("+zoom+")").css("transform-origin","center top");
	});
});

//]]>



//

function img_resize_gall2(){
	$(".resize_gall2").css("overflow","hidden");
	$(".resize_gall2 img").css("width","100%")
	function resize(){
		$(".resize_gall2").each(function (i) {
			var imgW = $(this).width();
			$(this).height(imgW*0.555)
			$(this).find("img").css("min-height",imgW*0.555)
		});
	}
	function resize2(){
		$(".resize_gall2").each(function (i) {
			var imgW = $(this).width();
			var imgH = $(this).find("img").height();
			if(imgW < imgH || imgW == imgH){
				var gap = (imgH - $(".resize_gall2").height())/2
				$(this).find("img").css("margin-top","-"+gap+"px")
			}
		});
	}
	$(window).load(function(){
		resize()
		resize2()
	})
	$(window).resize(function(){
		resize()
		resize2()
	})
};


function m_btn_ani(){
	$('#header .m_btn').on('click',function(){
		if($(this).hasClass('on')) {
			$(this).removeClass("on");
		} else {
			$(this).addClass("on");
		}
	});
};



<!-- sound -->
function play() {
    var audio = document.getElementById('audio_play');
    if (audio.paused) {
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0
    }
}

// 모달 부모 스크롤 방지
$(document).ready(function() {
	$('a').on('click', function() {
		var rel = $(this).attr('rel');
		if(typeof rel!='undefined') {
			if(rel.indexOf('modal')!=-1) {
				if($(this).attr('href')!='#close-modal') {
					$('html').css('overflow', 'hidden');
					setTimeout(function() {
						$('.jquery-modal').on('click', function() {
							f_modal_close_overflow();
						});
						$('.close-modal').on('click', function() {
							f_modal_close_overflow();
						});
						$(window).on('keydown', function(e) {
							if(e.keyCode==27) {
								f_modal_close_overflow();
							}
						});
					}, 0);
				}
			}
		}
	});

	$('.cha_modal .bg').on('click', function(){
		$('.close-modal').click();
	});
});

function f_modal_close_overflow() {
	$('html').css('overflowY', 'scroll');
}


/*top_btn*/
function Topbutton() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 80) {
			$('.fix_top_btn').fadeIn(300);
		} else {
			$('.fix_top_btn').fadeOut(300);
		}
	});

	$(".fix_top_btn").click(function() {
		$('html, body').animate({
			scrollTop : 0
		}, 400);
		return false;
	});
}


