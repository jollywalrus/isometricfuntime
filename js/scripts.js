var colors = ["color-one", "color-two", "color-three", "color-four", "transparent"];

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function removeClasses(object) {
  object.classList.remove("color-one", "color-two", "color-three", "color-four", "transparent");
}

function randomize() {
  $("polygon").each(function() {
    removeClasses(this);
    this.classList.add(randomColor());
  });
}

$(document).ready(function() {

  randomize();

  $("#randomize").on('click', function() {
    randomize();
  }); //end on

  $("polygon").on('click', function() {
    var newColor = randomColor()

    while (this.classList.contains(newColor)) {
      removeClasses(this);
      newColor = randomColor();

    } //end while
    removeClasses(this);
    this.classList.add(newColor);
  }); //end on

}); //end ready
