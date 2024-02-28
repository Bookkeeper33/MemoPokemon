export default async function fetchPokemons() {
    const LIMIT = 12;
    const POKEMON_AMOUNT = 700;

    try {
        const pokemons = [];

        while (pokemons.length < LIMIT) {
            const randomID = Math.floor(Math.random() * POKEMON_AMOUNT + 1);
            const pokemon = await fetchPokemon(randomID);

            if (!pokemons.some((p) => p.id === pokemon.id)) {
                pokemons.push(pokemon);
            }
        }
        return pokemons;
    } catch (err) {
        console.error(err);
    }
}

async function fetchPokemon(randomID) {
    try {
        const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${randomID}`
        );
        const {
            name,
            sprites: { front_default },
            id,
        } = await res.json();

        return { name, sprites: { front_default }, id };
    } catch (err) {
        console.error(err);
    }
}
