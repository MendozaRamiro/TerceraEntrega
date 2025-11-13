document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Inicio de sesión exitoso ");
    window.location.href = "productos.html";
});
