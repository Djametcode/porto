function openSidebar() {
    const element  = document.getElementById('sidebar');
    element.style.visibility = 'visible';

    const element2 = document.getElementById('x-btn');
    element2.style.visibility = 'visible';

        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        document.getElementById('clock').innerHTML =  h + ":" + m;
        setTimeout(10);
     const element3 = document.getElementById('profile');
     element3.style.visibility = 'visible'
}


function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

function closeSidebar() {
    const element  = document.getElementById('sidebar');
    element.style.visibility = 'hidden';
    const element2 = document.getElementById('x-btn');
    element2.style.visibility = 'hidden';
    const element3 = document.getElementById('profile');
    element3.style.visibility = 'hidden'
}

function darkMode() {
    const intro = document.getElementById('intro');
    intro.style.boxShadow = 'none';
    const intro2 = document.getElementsByClassName('intro2');
    for( let i = 0; i < intro2.length; i++) {
        intro2[i].style.backgroundColor = 'slateBlue';
        intro2[i].style.color = 'white';
        intro2[i].style.boxShadow = 'none';
    }

    const design = document.getElementsByClassName('design');
    for ( let i = 0; i < design.length; i++ ) {
        design[i].style.backgroundColor = 'white';
    }

    const text = document.getElementsByClassName('project-text');
    for ( let i = 0; i < text.length; i++ ) {
        text[i].style.color = 'black';
    }


    const ele = document.querySelector('section');
    ele.style.backgroundColor = 'black';
    const project = document.getElementById('project');
    project.style.backgroundColor = 'black';
    const element  = document.getElementById('sidebar');
    element.style.visibility = 'hidden';
    const element2 = document.getElementById('x-btn');
    element2.style.visibility = 'hidden';
    const element3 = document.getElementById('profile');
    element3.style.visibility = 'hidden'
}