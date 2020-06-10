var i = 0;
var images = [];
var time = 2000;
let cart = document.querySelector(".cart");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", addToCart);
});
let addTo = 0;
let items = 0;

// image list

images[0] = "high-angle-view-of-shoes-322207.jpg";
images[1] = "classic-clothes-commerce-fashion-298863.jpg";
images[2] = "black-casual-classic-clothes-292999.jpg";
images[3] = "flat-lay-of-clothes-3998740.jpg";
images[4] = "action-adult-businessman-clothing-447570.jpg";

// change image
function changeImage() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImage()", time);
}
window.onload = changeImage;

function addToCart(ev) {
  if (addTo <= 8) {
    addTo += 1;
    cart.innerText = `My Cart(${addTo}) `;
    cart.classList = "text-info p-3 lead";
    buttons.forEach((button) => {
      button.addEventListener("click", function (ev) {
        button.classList.add("bg-info");
        button.disabled = "true";
        button.innerText = "Added to Cart";
      });
    });
  } else {
    alert("cart is full");
  }
}
