const filmes = [{ nome: "pokemon" }, { nome: "Digimon" }, { nome: "lol" }]
const Server_URL = "http://localhost:3333/cinema"
async function load() {
    const cards = document.getElementById("position-card")
    cards.innerHTML = ""
    

    //Send Response

    fetch(`${Server_URL}?search=""`, { method: "GET" }).then((response) => response.json()).then((filmes) => {
        console.log(filmes)
        for (cont = 0; cont < filmes.length; cont++) {
            cards.innerHTML += `<div class="card">
                <p>${filmes[cont].titulo}</p>
                <a href="posterbase.html" onclick="setLocal(${filmes[cont].id})"><img src="${filmes[cont].URL_poster}" alt="poke">
                </a>
            </div>`
        }
    })

    // for(cont=0;cont < filmes.length;cont++){
    //     alert(filmes[cont].nome)
    // }
    // cards.innerHTML += `<div class="card">
    //             <p>pé de pano mortal</p>
    //             <a href="index.html"><img src="imagens/mimikyu-removebg-preview.png" alt="poke">
    //             </a>
    //         </div>`

}
function setLocal(id) {
    localStorage.setItem(1, id)
    //localStorage.setarItem(CHAVE,VALOR)
}
function loadPoster() {
    const id = localStorage.getItem(1)
    fetch(`${Server_URL}?id=${id}`, { method: "GET" }).then((response) => response.json()).then((filmes) => {
        document.getElementById("URL_trailer").href = filmes[0].URL_trailer
        document.getElementById("URL_poster").src = filmes[0].URL_poster
        document.getElementById("synopsis").innerText = filmes[0].synopsis
        document.getElementById("titulo").innerText = filmes[0].titulo
        document.getElementById("diretor").innerText = `Diretor: ${filmes[0].diretor}`
    })
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
        for (cont = 0; cont < 10 || cont < filmes.length; cont++) {
            console.log(filmes[cont])
               main.innerHTML += (            
                    `<section class="positionAll">

            <div class="top10Img">
                <p class="title_poster">${filmes[cont].titulo}</p>
                <a href="posterbase.html">
                    <img src="${filmes[cont].URL_poster}" alt="Cine_poster">
                </a>
            </div>
            <div class="top10Cont">
                <p class="sinopsy">${(filmes[cont].synopsis)} </p>
                <p class="nota">Nota: ${(filmes[cont].nota)}</p>
                <p class="diretor">Diretor: ${filmes[cont].diretor}</p>

            </div>
        </section>`
                )
        }
        const element= document.getElementById("synopsis")
        const LIMT = 8
        for(let synopsis of element){
            const limt_caracter= synopsis.innerText.length > LIMT
            const NOlimit_caracter=limt_caracter ? `...`:``
            synopsis.innerText = synopsis.innerText.substring(0, LIMT)+Olimit_caracter 
        }
    })

}

