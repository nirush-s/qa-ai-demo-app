function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "demoUser" && password === "demo123") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerText = "Invalid credentials";
    }
}
