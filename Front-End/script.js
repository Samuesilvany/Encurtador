async function carregaUrls() {
  const container = document.getElementById("lista-dados");
  try {
    const resposta = await fetch("http://localhost:3000/urls");
    const urls = await resposta.json();

    container.innerHTML = urls
      .map(
        (item) => `
            <div>
              <p><strong>ID:</strong> ${item.id}</p>
              <p><strong>URL:</strong> ${item.original_url}</p>
            </div>
          `,
      )
      .join("");
  } catch (error) {
    container.innerHTML = "<p>Erro ao carregar dados.</p>";
  }
}

carregaUrls();
