function pesquisar() {
  const termoPesquisa = document.getElementById('campo-pesquisa').value.trim().toLowerCase();
  const section = document.getElementById("resultado");
  section.innerHTML = "";

  // Filtra os dados com base no termo de pesquisa
  const resultadosFiltrados = dados.filter(dado => {
    return dado.titulo.toLowerCase().includes(termoPesquisa);
  });

  

  // Renderiza os resultados filtrados
  resultadosFiltrados.forEach(dado => {
    const div = document.createElement('div');
    div.classList.add('item-resultado');

    const video = document.createElement('video');
    video.src = dado.videoUrl;
    video.controls = true;

    const h2 = document.createElement('h2');
    h2.textContent = dado.titulo;

    const p = document.createElement('p');
    p.textContent = dado.descriçao;

    div.appendChild(video);
    div.appendChild(h2);
    div.appendChild(p);
   

    section.appendChild(div);
  });
}
