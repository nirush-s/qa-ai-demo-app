let cart = [];

setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("productSection").style.display = "block";
}, 1500);

function addToCart(key, name) {
    if (!cart.find(p => p.key === key)) {
        cart.push({ key, name });
        localStorage.setItem("cart", JSON.stringify(cart));

        const btn = document.getElementById(`add${capitalize(key)}Btn`);
        btn.innerText = "Added to Cart";
        btn.disabled = true;

        updateCartCount();
    }
}

function updateCartCount() {
    document.getElementById("cartCount").innerText =
        `Cart Items: ${cart.length}`;
}

function handleCartAction() {
    const action = document.getElementById("cartAction").value;

    if (action === "cart") {
        window.location.href = "cart.html";
    }
    if (action === "checkout") {
        window.location.href = "order-success.html";
    }
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
