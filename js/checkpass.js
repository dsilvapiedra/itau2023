function checkPassword() {
  var password = document.getElementById("password").value;
  if (password === "contraseña") {
    window.location.href = "paginas/pagina1.html";
  } else {
    alert("Contraseña incorrecta. Inténtalo de nuevo.");
  }
}
