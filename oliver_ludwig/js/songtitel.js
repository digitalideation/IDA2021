
  function textFaerben(bandmitglied) {
    reset();
    let deacons = document.getElementsByClassName(bandmitglied);
    for (let i = 0; i < deacons.length; i++) {
        deacons[i].style.color='orange';
    }
    return;
  }

  function titel_mischen() {
    reset();
    let songtitels = document.getElementsByClassName('songtitel');
    for (let i = 0; i < songtitels.length; i++) {
        songtitels[i].style.translate='transform(20)';
        songtitels[i].style.translate='12';
    }
    return;
  }

  

  function reset() {
    let mercurys = document.getElementsByClassName('mercury');
    for (let i = 0; i < mercurys.length; i++) {
    mercurys[i].style.color='white';
    }
    let taylors = document.getElementsByClassName('taylor');
    for (let i = 0; i < taylors.length; i++) {
        taylors[i].style.color='white';
    }
    let mays = document.getElementsByClassName('may');
    for (let i = 0; i < mays.length; i++) {
        mays[i].style.color='white';
    }

    let deacons = document.getElementsByClassName('deacon');
    for (let i = 0; i < deacons.length; i++) {
        deacons[i].style.color='white';
    } 
    return;
  }
  