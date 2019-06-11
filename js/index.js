(function(){
	document.querySelectorAll('.swiper-container').forEach(function (s) {
		let options = s.dataset.swiper ? JSON.parse(s.dataset.swiper) : {};
		if (window.innerWidth <= 425) options.centeredSlides = true;
		options.grabCursor = true;
		options.freeMode = true;
		options.pagination = {el: s.querySelector('.swiper-pagination')};
		options.spaceBetween = 28;
		new Swiper(s, options);
	});
})();
