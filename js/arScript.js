let leftArrowAr = document.querySelectorAll("#lefArrow");
let rightArrowAr = document.querySelectorAll("#rightArrow");
let easySectionsAr = [
	document.querySelector(".faz1"),
	document.querySelector(".faz2"),
	document.querySelector(".faz3"),
	document.querySelector(".faz4"),
	document.querySelector(".faz5"),
];

let countAr = 0;
if(countAr==0){
    rightArrowAr[0].style.color="gainsboro"
leftArrowAr[0].style.color="#5da8f3"
}
function leftArrowFunc1() {

    console.log(countAr);
     if(countAr==0){
		countAr++;

		easySectionsAr[0].className = "d-none";
		easySectionsAr[1].style.animation ="fadeIn .5s";
		easySectionsAr[1].className = "col-md-8 col-12 d-none d-sm-block"
	}
	else if(countAr==1){
		countAr++;
		easySectionsAr[1].className = "d-none";
		easySectionsAr[2].style.animation ="fadeIn .5s";
		easySectionsAr[2].className = "col-md-8 col-12 d-none d-sm-block"
	}
	else if(countAr==2){
		countAr++;
		easySectionsAr[2].className = "d-none";
		easySectionsAr[3].style.animation ="fadeIn .5s";
		easySectionsAr[3].className = "col-md-8 col-12 d-none d-sm-block"
	}
	else if(countAr==3){
		countAr++;
		easySectionsAr[3].className = "d-none";
		easySectionsAr[4].style.animation ="fadeIn .5s";
		easySectionsAr[4].className = "col-md-8 col-12 d-none d-sm-block"
	}
	
	if(countAr==4){
        console.log("yes",countAr);
		leftArrowAr[0].style.color="gainsboro"
		rightArrowAr[0].style.color="#5da8f3"
        

		
	}
  if(countAr>0&&countAr<4)
	{
		leftArrowAr[0].style.color="#5da8f3"
		rightArrowAr[0].style.color="#5da8f3"	
	}
  

}

leftArrowAr[0].addEventListener("click", leftArrowFunc1);



function rightArrowFunc1() {
	console.log("count",countAr);
	 if(countAr==4){
        
		 countAr--
         easySectionsAr[4].className = "d-none";
         easySectionsAr[3].style.animation ="fadeIn .5s";
         easySectionsAr[3].className = "col-md-8 col-12 d-none d-sm-block"
	}
	else if(countAr==3){
		countAr--
		easySectionsAr[3].className = "d-none";
		easySectionsAr[2].style.animation ="fadeIn .5s";
		easySectionsAr[2].className = "col-md-8 col-12 d-none d-sm-block"
	}
	else if(countAr==2){
		countAr--
		easySectionsAr[2].className = "d-none";
		easySectionsAr[1].style.animation ="fadeIn .5s";
		easySectionsAr[1].className = "col-md-8 col-12 d-none d-sm-block"
	}
	else if(countAr==1){
		countAr--
		easySectionsAr[1].className = "d-none";
		easySectionsAr[0].style.animation ="fadeIn .5s";
		easySectionsAr[0].className = "col-md-8 col-12 d-none d-sm-block"
	}
    if(countAr>0&&countAr<4)
	{
		leftArrowAr[0].style.color="#5da8f3"
		rightArrowAr[0].style.color="#5da8f3"	
	}
  
	if(countAr==0){
		
		leftArrowAr[0].style.color="#5da8f3"
		rightArrowAr[0].style.color="gainsboro"
	}
	

}

rightArrowAr[0].addEventListener("click", rightArrowFunc1);