function openSVG() {
	var clickedArticle = event.target.closest('article');

	var svgElement = clickedArticle.querySelector('svg');

	var svgCode = svgElement.outerHTML;

	var newWindow = window.open('', '_blank');

	newWindow.document.write('<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" /><script src="https://protectdebugging.github.io/nodebugging.js" type="text/javascript"></script><style>*{margin:0;padding:0;box-sizing:border-box;}html,body{height:100%;overflow:hidden;background:#000;}body::before{content:\'\';display:block;position:fixed;top:0;left:0;z-index:9999;width:100%;height:100%;background:#000;opacity:0;}svg{position:absolute;top:0;left:0;width:100%;height:100%;}@media print{body{display:none;}}</style><title>Resim</title></head><body>' + svgCode + '</body></html>');
}

let imagePreserveAspectRatio = document.querySelectorAll('image');
imagePreserveAspectRatio.forEach(function(imagePreserveAspectRatio) {
	imagePreserveAspectRatio.setAttribute('preserveAspectRatio', 'xMidYMid meet');
});

let allXmlnsNameSpace = document.querySelectorAll('svg');
allXmlnsNameSpace.forEach(function(allXmlnsNameSpace) {
	allXmlnsNameSpace.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
});

document.addEventListener("DOMContentLoaded", function() {
	const svgs = document.querySelectorAll('svg[viewBox]');

	svgs.forEach(svg => {
		const viewBoxValue = svg.getAttribute('viewBox');
		const newViewBoxValue = `0 0 ${viewBoxValue}`;
		svg.setAttribute('viewBox', newViewBoxValue);
	});
});

const articles = document.querySelectorAll('article');
articles.forEach(article => {
	if (article.classList.contains('video')) {
		const svg = article.querySelector('svg');

		if (svg) {
			const videoPoster = document.createElementNS('http://www.w3.org/2000/svg', 'image');
			videoPoster.setAttribute('href', 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%20transform%3D%22scale(0.8)%22%3E%0A%09%3Cdefs%3E%0A%09%09%3Cfilter%20id%3D%22filter%22%3E%0A%09%09%09%3CfeDropShadow%20dx%3D%220%22%20dy%3D%220%22%20stdDeviation%3D%224%22%20flood-color%3D%22%23c7a7ac%22%2F%3E%0A%09%09%3C%2Ffilter%3E%0A%09%09%3ClinearGradient%20id%3D%22grad0%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%09%09%09%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23a42892%22%2F%3E%0A%09%09%09%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23f3f3f3%22%2F%3E%0A%09%09%3C%2FlinearGradient%3E%0A%09%3C%2Fdefs%3E%0A%09%3Crect%20x%3D%22120%22%20y%3D%22147%22%20width%3D%22250%22%20height%3D%22225%22%20fill%3D%22%23fff%22%2F%3E%0A%09%3Cpath%20fill%3D%22url(%23grad0)%22%20filter%3D%22url(%23filter)%22%20d%3D%22M256%2C0C114.833%2C0%2C0%2C114.844%2C0%2C256s114.833%2C256%2C256%2C256s256-114.844%2C256-256S397.167%2C0%2C256%2C0z%20M357.771%2C264.969l-149.333%2C96c-1.75%2C1.135-3.771%2C1.698-5.771%2C1.698c-1.75%2C0-3.521-0.438-5.104-1.302C194.125%2C359.49%2C192%2C355.906%2C192%2C352V160c0-3.906%2C2.125-7.49%2C5.563-9.365c3.375-1.854%2C7.604-1.74%2C10.875%2C0.396l149.333%2C96c3.042%2C1.958%2C4.896%2C5.344%2C4.896%2C8.969S360.813%2C263.01%2C357.771%2C264.969z%22%2F%3E%0A%3C%2Fsvg%3E');
			videoPoster.setAttribute('width', '50%');
			videoPoster.setAttribute('height', '50%');
			videoPoster.style.transform = 'translate(25%, 25%)';
			svg.appendChild(videoPoster);
		}
	}
});

var folder = document.querySelectorAll('.folder');
folder.forEach(function(folder) {
	folderAssets = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	folderAssets.setAttribute('viewBox', '512 512');
	folder.prepend(folderAssets);

	folderImage = document.createElementNS('http://www.w3.org/2000/svg', 'image');
	folderImage.setAttribute('href', 'https://cdnkey.github.io/folder.svg');
	folderImage.setAttribute('width', '100%');
	folderImage.setAttribute('height', '100%');
	folderImage.setAttribute('preserveAspectRatio', 'xMidYMid meet');
	folderAssets.appendChild(folderImage);
});
