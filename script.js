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
}

function darkMode() {
    const intro = document.getElementById('intro');
    intro.style.boxShadow = 'none';
    const ele = document.querySelector('section');
    ele.style.backgroundColor = 'black';
    const project = document.getElementById('project');
    project.style.backgroundColor = 'black';
    const element  = document.getElementById('sidebar');
    element.style.visibility = 'hidden';
    const element2 = document.getElementById('x-btn');
    element2.style.visibility = 'hidden';
}