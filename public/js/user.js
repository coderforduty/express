$(function () {
	$("ul").eq(0).children().eq(1).on("click", function (event) {
		window.location.href = "/account";
		return false;
	});
	console.log($('ul').eq(0));
	$("ul").eq(0).children().eq(2).on("click", function (event) {
		window.location.href = "/account";
		return false;
	});
	$("ul").eq(0).children().eq(3).on("click", function (event) {
		window.location.href = "/discount";
		return false;
	});
	$("ul").eq(1).children().eq(1).on("click", function (event) {
		window.location.href = "/account";
		return false;
	});
})