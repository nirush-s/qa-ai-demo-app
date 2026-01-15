const cart = JSON.parse(localStorage.getItem("cart")) || [];
const list = document.getElementById("cartItems");

cart.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item.name;
    list.appendChild(li);
});

function checkout() {
    localStorage.removeItem("cart");
    window.location.href = "order-success.html";
}
