import BlazeSlider from "blaze-slider";

const projectSlider = document.querySelector(".blaze-slider");
const sliderOptions = {
	all: {
		loop: true,
		enableAutoplay: true,
		autoplayInterval: 8000,
		transitionDuration: 750,
	},
};
const slider = new BlazeSlider(projectSlider, sliderOptions);
