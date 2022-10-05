function openSidebar() {
    const element  = document.getElementById('sidebar');
    element.style.visibility = 'visible';

    const element2 = document.getElementById('x-btn');
    element2.style.visibility = 'visible';
}

function closeSidebar() {
    const element  = document.getElementById('sidebar');
    element.style.visibility = 'hidden';
    const element2 = document.getElementById('x-btn');
    element2.style.visibility = 'hidden';
}

function darkMode() {
    const element  = document.getElementById('sidebar');
    element.style.visibility = 'hidden';
    const element2 = document.getElementById('x-btn');
    element2.style.visibility = 'hidden';
}