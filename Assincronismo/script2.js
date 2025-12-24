function execDepois(id, callback) {

    console.log("Buscando usuário com id: ", id)

    setTimeout(() => {
        const user = { name: "Weslei", age: 20 }
        callback(user)
    }, 5000)
}

execDepois(1, (res) => {
    console.log(res.name)
})


// --------------------------------------------------------------------------------------

console.log("PROMISSE: .........")
function downloadImage(image) {
    return new Promise((res, rej) => {
        console.log(`Buscando imagem ${image}...`)

        setTimeout(() => {
            const result = true;

            if (result) {
                res(`Baixando imagem ${image}...`)
            } else {
                rej("ERRO 501 - Erro interno!")
            }
        }, 4000)
    })
}

downloadImage("profile_picture.png")
    .then((message) => {
        console.log(message)
    })
    .catch((err) => {
        console.log(err)
    })

// --------------------------------------------------------------------------------------

async function getUser() {
    const result = await fetch("https://api.github.com/users/wesleiMateus").then((res) => {
        console.log(res.json())
    })
    console.log(result)
}

getUser()