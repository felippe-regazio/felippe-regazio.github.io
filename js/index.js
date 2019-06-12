(function(){
	// swiper
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
	// activate last skin or blue
	var currentSkin = localStorage.getItem('felipperegaziocv') || document.body.dataset.skin;
	document.body.dataset.skin = currentSkin;
	document.querySelector('[data-skin-pick].active').classList.remove('active');
	document.querySelector('[data-skin-pick="'+currentSkin+'"]').classList.add('active');
	// -------------------------
	document.querySelectorAll('[data-skin-pick]').forEach(function (color) {
		color.addEventListener('mouseenter', function (e) {
			document.body.dataset.skin = color.dataset.skinPick;
		});
		color.addEventListener('mouseleave', function (e) {
			document.body.dataset.skin = currentSkin;
		});
		color.addEventListener('click', function (e) {
			document.querySelector('[data-skin-pick].active').classList.remove('active');
			color.classList.add('active');
			currentSkin = color.dataset.skinPick;
			localStorage.setItem('felipperegaziocv', currentSkin);
			document.body.dataset.skin = currentSkin;
		});
	});
})();
