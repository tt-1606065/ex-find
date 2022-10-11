

async function dispararExercicio02() {
    const id = document.querySelector("#idPokemon").value
    const pokemon = await pegarPokemonDaAPI(id)

    document.querySelector("#imagemPokemon").src = pokemon.sprites.front_default
}


async function pegarPokemonDaAPI(id) {
    const fetchResposta = await fetch("https://pokeapi.co/api/v2/pokemon/" + id)
    const respostaEmJSON = await fetchResposta.json()

    return respostaEmJSON
}









