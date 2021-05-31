var voronoi = (function(){

    /****************
     * Object Voronoi
     */
    var Voronoi = function (){

        this.canvas = null;
        this.sites = null;
        this.nbParticles = null;
        this.speed = null;
        this.voronoi = null;
    };

    Voronoi.prototype.init = function(classCanvas, nbParticle){
      
        this.canvas = document.querySelector(classCanvas),
             context = this.canvas.getContext("2d"),
             width = window.innerWidth,
             height = window.innerHeight;
      
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
      
     
        window.addEventListener("resize", this.onResize.bind(this), false);

        /* Nb Particles */
        this.nbParticles = nbParticle;

        /* Speed Particles */
        this.speed = [5];
        for(var i=0; i<this.nbParticles; i++) this.speed[i]=[];

        /* Sites */
        this.sites = d3.range(this.nbParticles)
            .map(function(d) { return [Math.random() * window.innerWidth, Math.random() * window.innerHeight]; });

        this.initRandomSpeed();
        this.redraw();
        this.draw();
    };

    Voronoi.prototype.initRandomSpeed = function(){

        var i;
        for (i = 0; i < this.nbParticles; i++) {

            if(i%2) {
                this.speed[i].x = -Math.random()+1;
                this.speed[i].y = -Math.random()+1;
            } else {
                this.speed[i].x = Math.random()+1;
                this.speed[i].y = Math.random()+1;
            }

        }


    };

    Voronoi.prototype.rebondOnScreen = function(){

        var i;
        for(i = 0; i < this.sites.length; i++) {

            if(this.sites[i][0] < 0 || this.sites[i][0] > window.innerWidth) {
                this.speed[i].x *= -1;
            }

            if(this.sites[i][1] < 0 || this.sites[i][1] > window.innerHeight) {
                this.speed[i].y *= -1;
            }

            this.sites[i][0] += this.speed[i].x;
            this.sites[i][1] += this.speed[i].y;
        }

    };

    Voronoi.prototype.redraw = function(){

        var voronoi = d3.voronoi()
            .extent([[-1, -1], [width + 1, height + 1]]);

        var diagram = voronoi(this.sites);
        var polygons = diagram.polygons();

        context.clearRect(0, 0, width, height);
        context.beginPath();

        /* Gradient */
        var gradient = context.createLinearGradient(0, 0, window.innerWidth, 0);
        gradient.addColorStop("0", "#e72150");
        gradient.addColorStop("1", "#46bfee");

        /* DrawCells */
        var h;
        for (h = 0, n = polygons.length; h < n; ++h) this.drawCell(polygons[h]);
        context.lineWidth=2;
        context.strokeStyle = gradient;
        context.stroke();
    };

    Voronoi.prototype.drawCell = function(cell){

        if (!cell) return false;
        context.moveTo(cell[0][0], cell[0][1]);
        for (var j = 1, m = cell.length; j < m; ++j) {
            context.lineTo(cell[j][0], cell[j][1]);
        }
        context.closePath();
        return true;

    };

    Voronoi.prototype.draw = function(){

        requestAnimationFrame(this.draw.bind(this));


        this.rebondOnScreen();
        this.redraw();

    };

    Voronoi.prototype.onResize = function(){

        this.canvas = document.querySelector(".canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        width = canvas.width;
        height = canvas.height;

        
        this.sites = d3.range(this.nbParticles)
            .map(function(d) { return [Math.random() * window.innerWidth, Math.random() * window.innerHeight]; });


    };

    return Voronoi;
})();

//Launcher
  var myVoronoi = new voronoi();
  myVoronoi.init(".canvas", 400);