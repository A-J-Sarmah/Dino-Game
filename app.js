let counter = 0;
const character = document.getElementById("character");
const block = document.getElementById("block");
function jump() {
  if (character.classList.contains("animate")) {
    return;
  } else {
    character.classList.add("animate");
    setTimeout(() => {
      character.classList.remove("animate");
    }, 300);
  }
}
window.addEventListener("click", jump);
window.addEventListener("keypress", (event) => {
  if (event.keyCode == 32) {
    jump();
  }
});
const collisionDetection = setInterval(() => {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 20 && blockLeft > -20 && characterTop >= 135) {
    block.style.animation = "none";
    alert("Game Over. score: " + Math.floor(counter / 100));
    counter = 0;
    block.style.animation = "block 1s infinite linear";
  } else {
    counter++;
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
  }
}, 10);
