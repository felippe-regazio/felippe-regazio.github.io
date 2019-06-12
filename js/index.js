(function(){
	document.querySelectorAll('.swiper-container').forEach(function (s) {
		if (window.innerWidth <= 425) options.centeredSlides = true;
		var options = {
			spaceBetween: 28,
			grabCursor: true,
			pagination: {
				el: s.querySelector('.swiper-pagination'),
				clickable:true
			},
		}
		new Swiper(s, options);
	});
})();
