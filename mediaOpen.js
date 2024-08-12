function openSVG() {
  var clickedArticle = event.target.closest('article');

  var svgElement = clickedArticle.querySelector('svg');

  var svgCode = svgElement.outerHTML;

  var newWindow = window.open('', '_blank');

	newWindow.document.write('<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" /><style>*{margin:0;padding:0;box-sizing:border-box;}body{background:#000;}body::before{content:\'\';display:block;position:fixed;top:0;left:0;z-index:9999;width:100%;height:100vh;background:#000;opacity:0;}svg{position:absolute;top:0;left:0;}</style><title>Resim</title></head><body>' + svgCode + '</body></html>');
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
			videoPoster.setAttribute('href', 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22115.1%20114.3%20797.7%20797.7%22%3E%3Cpath%20d%3D%22M514%20912c-219.9%200-398.9-178.9-398.9-398.8S294%20114.3%20514%20114.3c219.9%200%20398.8%20178.9%20398.8%20398.9C912.8%20733.1%20733.9%20912%20514%20912z%20m0-701.5c-166.9%200-302.7%20135.8-302.7%20302.7S347.1%20815.9%20514%20815.9s302.7-135.8%20302.7-302.7S680.9%20210.5%20514%20210.5z%22%20fill%3D%22%23279773%22%20fill-opacity%3D%220.8%22%2F%3E%3Cpath%20d%3D%22M437.1%20345.9L687%20490.2c17.7%2010.2%2017.7%2035.7%200%2045.9L437.1%20680.5c-17.7%2010.2-39.8-2.6-39.8-23V368.9c0-20.4%2022.1-33.2%2039.8-23z%22%20fill%3D%22%2338d793%22%2F%3E%3C%2Fsvg%3E');
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
