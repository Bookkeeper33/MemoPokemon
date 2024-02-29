export default async function fetchPokemons() {
    const LIMIT = 12;
    const POKEMON_AMOUNT = 700;
    const pokemons = [];
    const uniquePokemonsID = new Set();

    try {
        while (uniquePokemonsID.size < LIMIT) {
            const randomID = Math.floor(Math.random() * POKEMON_AMOUNT + 1);

            if (!uniquePokemonsID.has(randomID)) {
                const pokemon = await fetchPokemon(randomID);
                uniquePokemonsID.add(randomID);
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

        if (!res.ok) {
            throw new Error("Failed to fetch Pokemons");
        }

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
