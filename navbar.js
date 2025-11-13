document.addEventListener("DOMContentLoaded", () => {
  const navbar = `
    <nav class="navbar">
      <h2 class="logo">RM<span>Periféricos</span></h2>
      <ul class="nav-links">
        <li><a href="index.html">Inicio</a></li>
        <li><a href="pages/login.html">Login</a></li>
        <li><a href="pages/registro.html">Registrarse</a></li>
        
        </ul>
    </nav>
  `;
  document.getElementById("navbar").innerHTML = navbar;
});
