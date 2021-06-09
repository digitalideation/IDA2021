//Quelle:https://stackoverflow.com/questions/1901966/how-to-create-a-cloud-chart


var skillsToDraw = [
	{ text: 'Space', size: 40 },
	{ text: 'Licht', size: 15 },
	{ text: 'Weltraum', size: 25 },
	{ text: 'Flash', size: 25 },
	{ text: 'Zwischenwelt', size: 30 },
	{ text: 'Halitunationen', size: 30 },
	{ text: 'neue Welt', size: 15 },
	{ text: 'abschalten', size: 10 },
	{ text: 'verschiedene Stile', size: 20 },
	{ text: 'abdrehen', size: 20 },
	{ text: 'Mischung', size: 25 },
	{ text: 'Legende', size: 38 },
];

// Next you need to use the layout script to calculate the placement, rotation and size of each word:

    var width = 500;
    var height = 500;
    var fill = d3.scale.category20();

    d3.layout.cloud()
    	.size([width, height])
    	.words(skillsToDraw)
    	.rotate(function() {
    		return ~~(Math.random() * 2) * 90;
    	})
    	.font("Impact")
    	.fontSize(function(d) {
    		return d.size;
    	})
    	.on("end", drawSkillCloud)
    	.start();

// Finally implement `drawSkillCloud`, which performs the D3 drawing:

    // apply D3.js drawing API
    function drawSkillCloud(words) {
    	d3.select("#cloud").append("svg")
    		.attr("width", width)
    		.attr("height", height)
    		.append("g")
    		.attr("transform", "translate(" + ~~(width / 2) + "," + ~~(height / 2) + ")")
    		.selectAll("text")
    		.data(words)
    		.enter().append("text")
    		.style("font-size", function(d) {
    			return d.size + "px";
    		})
    		.style("-webkit-touch-callout", "none")
    		.style("-webkit-user-select", "none")
    		.style("-khtml-user-select", "none")
    		.style("-moz-user-select", "none")
    		.style("-ms-user-select", "none")
    		.style("user-select", "none")
    		.style("cursor", "default")
    		.style("font-family", "Impact")
    		.style("fill", function(d, i) {
    			return fill(i);
    		})
    		.attr("text-anchor", "middle")
    		.attr("transform", function(d) {
    			return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
    		})
    		.text(function(d) {
    			return d.text;
    		});
    }

// optional: set the viewbox to content bounding box (zooming in on the content, effectively trimming whitespace)

    var svg = document.getElementsByTagName("svg")[0];
    var bbox = svg.getBBox();
    var viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
    svg.setAttribute("viewBox", viewBox);

    const addSongtitel2 = (ev)=>{
        ev.preventDefault();  //to stop the form submitting
        let songtitel = {
            text: document.getElementById('title').value,
            size: getRandomIntInclusive()
        }
        skillsToDraw.push(songtitel);
        document.querySelector('form').reset();

		var element = document.getElementById("cloud");
		while (element.firstChild) {
  		element.removeChild(element.firstChild);
		}

// Neue grafik erstellen
        d3.layout.cloud()
    	.size([width, height])
    	.words(skillsToDraw)
    	.rotate(function() {
    		return ~~(Math.random() * 2) * 90;
    	})
    	.font("Impact")
    	.fontSize(function(d) {
    		return d.size;
    	})
    	.on("end", drawSkillCloud)
    	.start();
        
        //saving to localStorage
        localStorage.setItem('MyMovieList', JSON.stringify(skillsToDraw) );
    }
    document.addEventListener('DOMContentLoaded', ()=>{
        document.getElementById('btn').addEventListener('click', addSongtitel);
    });

	function getRandomIntInclusive() {
		min = Math.ceil(1);
		max = Math.floor(40);
		return Math.floor(Math.random() * (max - min +1)) + min;
	  }