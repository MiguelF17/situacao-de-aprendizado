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

function motos() {
    fetch("http://10.92.199.53:3000/motos")
        .then((res) => res.json())
        .then((data) => {

            let cardsContainer = document.getElementById("moto")

            data.forEach(moto => {

                let card = document.createElement("div")

                card.innerHTML = `
                <div class="card-img">
                    <img src="${moto.imagem}" />
                </div>
                <div class="card-info">
                    <p class="nome">${moto.nome}</p>
                    <p class="preco">${moto.preco}</p>
                </div>
                <button class="comprar">Comprar</button>
            `

                cardsContainer.append(card)
            });
        })
}

function vendedores() {
    fetch("http://10.92.199.53:3000/vendedores")
        .then((res) => res.json())
        .then((data) => {

            let cardsContainer = document.getElementById("vendedor")

            data.forEach(vendedor => {

                let card = document.createElement("div")

                card.innerHTML = `
                <div class="vendedor-img">
                    <img src="${vendedor.imagem}" />
                </div>
                <div class="vendedor-info">
                    <p class="nome">${vendedor.nome}</p>
                </div>
            `

                cardsContainer.append(card)
            });
        })
}

motos()
carros()
vendedores()
