function scrollIn() {
	const sliderImages = document.querySelectorAll(".slide-in");
	function checkSlider(e) {
		sliderImages.forEach(sliderImage => {
			const slideInAt = window.scrollY + window.innerHeight - sliderImage.height / 2;
			const imageBottom = sliderImage.offsetTop + sliderImage.height;
			const isHalifShown = slideInAt > sliderImage.offsetTop;
			const isNotScrollPast = window.scrollY < imageBottom;
			if (isHalifShown && isNotScrollPast) {
				sliderImage.classList.add("active");
			} else {
				sliderImage.classList.remove("active");
			}
		});
	}
	document.addEventListener("scroll", checkSlider);
}
window.addEventListener("DOMContentLoaded", scrollIn);
