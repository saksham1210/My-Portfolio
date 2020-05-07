var checkbox=document.querySelector('input[name=theme]');
checkbox.addEventListener('change', function(){
	console.log(document.documentElement.getAttribute('data-theme'));
	if (this.checked){
		trans();
		document.documentElement.setAttribute('data-theme', 'dark');
	}
	else{
		trans();
		document.documentElement.setAttribute('data-theme', 'light');
	}
})
let trans=() => {
	document.documentElement.classList.add('transition');
	window.setTimeout(()=>{
		document.documentElement.classList.remove('transition')
	},1000)
}

function DarkMode()
{
	console.log(document.body.style.background);
	if (document.body.style.backgroundColor=="#0a192f")
	{
		document.body.style.backgroundColor="white";
	}
	else{
		document.body.style.backgroundColor="#0a192f";
	}
	
}
ScrollReveal().reveal('.section-heading',{distance:"100px",duration:1500});
ScrollReveal().reveal('#Aboutme1',{distance:"100px",duration:1500});
ScrollReveal().reveal('#Aboutme2',{distance:"100px",duration:1500});
ScrollReveal().reveal('#project1',{distance:"100px",duration:1500});
ScrollReveal().reveal('#project2',{distance:"100px",duration:1500,delay:500});
ScrollReveal().reveal('#project3',{distance:"100px",duration:1500,delay:1000});

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
// $('colorButton').on('click',function(){
// 	$('body').css('background-color',"#0a192f");
// });
