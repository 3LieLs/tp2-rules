const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    x = '', posFinal = ''

    response.render(`index`, {x, posFinal})
})

app.post('/formulario', (request, response) => {
    x = request.body.num2 * request.body.num3 / request.body.num1
    posFinal = parseFloat(request.body.posInicial) + request.body.veloc * request.body.interv

    response.render(`index`)
})

const porta = 8080
app.listen(porta, () => {
    console.log(`Servidor rodando em localhost:${porta}`)
})