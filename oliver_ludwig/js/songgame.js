var songs = [
    { text: 'A Dozen Red Roses for My Darling', writer: 'Taylor', songtext: 'Kein Songtext vorhanden!',},
    
    { text: 'A Human Body', writer: 'Taylor', 
    songtext: 'Words and music by roger taylor They were talking in whispers In bear skins and fur Captain scott and his heroes to be To have laboured so long To have made it this far Ooh its been such a long ride Ooh you know its been a long way For a human human human For a human body you see Can you believe it happens Now it happens here Do you believe do you believe or really care Can you believe it happens Now it happens here To a human human With a human body you see There aint nobody gets out of this moonlight Today is surprisingly fair Oh oh oh oh woo woo Weve got problems the lone ranger cant fix The invisible man couldnt see It takes a tough guy To learn some new tricks Ooh it takes such a long time Ooh its been such a long way For a human human human', },
    
    { text: 'Dead on Time', writer: 'May', songtext: 'Fool always jumpin never happy where you land Fool got my business make your living where you can Hurry down the highway Hurry down the road Hurry past the people starin Hurry hurry hurry hurry', },

    { text: 'Another One Bites the Dust', writer: 'Deacon', songtext: 'Steve walks warily down the street With his brim pulled way down low Aint no sound but the sound of his feet Machine guns ready to go Are you ready hey are you ready for this? Are you hanging on the edge of your seat? Out of the doorway the bullets rip To the sound of the beat yeah',},
    { text: 'Don’t Try So Hard', writer: 'Mercury', songtext: 'If youre searching out for something Dont try so hard I youre feeling kind of nothing Dont try so hard When your problems seem like mountains Feel the need to find some answers You can leave it for another day Dont try so hard',},

    { text: 'Back Chat', writer: 'Deacon', songtext: 'Yeah Get back get back Back chat back chat You burn all my energy Back chat back chat Criticizing all you see Back chat, back chat Analyzing what I say Back chat, back chat And you always get your way', },

    { text: 'Bohemian Rhapsody', writer: 'Mercury', songtext: 'Is this the real life? Is this just fantasy?   Caught in a landside, No escape from reality  Open your eyes,   Look up to the skies and see, Im just a poor boy, I need no sympathy, Because Im easy come, easy go,  Little high, little low, Any way the wind blows doesnt really matter to Me, to me',},


    { text: 'I Can’t Live With You', writer: 'May', songtext: 'I can nott live with you But I can not live without you I can not let you stay  Ooh, but I can not live if you go away I dont know just how it goes All I know is I cant live with you',},

    { text: 'Play the Game', writer: 'Mercury', songtext: 'Open up your mind and let me step inside Rest your weary head and let your heart decide Its so easy when you know the rules Its so easy, all you have to do is fall in love',},

    { text: 'The Show Must Go On', writer: 'Mercury', songtext: 'Empty spaces, what are we living for? Abandoned places, I guess we know the score, on and on Does anybody know what we are looking for? Another hero, another mindless crime Behind the curtain, in the pantomime Hold the line Does anybody want to take it anymore?', },
    { text: 'We Are the Champions', writer: 'Mercury', songtext: 'Ive paid my dues Time after time Ive done my sentence But committed no crime And bad mistakes Ive made a few Ive had my share of sand Kicked in my face But Ive come through', },
];

let gewählterSong=0;

let score = 0;
let bestmarke=32;
let spielzeit=0;


function startGame(){
    document.getElementById('game_start_screen').style.display='none';
    document.getElementById('game_section').style.display='flex';

    document.getElementById('songtitel_songgame').innerHTML=songs[gewählterSong].text;
    document.getElementById('richtig').style.display='none';
              document.getElementById('falsch').style.display='none';
}

function buttonPressed(BtnNr){
    switch (BtnNr) {
        case 1:
          if(songs[gewählterSong].writer=="Mercury"){
              score++
              document.getElementById('richtig').style.display='flex';
              document.getElementById('falsch').style.display='none';
              resultatboardAktualisieren();
              neuerSong();
          }else{
            console.log("Falsch")
            neuerSong();
            document.getElementById('richtig').style.display='none';
            document.getElementById('falsch').style.display='flex';
          }
          break;
        case 2:
            if(songs[gewählterSong].writer=="Taylor"){
              document.getElementById('richtig').style.display='flex';
              document.getElementById('falsch').style.display='none';
                score++
              resultatboardAktualisieren();
              neuerSong();
            }else{
              console.log("Falsch")
              neuerSong();
              document.getElementById('richtig').style.display='none';
              document.getElementById('falsch').style.display='flex';
            }
            break;
        case 3:
            if(songs[gewählterSong].writer=="May"){
                score++
              resultatboardAktualisieren();
              neuerSong();
              document.getElementById('richtig').style.display='flex';
              document.getElementById('falsch').style.display='none';
            }else{
              console.log("Falsch")
              neuerSong();
              document.getElementById('richtig').style.display='none';
              document.getElementById('falsch').style.display='flex';
            }
            break;
        case "4":
            if(songs[gewählterSong].writer=="Deacon"){
                score++
              resultatboardAktualisieren();
              neuerSong();
              document.getElementById('richtig').style.display='flex';
              document.getElementById('falsch').style.display='none';
            }else{
              console.log("Falsch")
              neuerSong();
              document.getElementById('richtig').style.display='none';
              document.getElementById('falsch').style.display='flex';
            }
            break;
        default:
            break;
      }

}

function songtextEinblenden(){
    document.getElementById('songtext_songgame').innerHTML= songs[gewählterSong].songtext;
}

function resultatboardAktualisieren(){
    document.getElementById('points_of_user').innerHTML= score;
    document.getElementById('highscore').innerHTML= bestmarke;
    document.getElementById('spielzeit').innerHTML= spielzeit;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function neuerSong(){
    gewählterSong = getRandomIntInclusive(0,10);
    document.getElementById('songtitel_songgame').innerHTML=songs[gewählterSong].text;

}