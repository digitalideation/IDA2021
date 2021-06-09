



document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const scoreDisplay = document.getElementById('score')
    const width = 40
    let score = 0
    var gameover = document.getElementById("gameover")
    var frogcaught = document.getElementById("frogcaught")
    var frog = document.getElementsByClassName("frog")
    var cascos = document.getElementsByClassName("casco")
    var blurry = document.getElementById("blurry")
    var tooinsistentshort = document.getElementById("tooinsistentshort")
    const timeLeftDisplay= document.querySelector("#time-left")
    const startBtn = document.querySelector("#start-button")
    let timeLeft = 20
    const againBtn = document.querySelector("#again")
    const blurryface = document.querySelector("#blurrybeforestart")
    const player = document.querySelector("#oneplayers")
    //var green = document.getElementsByClassName("green")


    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1,
        1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1,
        1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1,
        1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1,
        1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1,
        1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1,
        1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1,
        1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
        1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
        1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1,
        1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
        1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]

    const squares = []


    //0 wall
    //1 path
    //2 casco
    //3 frog


    function createBoard() {
        var i = 0;
        for (i = 0; i < layout.length; i++) {
            const square = document.createElement('div')
            grid.appendChild(square)
            squares.push(square)



            if (layout[i] === 0) {
                squares[i].classList.add('path')

            } else if (layout[i] === 1) {
                squares[i].classList.add('wall')
                // } else if (layout [i] === 2) {
                //     squares[i].classList.add('casco')
                //  } else if (layout [i] ===3){
                //     squares[i].classList.add('frog')
            }

        }

    }
    createBoard()
    //add layout to the createBoard
    
    //position casco

    let cascoCurrentIndex = 255
    squares[cascoCurrentIndex].classList.add('casco')

    let frogCurrentIndex = 480
    squares[frogCurrentIndex].classList.add('frog')

    
    

    //move casco// 
    function moveCasco(e) {
        squares[cascoCurrentIndex].classList.remove('casco')
        squares[frogCurrentIndex].classList.remove('frog')
        squares[frogCurrentIndex].classList.add('green')
        squares[cascoCurrentIndex].classList.add('white')
        switch (e.keyCode) {
            case 37:
                if (cascoCurrentIndex % 32 !== 0 && !squares[cascoCurrentIndex - 1].classList.contains('wall'))
                    cascoCurrentIndex -= 1
                break
            case 38:
                if (cascoCurrentIndex - 32 >= 0 && !squares[cascoCurrentIndex - 32].classList.contains('wall'))
                    cascoCurrentIndex -= 32
                break
            case 39:
                if (cascoCurrentIndex % 32 < 32 - 1 && !squares[cascoCurrentIndex + 1].classList.contains('wall'))
                    cascoCurrentIndex += 1
                break
            case 40:
                if (cascoCurrentIndex + 32 < 32 * 32 && !squares[cascoCurrentIndex + 32].classList.contains('wall'))
                    cascoCurrentIndex += 32
                break
            case 65:
                if (frogCurrentIndex % 32 !== 0 && !squares[frogCurrentIndex - 1].classList.contains('wall'))
                    frogCurrentIndex -= 1
                break
            case 87:
                if (frogCurrentIndex - 32 >= 0 && !squares[frogCurrentIndex - 32].classList.contains('wall'))
                    frogCurrentIndex -= 32
                break
            case 68:
                if (frogCurrentIndex % 32 < 32 - 1 && !squares[frogCurrentIndex + 1].classList.contains('wall'))
                    frogCurrentIndex += 1
                break
            case 83:
                if (frogCurrentIndex + 32 < 32 * 32 && !squares[frogCurrentIndex + 32].classList.contains('wall'))
                    frogCurrentIndex += 32
                break
            
    
        }
        squares[cascoCurrentIndex].classList.add('casco')
        squares[frogCurrentIndex].classList.add('frog')
     
        
        //frogCatch()
        
        //clearGreen()
        showFrog(e)
        checkGameOver()
        

    }
    document.addEventListener('keydown', moveCasco)
    document.addEventListener('keyup', showFrog) 

    function showFrog(e) {
        if (e.keyCode == "81") {
           frog[0].style.backgroundColor = "yellow";
        }
    }

    function checkGameOver() {

        if (cascoCurrentIndex == frogCurrentIndex) {
            
            cascos[0].style.backgroundImage = "url('../images/cmp_casco.png')";
            cascos[0].style.backgroundColor = "green";
            frogcaught.style.display="inline";
            blurry.style.filter = "blur(3px)";
            clearInterval(timeLeft='x')
            startBtn.style.display='none';
            againBtn.style.display='inline';
            tooinsistentshort.pause();
            player.style.display='none';
        
    
    }

    }
    
  
   
    buttonplay.onclick = function(){
        tooinsistentshort.play();
        
        }
       

    function countDown (){
        blurryface.style.filter ="blur(0px)";
        setInterval (function(){
            if(timeLeft <= 0){
                frogwins.style.display="inline";
                startBtn.style.display='none';
                againBtn.style.display='inline';
                player.style.display='none';
                blurry.style.filter = "blur(3px)";
                clearInterval(timeLeft=0)
                tooinsistentshort.pause();
            }
            
            timeLeftDisplay.innerHTML = timeLeft
            timeLeft -=1
        }, 1000)
    }   

function revenge (){
    
    location.reload();
    //tooinsistentshort.play();
    
}

  
startBtn.addEventListener('click', countDown)
againBtn.addEventListener('click', revenge)
//againBtn.addEventListener('click', location.reload())

    // function frogCatch() {
    //     if (squares[cascoCurrentIndex].classList.contains('frog')) {
    //         score++
    //         scoreDisplay.innerHTML = score
    //         squares[cascoCurrentIndex].classList.remove('frog')


    //     }




    //}

    //gameover

    

})
