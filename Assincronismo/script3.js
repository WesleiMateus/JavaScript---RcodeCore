// fetch na pratica com pokemons
console.log("Buscando pokemon...")

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")

    .then((result) => result.json())
    .then((data) => {
        console.log("Pokemon Encontrado!")
        console.log(data)
        console.log(data.sprites.front_default)
    })
    .catch((err) => {
        console.log("ERROR searching datas...", err)
    })
