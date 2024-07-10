const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get('/', (request, response) => {
    response.send(``)
})

app.get('/index', (request, response) => {
    response.render(`calc`)
})

app.post('/calc', (request, response) => {
    var calcular = window.document.querySelector('input#calcular')

    calcular.addEventListener('click', () => {
        let resultado = num2.value * num3.value / num1.value
        ah.innerText = (`${resultado}`)
        console.log(`${resultado}`)
    })

    response.render(`calc`)
})
const porta = 8080
app.listen(porta, () => {
    console.log(`Servidor rodando em localhost:${porta}`)
})