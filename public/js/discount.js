$(function () {
	$("#header a").on("click", function (event) {
		event.preventDefault();
		window.history.back();
	});
})