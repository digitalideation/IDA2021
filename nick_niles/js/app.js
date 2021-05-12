let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("class", "octicon octicon-star");
svg.setAttribute("viewBox", "0 0 14 16");
svg.setAttribute("version", "1.1");
svg.setAttribute("width", "24");
svg.setAttribute("height", "16");
svg.setAttribute("aria-hidden", "true");

let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute("fill-rule", "evenodd");
path.setAttribute("d",
  "M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14");

svg.appendChild(path);
console.log('i am done');