var buttonFeedback = document.querySelector("#feedback");

var popup = document.querySelector(".dark-layer");

var close = popup.querySelector(".cross-close");

buttonFeedback.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("dark-layer-show");
});

close.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.remove("dark-layer-show");
});
