export class database {
    #filmes = new Map()
    init = 0

    list(id, search, favorite) {
        
        if(this.init == 0){
            this.#filmes.set(1, {
                titulo: "Pokémon: Detetive Pikachu",
                nota: 8.8,
                favorite: true,
                diretor: "Rob Letterman",
                synopsis: "Um jovem une forças com o detetive Pikachu para desvendar o mistério por trás do desaparecimento de seu pai. Perseguindo pistas pelas ruas de Ryme City, a dupla dinâmica logo descobre uma trama desonesta que representa uma ameaça ao universo Pokémon.",
                URL_trailer: "https://youtu.be/dQw4w9WgXcQ?feature=shared",
                URL_poster: "https://musicart.xboxlive.com/7/90045100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
            })
            
            this.#filmes.set(2, {
                titulo: "Naruto: The last",
                nota: 9.5,
                favorite: false,
                diretor: "Tsuneo Kobayashi",
                synopsis: "Hanabi Hyuuga, a irmã mais nova de Hinata, é sequestrada por Toneri Ootsutsuki. Naruto Uzumaki une forças para ajudar a irmã caçula de seu novo amor, mas suas habilidades são postas à prova quando perde sua forma mais poderosa.",
                URL_trailer: "https://youtu.be/dQw4w9WgXcQ?feature=shared",
                URL_poster: "https://upload.wikimedia.org/wikipedia/pt/thumb/f/f5/The_Last_Naruto_the_Movie.jpg/200px-The_Last_Naruto_the_Movie.jpg"
            })
            this.#filmes.set(3, {
                titulo: "Hora de aventura",
                nota: 7.5,
                favorite: false,
                diretor: "Pendleton Ward",
                synopsis: "Finn vive grandes aventuras na terra de Ooo na companhia de seu melhor amigo, Jake. De viagens a reinos alucinantes a lutas contra vampiros, os dois estão prontos para enfrentar qualquer perigo.",
                URL_trailer: "https://youtu.be/dQw4w9WgXcQ?feature=shared",
                URL_poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXtYWtX5Pf99fKX434XNY2dE7qw_obPHinuQ&s"
            })
            this.#filmes.set(3, {
                titulo: "Fullmetal Alchemist: The Sacred Star of Milos ",
                nota: 8.0,
                favorite: false,
                diretor: "Kazuya Murata",
                synopsis: "Na terra sagrada perdida de Milos, os Elrics buscam a verdade por trás de uma forma desconhecida de alquimia. Quais segredos estão escondidos em Milos? Enigmas devem ser resolvidos e perigos enfrentados antes que a verdade possa ser encontrada.",
                URL_trailer: "https://youtu.be/c29kC6Ja_f0?feature=shared",
                URL_poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR57U1hqr1vrAx-HucrpKYv7kx903xTHKUw8aGUIVrej5hDM3lz"
            })
            this.init = 2
        }
        return Array.from(this.#filmes.entries())
            .map((filmeArray) => {
                const id = filmeArray[0]
                const data = filmeArray[1]

                return {
                    id,
                    ...data
                }
            })
            .filter(movie => {

                if (search) {
                    return (
                        movie.titulo.toLowerCase().includes(search.toLowerCase())
                    )
                }
                if (favorite) {
                    return movie.favorite == true
                }
                if (id) {
                    return id == movie.id
                }
                else { return true }
            })



    }

    create(filme) {
        const filmesID = this.#filmes.size + 1
        this.#filmes.set(filmesID, filme)
    }
    update(id, filme1) {
        const newId = Number(id)

        delete filme1[0].id

        
        if (filme1[0].favorite){
            filme1[0].favorite = false
            this.#filmes.set(newId,filme1[0])
        }else{
            filme1[0].favorite = true
            this.#filmes.set(newId,filme1[0])
        }         
        
    }
    delete(titulo) {
        this.#filmes.delete(titulo)
    }
}
