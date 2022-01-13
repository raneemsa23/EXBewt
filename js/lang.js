let en = document.getElementById("en");
let ar = document.getElementById("ar");

let select = document.getElementById("select");

select.addEventListener("change", function (e) {
	console.log(e.target.value);
	if (e.target.value == "ar") {
		console.log("ar");
		setTimeout(function () {
		
			window.location = "indexAr.html";
		}, 1000);

        



	} else {
		console.log("en");
		setTimeout(function () {
			window.location = "index.html";
		}, 1000);
	}
});
