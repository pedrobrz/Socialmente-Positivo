function alternarModo() {
    document.body.classList.toggle("dark-mode");
  }
  
  function mostrarImagem(id) {
    const img = document.getElementById(id);
    if (img) {
      img.style.display = img.style.display === "block" ? "none" : "block";
    }
  }
  
