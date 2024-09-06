function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultado");
    console.log(section);
  
    let resultado = "";
  
    // Itera sobre os dados da pesquisa e cria o HTML para cada item
    for (let dado of dados) {
      resultado += `
        <div class="video-container"> <h2>${dado.titulo}</h2> <video src="img/video1.mp4" controls></video> <p>${dado.descriçao}</p> </div>
      `;
    }
  
    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultado;
  }






