let lastTap = 0;
const heart = document.getElementById("heart");

heart.addEventListener("touchend", function (e) {
  const currentTime = new Date().getTime();
  const tapLength = currentTime - lastTap;

  if (tapLength < 300 && tapLength > 0) {
    window.location.href = "love.html";
  }

  lastTap = currentTime;
});