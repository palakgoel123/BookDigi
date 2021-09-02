let formbtn = document.querySelector("#login-btn");
let formsbtn = document.querySelector("#signup-btn");
let loginform = document.querySelector(".login-form-container");
let signupform = document.querySelector(".sign");
let formclose = document.querySelector("#form-close");
let formsclose = document.querySelector(".forms-close");

formclose.addEventListener("click", () => {
  loginform.classList.remove("active");
});
formbtn.addEventListener("click", () => {
  loginform.classList.add("active");
});
formsbtn.addEventListener("click", () => {
  signupform.classList.add("active");
});
formsclose.addEventListener("click", () => {
  signupform.classList.remove("active");
});

let products = [
  {
    name: "Wings of Fire",
    author: "Abdul Kalam",
    price: 342,
    inCart: 0,
  },
  {
    name: "Beautiful Disaster",
    author: "Jamie Mcguire",
    price: 656,
    inCart: 0,
  },
  {
    name: "A Promised Land",
    author: "Barack Obama",
    price: 206,
    inCart: 0,
  },
  {
    name: "The Other Boleyn Girl",
    author: "Philippa Gregory",
    price: 410,
    inCart: 0,
  },
  {
    name: "The Gambling Man",
    author: "David Baldacci",
    price: 513,
    inCart: 0,
  },
  {
    name: "The Killing Tide",
    author: "Lin Anderson",
    price: 192,
    inCart: 0,
  },
  {
    name: "The Tale Of Two Cities",
    author: "Charles Dickens",
    price: 333,
    inCart: 0,
  },
  {
    name: "Ender’s Game",
    author: "Orson Scott Card",
    price: 423,
    inCart: 0,
  },
  {
    name: "The Handmaid's Tale",
    author: "Margaret Atwood",
    price: 256,
    inCart: 0,
  },
  {
    name: "Vision in White",
    author: "Nora Roberts",
    price: 389,
    inCart: 0,
  },
];
let carts = document.querySelectorAll(".add-cart");
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNum(products[i]);
    totalCost(products[i]);
  });
}
function onLoadCartnum() {
  let productnum = localStorage.getItem("cartNum");
  if (productnum) {
    document.querySelector(".nav-item span").textContent = productnum;
  }
}
function cartNum(product) {
  let productnum = localStorage.getItem("cartNum");
  productnum = parseInt(productnum);
  if (productnum) {
    localStorage.setItem("cartNum", productnum + 1);
    document.querySelector(".nav-item span").textContent = productnum + 1;
  } else {
    localStorage.setItem("cartNum", 1);
    document.querySelector(".nav-item span").textContent = 1;
  }
  setItems(product);
}
function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  console.log(cartItems);
  if (cartItems != null) {
    if (cartItems[product.name] == undefined) {
      cartItems = {
        ...cartItems,
        [product.name]: product,
      };
    }
    cartItems[product.name].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.name]: product,
    };
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
  alert("Book added to cart");
}
function totalCost(product) {
  let cartcost = localStorage.getItem("totalCost");
  if (cartcost != null) {
    cartcost = parseInt(cartcost);
    localStorage.setItem("totalCost", cartcost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}
function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  let cartcost = localStorage.getItem("totalCost");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".product");
  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
      <tr>
        <th scope="row" class="border">
          <div class="p-2">
            <div class="ml-3 d-inline-block align-middle">
              <h5 class="mb-0 cart-row"> <h5 href="#" class="d-inline-block align-middle">${
                item.name
              }</h5><span class="d-block cart-auth">Author:${item.author}</span>
            </div>
          </div>
        </th>
          <td class="border align-middle cart-p"><strong>Rs${
            item.price
          }/-</strong></td>
          <td class="border align-middle cart-q">
            <button class="bt"><i class="fas fa-chevron-circle-left"></i></button><strong><span>${
              item.inCart
            }</span></strong><button class="bt"><i class="fas fa-chevron-circle-right"></button></i>
                  <button class="btn remove" data-name="${
                    item.name
                  }" onClick="cart_remove()"><i class="fa fa-trash rem"></i></button>
                  </td>
                  <td class="border align-middle cart-p"><strong>Rs${
                    item.inCart * item.price
                  }/-<strong></td>
                </tr  
        <tr>`;
    });
    productContainer.innerHTML += `
    <div class="basketcon">
    <h3 class=baskettotal>Basket Total : <span>Rs${cartcost}/-<span></h3>
    </div>
    `;
  }
}
onLoadCartnum();
displayCart();
