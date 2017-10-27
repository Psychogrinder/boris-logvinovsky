$( function() {
  $(".datepicker").datepicker();
});

function isChildOf(child, parent) {
    if (child.parentNode === parent) {
      return true;
    } else if (child.parentNode === null) {
      return false;
    } else {
      return isChildOf(child.parentNode, parent);
    }
}

var buttonOrder = document.querySelector("#order");

var popup = document.querySelector("#popup");

buttonOrder.addEventListener("click", function() {
  popup.classList.add("search-popup-show");
});

document.addEventListener("click", function(event) {
  if (!event.target.classList.contains("search-popup")
    && !event.target.classList.contains("order-button")
    && !isChildOf(event.target, popup)) {
      popup.classList.remove("search-popup-show");
  }
});
