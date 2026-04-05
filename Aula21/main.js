let position = 0;

const box = document.getElementById("box");

function moveBox() {
  if (position < 2030) {
    position += 2;
    
    box.style.left = position + "px";
    requestAnimationFrame(moveBox);
  }
} 

moveBox();