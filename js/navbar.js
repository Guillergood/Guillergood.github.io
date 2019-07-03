
document.addEventListener("DOMContentLoaded", function() {
	
		var navbarTop = document.querySelector("#navbarTop");
		window.addEventListener("scroll", function() {
			
			var separadores = document.getElementsByClassName("parts");
			var activo = navbarTop.getElementsByClassName("active");
			var marcadores = document.getElementsByClassName("highlight");
			var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
			if(window.innerWidth > 768){
			  if(scrollTop > 50) { 
		      navbarTop.classList.add("visible");
		      navbarTop.classList.remove("hidden");
			  } 
			  else {
					navbarTop.classList.remove("visible");
					navbarTop.classList.add("hidden");
			  }
			}

			var continua = true;
			var i;
			for (i = 0; i < separadores.length-1 && continua; ++i) {
				if(separadores[i].offsetTop - scrollTop + (separadores[i+1].offsetTop - separadores[i].offsetTop - 150) > 0 ){
					continua = false;
					activo[0].classList.remove("active");
					marcadores[i].classList.add("active");
				}
			}

			var position = window.innerHeight + window.scrollY;
			var end = document.body.offsetHeight;

			if(position == end){
				navbarTop.getElementsByClassName("active")[0].classList.remove("active");
				marcadores[separadores.length-1].classList.add("active");
			}


    });
});


function mobileMenuClicked(){
	if(navbarTop.classList.contains("hidden")){
      navbarTop.classList.add("visible");
      navbarTop.classList.remove("hidden");
	} 
	else {
			navbarTop.classList.remove("visible");
			navbarTop.classList.add("hidden");
	}
}