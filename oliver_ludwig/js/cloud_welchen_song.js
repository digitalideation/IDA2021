var songListUser = [
	
];

var songListeResult = [
	{ text: 'A Dozen Red Roses for My Darling', size: 40 },
    { text: 'A Human Body', size: 30 },
    { text: '39', size: 15 },
    { text: 'A Winter’s Tale', size: 38 },
    { text: 'Crash Dive on Mingo City', size: 22 },
    { text: 'Crazy Little Thing Called Love', size: 37 },

    { text: 'Dead on Time', size: 11 },
    { text: 'Another One Bites the Dust', size: 18 },
    { text: 'Don’t Try So Hard', size: 33 },
    { text: 'Back Chat', size: 13 },
    { text: 'Dreamer’s Ball', size: 27 },
    { text: 'Escape from the Swamp', size: 31 },
    { text: 'Bijou', size: 11 },
    { text: 'Father to Son', size: 18 },
    { text: 'Body Language', size: 25 },
    { text: 'Bohemian Rhapsody', size: 11 },
    { text: 'Football Fight', size: 16 },
    { text: 'Hang on in There', size: 9 },
    { text: 'Bring Back That Leroy Brown', size: 15 },
    { text: 'I Can’t Live With You', size: 11 },
    { text: 'Chinese Torture', size: 18 },
    { text: 'Coming Soon', size: 12 },
    { text: 'Cool Cat', size: 33 },
    { text: 'I Was Born to Love You', size: 21 },
    { text: 'In Only Seven Days', size: 37 },
    { text: 'In the Space Capsule (The Love Theme)', size: 19 },
    { text: 'Jesus', size: 25 },
    { text: 'Let Me Entertain You', size: 29 },
    { text: 'Life Is Real', size: 5 },
    { text: 'Modern Times Rock ’n’ Roll', size: 7 },
    { text: 'Play the Game', size: 12 },
    { text: 'Radio Ga Ga', size: 23 },
    { text: 'Scanda', size: 38 },
    { text: 'Staying Power', size: 13 },
    { text: 'The Show Must Go On', size: 27 },
    { text: 'We Are the Champions', size: 32 },
];

    var width = 500;
    var height = 500;
    var fill = d3.scale.category20();

    d3.layout.cloud()
    	.size([width, height])
    	.words(songListUser)
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
            d3.select("#songtitel_cloud").append("svg")
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

        const addSongtitel = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let songtitel = {
                text: document.getElementById('songtitel').value,
                size: 32
            }
            songListUser.push(songtitel);
            document.querySelector('form').reset();
            document.getElementById('Frage_nach_Songtitel').innerHTML = 'Kennst du noch einen weiteren Song?';
    
            var element = document.getElementById("songtitel_cloud");
            while (element.firstChild) {
              element.removeChild(element.firstChild);
            }
    // Neue grafik erstellen
            d3.layout.cloud()
            .size([width, height])
            .words(songListUser)
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
            localStorage.setItem('MyMovieList', JSON.stringify(songListUser) );
        }

         const addFullSongtitelList = (ev)=>{
                ev.preventDefault();  //to stop the form submitting
                songListUser.push(songListeResult);
                document.querySelector('form').reset();
                var element = document.getElementById("songtitel_cloud");
                while (element.firstChild) {
                  element.removeChild(element.firstChild);
                }

                d3.layout.cloud()
                .size([width, height])
                .words(songListeResult)
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
                localStorage.setItem('MyMovieList', JSON.stringify(songListeResult) );
            }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', addSongtitel);
            document.getElementById('btn_volle_Liste').addEventListener('click', addFullSongtitelList);
        });

        function getRandomIntInclusive() {
            min = Math.ceil(1);
            max = Math.floor(40);
            return Math.floor(Math.random() * (max - min +1)) + min;
          }