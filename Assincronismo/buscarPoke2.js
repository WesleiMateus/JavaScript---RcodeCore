const btnGetPoke = document.getElementById("btn")
const statusLoad = document.getElementById("status")
const poke = document.getElementById("pokemon")
const namePoke = document.getElementById("name")
const sprite = document.getElementById("sprite")
const height = document.getElementById("height")


btnGetPoke.addEventListener("click", (e) => {
    e.preventDefault();
    async function getPoke() {
        
        const name = poke.value.trim();

        try {

            statusLoad.innerText = "Carregando...";
            
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            if (!response.ok) { throw new Error("Pokémon não encontrado!") };
            statusLoad.innerText = "Encontrado!";

            const result = await response.json();

            namePoke.innerText = `Nome: ${result.name}`;
            height.innerText = `Altura: ${result.height}M`;
            sprite.innerHTML = `
                Sprite: ${result.sprites.front_default}
            `;

        }
        catch (err) {
            statusLoad.innerText = err.message;
            console.log("Erro: ", err.message);
        }
    }

    getPoke();  
});