var checkbox=document.querySelector('input[name=theme]');
checkbox.addEventListener('change', function(){
	console.log(document.documentElement.getAttribute('data-theme'));
	if (this.checked){
		// trans();
		document.documentElement.setAttribute('data-theme', 'dark');
	}
	else{
		// trans();
		document.documentElement.setAttribute('data-theme', 'light');
	}
});


ScrollReveal().reveal('.section-heading',{distance:"100px",duration:1500});
ScrollReveal().reveal('#Aboutme1',{distance:"100px",duration:1500});
ScrollReveal().reveal('#Aboutme2',{distance:"100px",duration:1500});
ScrollReveal().reveal('#project1',{distance:"100px",duration:1500});
ScrollReveal().reveal('#project2',{distance:"100px",duration:1500});
ScrollReveal().reveal('#project3',{distance:"100px",duration:1500});
ScrollReveal().reveal('#Contactme',{distance:"100px",duration:1500});
$(function(){
	var scroll = $(document).scrollTop();
	var navHeight =$(".navbarScroll").outerHeight();
	$(window).scroll(function(){
		var scrolled =$(document).scrollTop();
		if (scrolled>navHeight)
		{
			$(".navbarScroll").addClass("animate");
		}
		else{
			$(".navbarScroll").removeClass("animate");
		}
		if(scrolled>scroll)
		{
			$(".navbarScroll").removeClass("sticky-top");
		}
		else
		{
			$(".navbarScroll").addClass("sticky-top");
		}
		scroll=$(document).scrollTop();
	});
});
