

const filmes = [{ nome: "pokemon" }, { nome: "Digimon" }, { nome: "lol" }]
const Server_URL = "http://localhost:3334/cinema"
async function load() {
    
    //Send Response
    const cards = document.getElementById("position-card")
    fetch(`${Server_URL}`, { method: "GET" }).then((response) => response.json()).then((filmes) => {

        for (cont = 0; cont < filmes.length; cont++) {
            cards.innerHTML += `
            <div class="card">
                <div class="absolute">
                    <p>${filmes[cont].titulo}</p>
                    
                </div>
                <div class="favorite_icon">
                    <img src="${filmes[cont].favorite?"imagens/favorite.png":"imagens/no_favorite.png"}" id="Nfavorite${filmes[cont].id}" alt="" class="star" onclick="favoritar(${filmes[cont].id})">
                </div>
                <a href="posterbase.html" onclick="setLocal(${filmes[cont].id}">
                    <img src="${filmes[cont].URL_poster}" alt="poke" class="card_img">
                </a>
            </div>`
        }
    })
}
function next() {
    
}
function loadPoster() {
    const id = localStorage.getItem(1)
    fetch(`${Server_URL}?id=${id}`, { method: "GET" }).then((response) => response.json()).then((filmes) => {
        document.getElementById("URL_trailer").href = filmes[0].URL_trailer
        document.getElementById("URL_poster").src = filmes[0].URL_poster
        document.getElementById("synopsis").innerText = filmes[0].synopsis
        document.getElementById("titulo").innerText = filmes[0].titulo
        document.getElementById("diretor").innerText = `Diretor: ${filmes[0].diretor}`
        document.getElementById("Nfavorite").src = filmes[0].favorite ? "imagens/favorite.png" : "imagens/no_favorite.png"

    })
}
function setLocal(id) {
    localStorage.setItem(1, id)
    //localStorage.setarItem(CHAVE,VALOR)
}

function loadtop10() {
    fetch(`${Server_URL}`, { method: "GET" }).then((response) => response.json()).then((filmes) => {
        filmes.sort((a, b) => {
            if (b.nota > a.nota) {
                return 1;
            }
            if (b.nota < a.nota) {
                return -1;
            } else { return 0 }

        })
        const main = document.getElementById("main")
        const limit = 80
        for (cont = 0; cont < 10 && cont < filmes.length; cont++) {

            main.innerHTML += (
                `<section class="positionAll">

            <div class="top10Img">
                <p class="title_poster"><strong>${filmes[cont].titulo}</strong></p>
                <a href="posterbase.html" onclick="setLocal(${filmes[cont].id})"><img src="${filmes[cont].URL_poster}" alt="poke">
                </a>
            </div>
            <div class="top10Cont">
                <p class="sinopsy">${(filmes[cont].synopsis.length <= limit) ? filmes[cont].synopsis : filmes[cont].synopsis.slice(0, limit) + "..."} </p>
                <p class="nota">Nota: ${(filmes[cont].nota)}</p>
                <p class="diretor">Diretor: ${filmes[cont].diretor}</p>

            </div>
            </section>`
            )
        }

    })

}
function favoritos() {
    const cards = document.getElementById("position-card")
    fetch(`${Server_URL}?favorite=true`, { method: "GET" }).then((response) => response.json()).then((filmes) => {
        console.log(filmes)

        for (cont = 0; cont < filmes.length; cont++) {
            cards.innerHTML += `
            <div class="card">
                <div class="absolute">
                    <p>${filmes[cont].titulo}</p>
                    
                </div>
                <a href="posterbase.html" onclick="setLocal(${filmes[cont].id}">
                    <img src="${filmes[cont].URL_poster}" alt="poke" class="card_img">
                </a>

            </div>`
        }
    })
}
async function favoritar(id) {
    if (id == undefined) {
        id = localStorage.getItem(1)
        fetch(`${Server_URL}?id=${id}`, { method: "PUT" }).then((response) => response.json())
    }
    else {
        await fetch(`${Server_URL}?id=${id}`, { method: "PUT" }).then()
        fetch(`${Server_URL}?id=${id}`, { method: "GET" }).then((response) => response.json()).then((filmes) => {
            const fav = document.getElementById(`Nfavorite${id}`)
            if (filmes[0].favorite) {
                fav.src = "imagens/favorite.png"
            } else { fav.src = "imagens/no_favorite.png" }

        })
    }



}
function pesquisa() {
    const cards = document.getElementById("position-card")
    const search = document.getElementById("search").value
    cards.innerHTML = ""


    //Send Response

    fetch(`${Server_URL}?search=${search}`, { method: "GET" }).then((response) => response.json()).then((filmes) => {
        console.log(filmes)
        for (cont = 0; cont < filmes.length; cont++) {
            cards.innerHTML += `
            <div class="card">
                <div class="absolute">
                    <p>${filmes[cont].titulo}</p>
                    
                </div>
                <div class="favorite_icon">
                    <img src="${filmes[cont].favorite ? "imagens/favorite.png" : "imagens/no_favorite.png"}" id="Nfavorite${filmes[cont].id}" alt="" class="star" onclick="favoritar(${filmes[cont].id})">
                </div>
                <a href="posterbase.html" onclick="setLocal(${filmes[cont].id}">
                    <img src="${filmes[cont].URL_poster}" alt="poke" class="card_img">
                </a>

            </div>`
        }
    })
}
