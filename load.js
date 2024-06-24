var svgNS = "http://www.w3.org/2000/svg"; 
var svg = document.createElementNS(svgNS, "svg");
svg.setAttribute("viewBox", "50 50");
svg.setAttribute("class", "pure-loading");
svg.setAttribute("style", "width: 60px; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); display: none;");

var defs = document.createElementNS(svgNS, "defs");

var linearGradient = document.createElementNS(svgNS, "linearGradient");
linearGradient.setAttribute("id", "loadingMedia");
linearGradient.setAttribute("x1", "0");
linearGradient.setAttribute("y1", "0");
linearGradient.setAttribute("x2", "70%");
linearGradient.setAttribute("y2", "30%");

var stop1 = document.createElementNS(svgNS, "stop");
stop1.setAttribute("offset", "0");
stop1.setAttribute("stop-color", "#000377");

var stop2 = document.createElementNS(svgNS, "stop");
stop2.setAttribute("offset", "100%");
stop2.setAttribute("stop-color", "#ffffff");
stop2.setAttribute("stop-opacity", "0.6");

linearGradient.appendChild(stop1);
linearGradient.appendChild(stop2);

defs.appendChild(linearGradient);

svg.appendChild(defs);

var path = document.createElementNS(svgNS, "path");
path.setAttribute("fill", "url(#loadingMedia)");
path.setAttribute("d", "M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z");

var animateTransform = document.createElementNS(svgNS, "animateTransform");
animateTransform.setAttribute("attributeType", "xml");
animateTransform.setAttribute("attributeName", "transform");
animateTransform.setAttribute("type", "rotate");
animateTransform.setAttribute("from", "0 25 25");
animateTransform.setAttribute("to", "360 25 25");
animateTransform.setAttribute("dur", "0.6s");
animateTransform.setAttribute("repeatCount", "indefinite");

path.appendChild(animateTransform);

svg.appendChild(path);

document.body.appendChild(svg);
