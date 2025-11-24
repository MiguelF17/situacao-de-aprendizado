function carros() {
    fetch("http://10.92.199.53:3000/carros")
        .then((res) => res.json())
        .then((data) => {

            //Div onde os carro aparecem 
            let cardsContainer = document.getElementById("carro")

            data.forEach(carro => {
                // criando card
                let card = document.createElement("div")

                card.innerHTML = `
                <div class="card-img">
                    <img src="${carro.imagem}" />
                </div>
                <div class="card-info">
                    <p class="nome">${carro.nome}</p>
                    <p class="preco">${carro.preco}</p>
                </div>
                <button class="comprar">Comprar</button>
            `

                cardsContainer.append(card)
            });
        })
}

carros()