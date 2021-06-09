// Codesnipets from www.jasondavies.com/wordcloud/
//Quelle:https://stackoverflow.com/questions/1901966/how-to-create-a-cloud-chart


var gedankenSong = [
	
];
    var width = 500;
    var height = 500;
    var fill = d3.scale.category20();

    d3.layout.cloud()
    	.size([width, height])
    	.words(gedankenSong)
    	.rotate(function() {
    		return ~~(Math.random() * 2) * 90;
    	})
    	.font("Impact")
    	.fontSize(function(d) {
    		return d.size;
    	})
    	.on("end", drawSongCloud)
    	.start();

        function drawSongCloud(words) {
            d3.select("#gedanken_cloud").append("svg")
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

        var svg = document.getElementsByTagName("svg")[0];
        var bbox = svg.getBBox();
        var viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
        svg.setAttribute("viewBox", viewBox);

        const addGedanken = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let songtitel = {
                text: document.getElementById('gedanken_input').value,
                size: 32
            }
            gedankenSong.push(songtitel);
            document.querySelector('form').reset();
            
    
            var element = document.getElementById("gedanken_cloud");
            while (element.firstChild) {
              element.removeChild(element.firstChild);
            }
    // Neue grafik erstellen
            d3.layout.cloud()
            .size([width, height])
            .words(gedankenSong)
            .rotate(function() {
                return ~~(Math.random() * 2) * 90;
            })
            .font("Impact")
            .fontSize(function(d) {
                return d.size;
            })
            .on("end", drawSongCloud)
            .start();
            
            //saving to localStorage
            localStorage.setItem('MyMovieList', JSON.stringify(gedankenSong) );
        }

         
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', addGedanken);
        });

        function getRandomIntInclusive() {
            min = Math.ceil(1);
            max = Math.floor(40);
            return Math.floor(Math.random() * (max - min +1)) + min;
          }