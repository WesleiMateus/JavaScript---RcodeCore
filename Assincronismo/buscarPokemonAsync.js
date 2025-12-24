const pokemon = document.querySelector("#pokemon")
const btnGetPokemon = document.querySelector("#btn")

const showInScreen = document.createElement("div")
const errorLog = document.createElement("p")
showInScreen.classList.add("container")
document.body.appendChild(showInScreen)
document.body.appendChild(errorLog)


btnGetPokemon.addEventListener("click", (e) => {
    e.preventDefault()
    async function getPoke() {
        const poke = pokemon.value.trim()
        if (!poke) { alert("Digite um pokemon válido..."); return }
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
                .then((res) => res.json())
                .then((infosPoke) => {
                    showInScreen.innerHTML = `
                        <p>Nome: ${infosPoke.name}</p>
                        <p>Altura: ${infosPoke.height}</p>
                        <p>Order: ${infosPoke.order}</p>
                    `;
                })
            // if (!response.ok) { throw new Error("Não foi possível encontrar o pokemon...") }
        }
        catch (err) {
            errorLog.innerText = err.message;
            console.log("ERRO: ", err.message)
        }
    }

    getPoke()
})
