function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light");
  //pegando a tag img//
  const img = document.querySelector("#profile img");
  //substituindo a imagem//
  if(html.classList.contains('light')){
    //substituição no light mode//
    img.setAttribute('src','avatar-light.png', 'alt','foto de Mayke Brito sorrindo com óculos de sol, a foto tem um fundo azul e roxo');
  } else{
    //caso esteja no dark mode//
    img.setAttribute(
      "src",
      "avatar.png",
      "alt",
      "Foto de Mayke Brito sorrindo usando óculos e camisa preta, a foto tem o fundo amarelo"
    )
  }
}
