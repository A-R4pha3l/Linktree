function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("claro")
  const img = document.querySelector("#icon img")
  if (html.classList.contains("claro")) {
    img.setAttribute("src", "/linktree/DENJI.jpg")
  } else {
    img.setAttribute("src", "/linktree/Vagabond.jpg")
  }
}
