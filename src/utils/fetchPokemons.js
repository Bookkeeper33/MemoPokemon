export default async function fetchPokemons() {
    const LIMIT = 12;
    const POKEMON_AMOUNT = 700;
    const promises = [];

    try {
        for (let i = 0; i < LIMIT; i++) {
            const randomID = Math.floor(Math.random() * POKEMON_AMOUNT) + 1;
            const promise = fetchPokemon(randomID);

            promises.push(promise);
        }

        const pokemonList = await Promise.all(promises);

        return pokemonList;
    } catch (error) {
        console.error("Error fetching pokemons:", error);
        throw error;
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
