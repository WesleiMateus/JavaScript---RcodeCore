const showUser = document.createElement("div")
showUser.classList.add("container")

const mostrarNaTela = document.createElement("p")

showUser.appendChild(mostrarNaTela)
document.body.appendChild(showUser)

const showInfosBtn = document.getElementById("btn");

showInfosBtn.addEventListener("click", () => {
    function getUser() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res({ name: "weslei", age: 20 }),
                rej("501 - Internal Server Error")
            }, 3000)
        })
    }

    getUser()
        .then((res) => {
            mostrarNaTela.innerText = JSON.stringify(res);
            console.log(JSON.stringify(res))
        })
        .catch((err) => {
            mostrarNaTela.innerText = err;

        })
})



