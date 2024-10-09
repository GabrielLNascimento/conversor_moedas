const btn = document.getElementById("btn-convert")
const res = document.getElementById("res")


btn.addEventListener("click", async () => {
    const checkBox = document.querySelector("input[type='radio']:checked")
    const inpt = document.getElementById("val")

    if (inpt.value == "") {
        alert("Digite um valor numérico")
        return
    }

    let valor_final = 0
    let data = await dataAPI()
    let valor_dol = data.USDBRL.bid
    
    switch (checkBox.id) {
        case 'dol-r':
            valor_final = valor_dol * Number.parseFloat(inpt.value) 
            res.innerHTML = `${valor_final.toFixed(2)} Reais`
            break

        case 'r-dol':
            valor_final = Number.parseFloat(inpt.value) / valor_dol
            res.innerHTML = `${valor_final.toFixed(2)} Dollars`
            break

        default:
            alert("ERRO")
            break
    }
})

async function dataAPI() {
    const url_api = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"

    return fetch(url_api).then(res => {
        return res.json()
    })
}

