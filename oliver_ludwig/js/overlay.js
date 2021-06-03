
var bandmembers = [
	{ name: 'Roger Meddows Taylor', bandzeit: '26.07.1949 – ', beschreibung: "Roger Meddows Taylor OBE ist ein britischer Multiinstrumentalist, Sänger, Gründungsmitglied und –  wie die übrigen drei Bandmitglieder – Komponist der Rockgruppe Queen. Seine bekanntesten Beiträge zu deren Liederkatalog sind unter anderem die Stücke Radio Ga Ga, A Kind of Magic, Breakthru, These Are the Days of Our Lives und I’m in Love with My Car.", close: 'Space', },
    { name: 'John Richard Deacon', bandzeit: '19.08.1951 – ', beschreibung: 'John Richard Deacon ist ein ehemaliger britischer Musiker. Er wurde als Bassist der britischen Rockband Queen bekannt, für die er auch Songs wie Another One Bites the Dust, I Want to Break Free und Spread Your Wings schrieb. Er ist seit 1997 nicht mehr bei Konzerten aufgetreten.', close: 'Space', },
    { name: 'Brian Harold May', bandzeit: '19.07.1947 – ', beschreibung: 'May war zusammen mit Leadsänger Freddie Mercury und Schlagzeuger Roger Taylor Gründungsmitglied von Queen, nachdem er zuvor mit Taylor in der Band Smile gespielt hatte. Nach der Komplettierung der Besetzung durch Bassist John Deacon etablierten sich Queen als eine der führenden britischen Rockbands. ', close: 'Space', },
    { name: 'Freddie Mercury', bandzeit: '05.09.1946 – 24.11.1991', beschreibung: 'Freddie Mercury  war ein britischer Musiker und einer der bedeutendsten Rocksänger der 1970er und 80er Jahre. Er wurde als Mitbegründer, Komponist und Leadsänger der Band Queen bekannt. Mercurykomponierte Welthits wie Bohemian Rhapsody (1975) oder We Are the Champions (1977).', close: 'Space', },
];

function overlay_bandmember(person){

    console.log("Die Funktion wurde getrigert");
    const name = document.createElement('h2');
    const bandzeit = document.createElement('h4');
    const beschreibung = document.createElement('p');
    const close = document.createElement('img');

    console.log("Die elemente sind erstellt");

    name.innerHTML=bandmembers[person-1].name;
    bandzeit.innerHTML=bandmembers[person-1].bandzeit;
    beschreibung.innerHTML=bandmembers[person-1].beschreibung;
    close.innerHTML='';

    console.log(name);

    document.getElementById('section_3_overlay').appendChild(name);
    document.getElementById('section_3_overlay').appendChild(bandzeit);
    document.getElementById('section_3_overlay').appendChild(beschreibung);

    document.getElementById('section_3_overlay').style.display='flex';
    document.getElementById('bandmembers').style.display='none';
}

function close_memberinfo(){
    document.getElementById('section_3_overlay').style.display='none';
    document.getElementById('bandmembers').style.display='flex';

    var element = document.getElementById("section_3_overlay");
    for (let i=0;i<=2;i++){
        element.removeChild(element.lastChild);
    }
}


