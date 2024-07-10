const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get('/', (request, response) => {
    response.send(`<form method="post" action="/calc">
        <input id="num1" type="number" placeholder="Número 1" style="">
        <input id="num2" type="number" placeholder="Número 2">
        <br>
        <input id="num3" type="number" placeholder="Número 3">

        <input id="calcular" type="submit" value="Calcular">

        <p id="ah">Resultado...</p>
    </form>`)
})

app.post('/calc', (request, response) => {
    let resultado = num2.value * num3.value / num1.value
    ah.innerText = (`${resultado}`)
    console.log(`${resultado}`)

    response.render(`/`)
})
const porta = 8080
app.listen(porta, () => {
    console.log(`Servidor rodando em localhost:${porta}`)
})