const express = require('express')
const app = express()
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render("index", { nomeUsuario: "", resultado: "" });
})

app.get('/loja', (req, res) => {
    res.render("loja", { compras: ""});
})

app
    .route("/teste")
    .get((req, res) => {
        res.redirect("/")
    })
    .post((req, res) => {
        nomeUsuario = `Bem vindo(a): ${req.body.nomeUsuario}`
        resultado = `Soma = ${parseFloat(req.body.n1) + parseFloat(req.body.n2)}`

        res.render("index");
    })

const porta = 8080
app.listen(porta, () => {
    console.log(`Servidor rodando em localhost:${porta}`)
})