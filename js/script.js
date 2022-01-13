let leftArrow = document.querySelectorAll("#lefArrow");
let rightArrow = document.querySelectorAll("#rightArrow");
let easySections = [
	document.querySelector(".faz1"),
	document.querySelector(".faz2"),
	document.querySelector(".faz3"),
	document.querySelector(".faz4"),
	document.querySelector(".faz5"),
];

let count = 0;

function rightArrowFunc1() {

console.log(count);
if(count==0){
		count++;

		easySections[0].className = "d-none";
		easySections[1].style.animation ="fadeIn .5s";
		easySections[1].className = "col-md-8 col-12 d-none d-sm-block"
	}
	else if(count==1){
		count++;
		easySections[1].className = "d-none";
		easySections[2].style.animation ="fadeIn .5s";
		easySections[2].className = "col-md-8 col-12 d-none d-sm-block"
	}
	else if(count==2){
		count++;
		easySections[2].className = "d-none";
		easySections[3].style.animation ="fadeIn .5s";
		easySections[3].className = "col-md-8 col-12 d-none d-sm-block"
	}
	else if(count==3){
		count++;
		easySections[3].className = "d-none";
		easySections[4].style.animation ="fadeIn .5s";
		easySections[4].className = "col-md-8 col-12 d-none d-sm-block"
	}
	
	if(count==4){
		leftArrow[0].style.color="#5da8f3"
		rightArrow[0].style.color="gainsboro"
	

		
	}
  if(count>0&&count<4)
	{
		leftArrow[0].style.color="#5da8f3"
		rightArrow[0].style.color="#5da8f3"	
	}
  

}

rightArrow[0].addEventListener("click", rightArrowFunc1);


function leftArrowFunc1() {
	
	 if(count==4){
		 count--
		easySections[4].className = "d-none";
		easySections[3].style.animation ="fadeIn .5s";
		easySections[3].className = "col-md-8 col-12 d-none d-sm-block"
	}
	else if(count==3){
		count--
		easySections[3].className = "d-none";
		easySections[2].style.animation ="fadeIn .5s";
		easySections[2].className = "col-md-8 col-12 d-none d-sm-block"
	}
	else if(count==2){
		count--
		easySections[2].className = "d-none";
		easySections[1].style.animation ="fadeIn .5s";
		easySections[1].className = "col-md-8 col-12 d-none d-sm-block"
	}
	else if(count==1){
		count--
		easySections[1].className = "d-none";
		easySections[0].style.animation ="fadeIn .5s";
		easySections[0].className = "col-md-8 col-12 d-none d-sm-block"
	}
	if(count==0){
		
		leftArrow[0].style.color="gainsboro"
		rightArrow[0].style.color="#5da8f3"
	}
	

}

leftArrow[0].addEventListener("click", leftArrowFunc1);

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
