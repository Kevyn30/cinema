

function load_carrocel() {
    fetch(`${Server_URL}`, { method: "GET" }).then((response) => response.json()).then((filmes) => {
        filmes.sort((a, b) => {
            if (b.nota > a.nota) {
                return 1;
            }
            if (b.nota < a.nota) {
                return -1;
            } else { return 0 }

        })
        const newCarrocel = document.getElementById("carrocel")
        while (filmes.length > 10) {
            filmes.pop()
        }
        newCarrocel.innerHTML = ''
        for (cont = 1; cont <= filmes.length; cont++) {
            newCarrocel.innerHTML += `
            <input type="radio" name="radio" id="radio${cont}">
            `
        }
        newCarrocel.innerHTML += `<div class="nav_auto" id="navAuto"></div>`
        const newNavAuto = document.getElementById("navAuto")
        for (cont = 1; cont <= filmes.length; cont++) {
            newNavAuto.innerHTML += `
            <label for="radio${cont}" class="auto_bnt" id="auto_bnt${cont}"></label>
            `
        }
        newCarrocel.innerHTML += `<div class="cont-carrocel" id="slid_carrocel"></div>`
        const newImgCarrocel = document.getElementById("slid_carrocel")
        for (cont = 1; cont <= filmes.length; cont++) {
            newImgCarrocel.innerHTML += `
            <div class="slide-box fist"><img src="${filmes[cont].URL_poster}"></div>
            `
        }
        

        let newcont = 1
        setInterval(function () {
            newcont++
            if (newcont >= filmes.length) {
                cont = 1
            }

            document.getElementById(`radio${newcont}`).checked = true
        }, 7000);
    })


}
