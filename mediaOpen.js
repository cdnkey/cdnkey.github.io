function openSVG() {
  var clickedArticle = event.target.closest('article');

  var svgElement = clickedArticle.querySelector('svg');

  var svgCode = svgElement.outerHTML;

  var newWindow = window.open('', '_blank');

	newWindow.document.write('<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><style>*{margin:0;padding:0;box-sizing:border-box;}svg{position:absolute;top:0;left:0;}</style><title>Open Image</title></head><body>' + svgCode + '</body></html>');
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
