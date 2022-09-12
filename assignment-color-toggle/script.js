const btnColor = document.getElementsByClassName('btnColor');

let i;
for(i = 0;i<btnColor.length;i++) {
    btnColor[i].addEventListener('click', changeColor)
}

function changeColor() {
    let color = this.getAttribute('data-color');
    document.documentElement.style.setProperty('--color', color);
}

function openNav() {
    document.getElementById('navContent').style.display = 'block';
  }

function closeNav() {
    document.getElementById('navContent').style.display = 'none';
  }
