import { fastify } from "fastify";
import cors from "@fastify/cors";
import { database } from "/home/ravtec/Área de Trabalho/cinema/back-end/data-base.js";


const cine = fastify()
const memory = new database

await cine.register(cors, {})
//criar filmes

cine.post("/cinema", (request, reply) => {
    const id = request.body
    const { titulo, diretor, synopsis, nota, URL_trailer, URL_poster } = database.list()
    const favorite = false
    memory.create({
        titulo,
        diretor,
        favorite,
        synopsis,
        nota,
        URL_trailer,
        URL_poster
    })
    return reply.status(204).send()
})
cine.put("/cinema", (request, reply) => {

    const favorite = request.params.id
    const { titulo, diretor, synopsis, nota, URL_trailer, URL_poster } = requed.body
    memory.update(favorite, {
        titulo,
        diretor,
        favorite,
        synopsis,
        nota,
        URL_trailer,
        URL_poster
    })
    return reply.status(204).send()
})
// lista todos os filmes
cine.get("/cinema", (request) => {
    const { id, search,favorite } = request.query
    console.log(search)
    const filmes = memory.list(id, search,favorite)

    return filmes

})

cine.delete("/cinema", (request, reply) => {
    const filmeID = request.params.id

    memory.delete(filmeID)

    return reply.status(204).send()
})


//rota de reqeusição e resposta
cine.listen({ port: 3333 })