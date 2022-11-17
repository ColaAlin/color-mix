function colors() {
  const red = document.querySelector("#red").value;
  const green = document.querySelector("#green").value;
  const blue = document.querySelector("#blue").value;
  document.body.style.backgroundColor =
    "rgb(" + red + "," + green + "," + blue + ")";

  let hex = "";

  let r = parseInt(red, 10).toString(16);
  r = r.length == 1 ? "0" + r : r;

  let b = parseInt(green, 10).toString(16);
  b = b.length == 1 ? "0" + b : b;

  let g = parseInt(blue, 10).toString(16);
  g = g.length == 1 ? "0" + g : g;

  hex = "#" + r + b + g;
  document.querySelector("#hex").innerText = hex;
}
colors();

let randomColor = document.querySelector("button");
randomColor.addEventListener("click", function () {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((respond) => respond.json())
    .then((colors) => {
      red.value = colors.rgb.r;
      green.value = colors.rgb.b;
      blue.value = colors.rgb.g;
    });
  colors();
});
