let cart = document.querySelector(".cart");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", addToCart);
});
let addTo = 0;




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