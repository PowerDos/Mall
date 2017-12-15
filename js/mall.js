//当鼠标放在导航条上时
//在地址上
$('.location,.city').hover(
	function() {
		var locatOffset = $('.location').offset();
		$('.city').show();
		$('.city').css('left', locatOffset.left + "px");
		$('.city').css('top', (locatOffset.top+35) + "px");
		$('.location').addClass("nav-pull-down-action");
	},
	function(){
		$('.city').hide();
		$('.location').removeClass("nav-pull-down-action");
	}
);

//在我的商城上
$('.my-shop,.my-shop-panel').hover(
	function(){
		var locatOffset = $('.my-shop').offset();
		$('.my-shop-panel').show();
		$('.my-shop-panel').css('left', locatOffset.left + "px");
		$('.my-shop-panel').css('top', (locatOffset.top+35) + "px");
		$('.my-shop').addClass("nav-pull-down-action");
		$('.my-shop').children('a').css("border-left", "1px solid #fff");
	},
	function(){
		$('.my-shop-panel').hide();
		$('.my-shop').children('a').css("border-left", "1px solid #ccc");
		$('.my-shop').removeClass("nav-pull-down-action");
	});

//幻灯片
var nowKey = 1;
$('.carousel_img[name=1]').show();
$('.icon i[name=1]').css("color", "#f00");
objTime = setInterval(Carousel,2500);


// 幻灯片
function Carousel() {
	var forKey = 1;
	nowKey++;
	//便利img标签
	$('.carousel_img').each(function(){
		//如果已显示
		if (!$(this).is(":hidden") && (nowKey-1) == forKey) {
			if (nowKey == 6) {
				nowKey = 1;
				$('.carousel_img[name=1]').fadeIn(800);
				console.log(nowKey);
			}else{
				$(this).next('img').fadeIn(800);
			}
			$(this).fadeOut(800);
		}
		forKey++;
	});
	//下面红点跟着幻灯片动
	if (nowKey == 1) {
		$(".icon i[name=1]").css("color", "#f00");
		$(".icon i[name=5]").css("color", "#fff");
	}else{
		$(".icon i[name="+nowKey+"]").css("color", "#f00");
		$(".icon i[name="+(nowKey-1)+"]").css("color", "#fff");
	}
}

//鼠标放在幻灯片上面暂停播放
$('.slide').hover(
	function(){
		clearInterval(objTime);
		$('.prevNext').show();
	},
	function(){
		objTime = setInterval(Carousel,2500);
		$('.prevNext').hide();
	}
);

//点击幻灯片的小圆点
$('.icon i').hover(function(){
		//先消失
		tempKey = parseInt($(this).attr("name"));
		$(".icon i[name="+nowKey+"]").css("color", "#fff");
		//如果选中的和上一个不一样时
		if (tempKey != nowKey)
			$(".carousel_img[name="+nowKey+"]").fadeOut(800);
		nowKey =tempKey; 
		//再出现
		$(this).css("color", "#f00");
		$(".carousel_img[name="+nowKey+"]").fadeIn(800);
		console.log(nowKey);
	},function(){});

//点击上一张下一张
function PrevNextClick(flag){
	if (flag == 1){
		if (nowKey>1) {
			$(".icon i[name="+nowKey+"]").css("color", "#fff");
			$(".carousel_img[name="+nowKey+"]").fadeOut(800);
			nowKey--;
		}
	}
	else if (flag == 2){
		if (nowKey<5) {
			$(".icon i[name="+nowKey+"]").css("color", "#fff");
			$(".carousel_img[name="+nowKey+"]").fadeOut(800);
			nowKey++;
		}
	}
	$(".icon i[name="+nowKey+"]").css("color", "#f00");
	$(".carousel_img[name="+nowKey+"]").fadeIn(800);
}


//显示商品详细信息
var navIndex = -1;
$('.nav-side li,.detail-item-panel').hover(
	function(){
		var slideOffset = $('.nav-side').offset();
		navIndex = $('.nav-side li').index($(this));
		if (navIndex%2) {
			$('.panel-1').show();
		}else{
			$('.panel-2').show();
		}
		
		$('.detail-item-panel').css("top",slideOffset.top + "px");
		$('.detail-item-panel').css("left",(slideOffset.left + 200) + "px");
	},function(){
		if (navIndex%2) {
			$('.panel-1').hide();
		}else{
			$('.panel-2').hide();
		}
	});


//倒计时
function countDowm(){
	var seconds = parseInt($('.count-down-seconds').html());
	if (seconds == 0) {
		var minute = parseInt($('.count-down-minute').html());
		minute = minute - 1;
		if (minute < 10) {
			$('.count-down-minute').html('0' + minute);
		}else{
			$('.count-down-minute').html(minute);
		}
		$('.count-down-seconds').html('59');
	}else{
		seconds = seconds - 1;
		if (seconds < 10) {
			$('.count-down-seconds').html('0' + seconds);
		}else{
			$('.count-down-seconds').html(seconds);
		}
	}
}
setInterval(countDowm,1000);


//鼠标经过限时秒杀商品时向上移动
$('.seckill-item').hover(
	function(){
		$(this).children('.seckill-item-img').children('img').animate({
			'margin-top':'0px'
		},380);
	},
	function(){
		$(this).children('.seckill-item-img').children('img').animate({
			'margin-top':'8px'
		},380);
	});


//鼠标滑动商品向左滑
$('.item-big-img,.item-content-bottom-img').hover(
	function(){
		$(this).children('img').animate({
			'margin-left':'-8px'
		},380);
	},
	function(){
		$(this).children('img').animate({
			'margin-left':'0px'
		},380);
	});
//鼠标放在四个框商品时图片向左滑
$('.item-four-detail').hover(
	function(){
		$(this).children('.item-four-detail-img').children('img').animate({
			'margin-left':'-8px'
		},380);
	},
	function(){
		$(this).children('.item-four-detail-img').children('img').animate({
			'margin-left':'0px'
		},380);
	});

$('.item-row').click(function(){
	window.location = 'item_detail.html';
})