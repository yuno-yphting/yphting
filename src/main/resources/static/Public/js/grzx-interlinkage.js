var sjzxHref="/sjzx-index.html";
var grzxHref="/c/lhy/center/home";
var zhszHref="/c/szy/user/queryGrzxInfo";
var xxHref="/xx-xtxx.html";
$.getJSON("/c/szy/user/queryAUser",function(data){
	$("#li1 a").attr("href",sjzxHref);
	$("#li2 a").attr("href",grzxHref);
	$("#li3 a").attr("href",zhszHref);
	$("#li4 a").attr("href",xxHref);
	if(data.merchanttype==0){
		$("#li1").remove();
	}
})
