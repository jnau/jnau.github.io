window.onload = function() {
	$(document).ready(function() {
		$('.skillbar').each(function(){
			$(this).find('skillbar-bar').animate({
				width:$(this).attr.('data-percent')
		},6000);
	});
};
