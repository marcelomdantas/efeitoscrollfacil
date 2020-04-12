// Marcelo Moraes, Behance => https://www.behance.net/marcelomdantas //

//Acrescentar a classe nav//

 <ul class="nav">
 
</ul>

//Efeito Scroll//

$('.nav a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});