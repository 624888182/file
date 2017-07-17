/*头部导航*/
function User() {
	/*更换皮肤按钮*/
	$("#Skins").click(function(event) {
		event.stopPropagation();
		$("#Skins_menu").toggle();
//		$(".top_nav_menu").css("display","none");
	})

	/*更换皮肤*/
	var Skins_menu_lis = Skins_menu.children;
	for(var i = 0; i < Skins_menu_lis.length; i++) {
		//Subtle
		Skins_menu_lis[1].onclick = function(event) {
			event.stopPropagation();
			$("#top_nav").css("background", "#5e87b0");
			$(".Skins_first").css("background", "#486D93");
			$("#Left_nav").css("background", "#f4f4f4").css("color", "#555");
			$(".nav_menu a").css("color", "#555");
			$("#Top_message span").css("color", "#486d93");
		};
		//Night
		Skins_menu_lis[2].onclick = function(event) {
			event.stopPropagation();
			$("#top_nav").css("background", "#375471");
			$(".Skins_first").css("background", "#2f4760");
			$("#Left_nav").css("background", "#2d323d").css("color", "#cdd0d8");
			$(".nav_menu a").css("color", "#cdd0d8");
			$("#Top_message span").css("color", "#fff");
		};
		//Earth
		Skins_menu_lis[3].onclick = function(event) {
			event.stopPropagation();
			$("#top_nav").css("background", "#a37e58");
			$(".Skins_first").css("background", "#826446");
			$("#Left_nav").css("background", "#cdbb99").css("color", "#675533");
			$(".nav_menu a").css("color", "#675533");
			$("#Top_message span").css("color", "#fff");
		};
		//Utopia
		Skins_menu_lis[4].onclick = function(event) {
			event.stopPropagation();
			$("#top_nav").css("background", "#ecbe13");
			$(".Skins_first").css("background", "#d4ab11");
			$("#Left_nav").css("background", "#6a6b5f").css("color", "#fff");
			$(".nav_menu a").css("color", "#fff");
			$("#Top_message span").css("color", "#fff");
		};
		//Nature
		Skins_menu_lis[5].onclick = function(event) {
			event.stopPropagation();
			$("#top_nav").css("background", "#8e9e82");
			$(".Skins_first").css("background", "#748568");
			$("#Left_nav").css("background", "#caccb6").css("color", "#4b4d36");
			$(".nav_menu a").css("color", "#4b4d36");
			$("#Top_message span").css("color", "#fff");
		};
		//Graphite
		Skins_menu_lis[6].onclick = function(event) {
			event.stopPropagation();
			$("#top_nav").css("background", "#424242");
			$(".Skins_first").css("background", "#292929");
			$("#Left_nav").css("background", "#bcbcbc").css("color", "#555");
			$(".nav_menu a").css("color", "#555");
			$("#Top_message span").css("color", "#fff");
		};
	}

	/*头部信息栏位*/
	$("#Top_message li").each(function(index) {
		$(this).click(function(event) {
			event.stopPropagation();
			if($("#top_nav dl").eq(index).css("display") == "none") {
				$("#top_nav dl").css("display", "none");
				$("#top_nav dl").eq(index).css("display", "block");
			} else {
				$("#top_nav dl").eq(index).css("display", "none");
			}
		})
	});

	/*mail文字溢出处理*/
	var mail_content = document.getElementsByClassName("mail_content");
	for(var i = 0; i < mail_content.length; i++) {
		var mail_content_text = mail_content[i].innerHTML.slice(0, 80) + "...";
		mail_content[i].innerHTML = mail_content_text;
	}
}
User()

/*左侧菜单栏位*/
function Menu() {
	/*菜单栏缩小*/
	var Top_logo_menu = document.getElementById("Top_logo_menu");
	var left_nav = document.getElementById("Left_nav");
	var Main_Content = document.getElementById("Main_Content");
	Top_logo_menu.onclick = function(event) {
		event.stopPropagation();
		if(left_nav.style.width == "35px") {
			left_nav.style.width = "20%";
			Main_Content.style.width = "79.8%";
		} else {
			left_nav.style.width = "35px";
			Main_Content.style.width = "96.8%";
		}
	}

	/*菜单栏伸展*/
	$("#Left_nav li").each(function(index) {
		$(this).click(function(event) {
			event.stopPropagation();
			$("#Left_nav li").css("background", "rgba(255,255,255,0)");
			$(this).css("background", "rgba(255,255,255,0.4)");
			var dds = $(".nav_menu").eq(index).children();
			var num = dds.outerHeight(true) * dds.length;
			if($(".nav_menu").eq(index).height() == num) {
				$(".nav_menu").eq(index).css("height", "0px");
			} else {
				$(".nav_menu").css("height", "0px");
				$(".nav_menu").eq(index).css("height", num + "px");
			}
		})
	})
	$("#Left_nav_menu").click(function(){
		$("#Left_nav").toggle()
	})
}
Menu()

$(function() {
	$(document).click(function(event) {
		event.stopPropagation();
		$('#Skins_menu').css("display", "none");
		$("#top_nav dl").css("display", "none");
	});
})