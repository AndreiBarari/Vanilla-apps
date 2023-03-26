const products = [
  {
    prod: "tshirt",
    price: 2,
  },
  {
    prod: "jeans",
    price: 3,
  },
  {
    prod: "parka",
    price: 4,
  },
];

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
function ready() {
  let quantityInputs = document.getElementsByClassName("product-quantity");
  for (let el of quantityInputs) {
    el.addEventListener("change", quantityChanged);
  }

  let addToCartBtn = document.getElementsByClassName("add-to-cart");
  for (let button of addToCartBtn) {
    button.addEventListener("click", addToCart);
  }
}

// Input validation
function quantityChanged(event) {
  let el = event.target;
  if (isNaN(el.value) || el.value <= 0) {
    el.value = 1;
  }
  updateTotal();
}

// Add product to cart
function addToCart(event) {
  document.getElementById("no-content").style.display = "none";
  document.getElementById("content").style.display = "inline";
  let button = event.target;
  let cartItem = button.parentElement;
  let title = cartItem.getElementsByClassName("title")[0].innerText;
  let price = cartItem.getElementsByClassName("cost")[0].innerText;
  addItemToCart(title, price);
  updateTotal();
}

function addItemToCart(title, price) {
  let productRow = document.createElement("div");
  productRow.classList.add("cart-row");
  let cartItems = document.getElementsByClassName("cart-content")[0];
  let itemNames = cartItems.getElementsByClassName("product-name");
  for (let item of itemNames) {
    if (item.innerText == title) {
      alert("This product is already in your shopping cart!");
      return;
    }
  }

  let productRowContent = `<div class="product-name">${title}<div class="tooltip"><i class="fa-solid fa-info"></i></i>
                            <span class="tooltiptext">This is a short description about this awesome product that appear
                                only on hover</span>
                        </div>
                    </div>
                    <div><input class="product-quantity" type="number" value="1"></div>
                    <div class="float-right"><span>&#36;</span><span class="product-price">${price}</span></div>`;

  productRow.innerHTML = productRowContent;
  cartItems.append(productRow);
  productRow
    .getElementsByClassName("product-quantity")[0]
    .addEventListener("change", quantityChanged);
}

// Update total value
function updateTotal() {
  const cartRows = document.getElementsByClassName("cart-row");
  let total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];
    const priceElement = cartRow.getElementsByClassName("product-price")[0];
    const quantityElement = cartRow.getElementsByClassName("product-quantity")[0];
    let price = parseFloat(priceElement.innerText);
    let quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementById("total").innerText = total;
}
