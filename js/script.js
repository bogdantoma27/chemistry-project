function caption(img,poz){
	if(poz==1){
			$('#caption li').stop().animate({left:-$(document).width()},800, 'easeInExpo', function(){
				$('#caption li').css({display:'none'});																  
				$('#caption li').eq(img).css({display:'block',left:$(document).width()}).stop().animate({left:0},800, 'easeOutExpo');
			});
	}
	else if(poz==0){
			$('#caption li').stop().animate({left:$(document).width()},800, 'easeInExpo', function(){
				$('#caption li').css({display:'none'});																	 
				$('#caption li').eq(img).css({display:'block',left:-$(document).width()}).stop().animate({left:0},800, 'easeOutExpo');
			});
	}

}
function start(){	
	
};

function startF(){	
	setTimeout(function () {		

	}, 0);
};

function showSplash(){
	setTimeout(function () {
		$('.splash').css({display:'block'}).stop().delay(0).animate({opacity:1},800,'easeOutExpo');
		$('header').stop().animate({marginTop:0},800,'easeInOutExpo');
	}, 400);	
};
function hideSplash(){ 	
	$('header').stop().animate({marginTop:-70},800,'easeInOutExpo');
	$('.splash').stop().animate({opacity:0},800,'easeOutExpo', function(){ $(this).css({display:'none'}); });
	//$('#content').stop().animate({height:494},800,'easeInOutExpo');


};
function hideSplashQ(){	
	$('header').css({marginTop:-70});
	$('.splash').css({opacity:0, display:'none'});
	//$('#content').css({height:494});

	
};

///////////////////

$(document).ready(function() {
	////// sound control	
	$("#jquery_jplayer").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3:"music.mp3"
			});
			//$(this).jPlayer("play");
			var click = document.ontouchstart === undefined ? 'click' : 'touchstart';
          	var kickoff = function () {
            $("#jquery_jplayer").jPlayer("play");
            document.documentElement.removeEventListener(click, kickoff, true);
         	};
          	document.documentElement.addEventListener(click, kickoff, true);
		},
		
		repeat: function(event) { // Override the default jPlayer repeat event handler				
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});			
		},
		swfPath: "js",
		cssSelectorAncestor: "#jp_container",
		supplied: "mp3",
		wmode: "window"
	});

	/////// icons
	//$(".icons li").find("a").css({opacity:0.25});
	$(".icons li a").hover(function() {
		$(this).stop().animate({marginTop:-10 }, 400, 'easeOutExpo');		    
	},function(){
	    $(this).stop().animate({marginTop:0 }, 400, 'easeOutExpo' );		   
	});

	/////// sound and privacy	
	$(".jp-mute, .jp-unmute, .privacy").hover(function() {
		$(this).stop().animate({color:"#e1265f"}, 400, 'easeOutExpo');
	},function(){
	    $(this).stop().animate({color:"#336a99"}, 400, 'easeOutExpo' );
	});

	/// splash sliding
	$('#caption li').each(function(num){
		$(this).data({num:num});
	});
	$('#caption li').css({display:'none'});	
	$('#caption li').css({left:$(document).width()}).eq(0).css({display:'block',left:0});	
	
	//////// slider
	var img=0;
	var p_img=0;//$('#caption li').length-1;		
	$('.pagination > li > a').click(function(){
		if( $(this).parent().index()!=img ){
			p_img=img;
			img=$(this).parent().index();			
			if(img>p_img){ caption(img,1); };
			if(img<p_img){ caption(img,0); };			
			$('.pagination > li').eq(p_img).removeClass("active");
			$(this).parent().addClass("active");
		}				
        return false
	});

	/////// menu_splash
	$("#menu_splash a").find(".over2").css({marginBottom:-187});
	$("#menu_splash a").find(".img").css({marginTop:187});
	$("#menu_splash a").find(".txt1").css({marginTop:187});
	$("#menu_splash a").find(".txt2").css({marginTop:187});
	$("#menu_splash a").hover(function() {		
		$(this).find(".over2").stop().delay(1).animate({marginBottom:0 }, 400, 'easeOutExpo');
		$(this).find(".img").stop().delay(50).animate({marginTop:0 }, 400, 'easeOutExpo');
		$(this).find(".txt1").stop().delay(100).animate({marginTop:0 }, 400, 'easeOutExpo');
		$(this).find(".txt2").stop().delay(150).animate({marginTop:0 }, 400, 'easeOutExpo');
	},function(){
	    //$(this).find(".txt1").stop().animate({opacity:1 }, 400, 'swing');
		$(this).find(".over2").stop(true).delay(150).animate({marginBottom:-187 }, 400, 'easeInOutExpo');		
		$(this).find(".img").stop(true).delay(100).animate({marginTop:187 }, 400, 'easeInOutExpo');
		$(this).find(".txt1").stop(true).delay(50).animate({marginTop:187 }, 400, 'easeInOutExpo');
		$(this).find(".txt2").stop(true).delay(1).animate({marginTop:187 }, 400, 'easeInOutExpo');
	});	
	
	
	

	
	
	
	
	
	
	
	// for lightbox
	$("a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'dark',social_tools:false,allow_resize: true,default_width: 500,default_height: 344});
	
	
		
 });  ////////




$(window).load(function() {
						
	
						
	// scroll
	$('.scroll-pane').jScrollPane({
		showArrows: false,
		verticalGutter: 10,
		verticalDragMinHeight: 143,
		verticalDragMaxHeight: 143
	});

	/////bgStretch
	$('#bgStretch').bgStretch({
			align:'leftTop'
	});	
	
	
	
	//content switch	
	$('#content>ul>li').eq(0).css({'visibility':'hidden'});	
	var content = $('#content');	
	content.tabs({
        show:1,
        preFu:function(_){
    	   _.li.css({display:'none'});		   
		   $('#content').css({height:0});
        },
        actFu:function(_){
			setTimeout(function () {
				if(_.curr){
					if(_.n>0){
						_.curr.css({display:'block'});	                
						$('#content').css({height:0, marginTop:270}).stop().animate({height:523, marginTop:0},800, 'easeInOutExpo');
						$('.menu_splash').stop().animate({marginTop:-270},800,'easeInOutExpo');
					}
					else{
						_.curr.css({display:'block'});
					}
				};
			}, 810);
			   
			if(_.prev){
				$('#content').stop().animate({height:0, marginTop:270},800, 'easeInOutExpo', function(){  });
				_.prev.stop().animate({left:0},800, 'easeInOutExpo', function(){ _.prev.css({display:'none'}); });
				$('.menu_splash').stop().animate({marginTop:0},800,'easeInOutExpo');
			};
            		
			//console.log(_.pren, _.n);
			if ( (_.pren == undefined) && (_.n <= 0) ){                
                startF();
                //console.log("startF");
            }			
            if ( (_.n == 0) && (_.pren >= 0) ){
                showSplash();
                //console.log("showSplash");
            }
            if ((_.pren == 0) && (_.n>0)){
                hideSplash();
                //console.log("hideSplash");  
            }
			if ( (_.pren == undefined) && (_.n >= 1) ){
                _.pren = -1;
                hideSplashQ();
                //console.log("hideSplashQ");
            }
            //console.log("///////////////////////////");
  		}
    });
	//content switch navs
	var nav = $('.menu');	
    nav.navs({
		useHash:true,
        defHash: '#!/page_SPLASH',
        hoverIn:function(li){ 
			//$('> a .over',li).stop(true).animate({top:0},400, 'easeOutExpo');
			$('> a .over2',li).stop().animate({width:"100%"},400, 'easeOutCubic');
			$('.txt1',li).stop().animate({top:-70},400, 'easeOutExpo');
			$('.txt2',li).stop().animate({top:0},400, 'easeInOutExpo');
        },
        hoverOut:function(li){	
		    if (!li.hasClass('with_ul') || !li.hasClass('sfHover')) {
				$('.txt1',li).stop().animate({top:0},400, 'easeOutExpo');
     			$('.txt2',li).stop().animate({top:70},400, 'easeOutExpo'); 
				$('> a .over2',li).stop().animate({width:"0%"},400, 'easeOutCubic');
			};
        }
    })    
    .navs(function(n){	
   	    content.tabs(n);
   	});	
	//////////////////////////
	

	
	
}); /// load

////////////////

$(window).load(function() {	
	setTimeout(function () {					
  		$('.spinner').fadeOut();
		$('body').css({overflow:'inherit'});
		start();
	}, 200);	
	var qwe = setTimeout(function () {$("#jquery_jplayer").jPlayer("play");}, 2000);	
	
});