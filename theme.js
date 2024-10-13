const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const startColor = '#202030';
const endColor = '#000000';
const interval = 50;
const steps = 100;
let step = 0;
let goingToBlack = true;

function interpolateColor(color1, color2, factor) {
	const result = color1.slice(1).match(/.{2}/g).map((hex, i) => {
		const value = Math.round(parseInt(hex, 16) * (1 - factor) + parseInt(color2.slice(1).match(/.{2}/g)[i], 16) * factor);
		return value.toString(16).padStart(2, '0');
	});
	return `#${result.join('')}`;
}

setInterval(() => {
	let color;
	if (goingToBlack) {
		color = interpolateColor(startColor, endColor, step / steps);
	} else {
		color = interpolateColor(endColor, startColor, step / steps);
	}

	themeColorMeta.setAttribute('content', color);
	document.body.style.backgroundColor = color;
	step++;

	if (step > steps) {
		step = 0;
		goingToBlack = !goingToBlack;
	}
}, interval);
