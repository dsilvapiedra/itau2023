function checkPassword() {
  var password = document.getElementById("password").value;
  if (password === "123") {
    window.location.href = "paginas/pagina1.html";
  } else {
    alert("Contraseña incorrecta. Inténtalo de nuevo.");
  }
}
