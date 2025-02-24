document.getElementById('cardID').addEventListener('mouseover', mouseOver);
document.getElementById('cardID').addEventListener('mouseout', mouseOut);

function mouseOver() {
  document.getElementById('card-h3-ID').style.color = 'black';
}

function mouseOut() {
  document.getElementById('card-h3-ID').style.color = 'white';
}
