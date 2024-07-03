const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get('/', (request, response) => {
    response.send
    (`<form action="/calculo">
        <input id="num1" type="number">
        <input id="num2" type="number">

        <input type="button" value="Subtrair">
    </form>`)
})

app.get('/calculo', (request, response) => {
    let soma = parseFloat(num1) + parseFloat(num2)
   
    response.send(`Resultado = ${soma}`)
})
app.listen(8080)