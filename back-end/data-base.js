export class database {
    #filmes = new Map()
    list(titulo, diretor, nota, id, synopsis) {
        this.#filmes.set(1, {
            titulo: "papagaio",
            nota: 5.5,
            diretor: "a",
            synopsis: "pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp",
            URL_trailer: "https://youtu.be/dQw4w9WgXcQ?feature=shared",
            URL_poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTan-5wmRcR0MyAYj6KMZLw7mOVnwZhuRI-A&s"
        })
        this.#filmes.set(2, {
            titulo: "Naruto: The last",
            nota: 9.5,
            diretor: "Tsuneo Kobayashi",
            synopsis: "Filme onde o Naruto vai pra lua e dá uma de astronauta",
            URL_trailer: "https://youtu.be/dQw4w9WgXcQ?feature=shared",
            URL_poster: "https://upload.wikimedia.org/wikipedia/pt/thumb/f/f5/The_Last_Naruto_the_Movie.jpg/200px-The_Last_Naruto_the_Movie.jpg"
        })
        this.#filmes.set(3, {
            titulo: "Hora de aventura",
            nota: 7.5,
            diretor: "Pendleton Ward",
            synopsis: "Filme de hora de aventura ",
            URL_trailer: "https://youtu.be/dQw4w9WgXcQ?feature=shared",
            URL_poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXtYWtX5Pf99fKX434XNY2dE7qw_obPHinuQ&s"
        })
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
                if (id) {
                    return (movie.id == id)
                }
                if (nota) {
                    return (movie.nota == nota)
                }
                if (diretor) {
                    return (movie.diretor == diretor)
                }
                if (titulo) {
                    return (movie.titulo == titulo)
                }
                else { return true }
            })



    }

    create(filme) {
        const filmesID = this.#filmes.size + 1
        this.#filmes.set(filmesID, filme)
    }
    update(titulo, id) {
        this.#filmes.set(id, titulo)
    }
    delete(titulo) {
        this.#filmes.delete(titulo)
    }
}
