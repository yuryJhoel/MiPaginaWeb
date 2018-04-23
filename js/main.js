$(document).ready(function(){
	$(window).scroll(function() {
		if ($(window).scrollTop() > 60) {
				$('header').addClass('header2');
			}else {
				$('header').removeClass('header2');
			}
	});
	$('#informe').addClass('informe');

	$('#back').click(function() {
		this.parentNode.remove();
	});

	$('.slide img').hide();
	$('.slide img:nth-child(1)').show();	
	setInterval(aparecePortada, 5000);
	var i = 2;
	function aparecePortada() {
		
		$('.slide img').hide();
		$('.slide img:nth-child('+i+')').fadeIn("1000");
			i++;
			if (i>=5) {
				i=1
			}
	}
	


});