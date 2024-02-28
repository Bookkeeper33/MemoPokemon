import Card from "./Card";
import "./CardsContainer.css";

export default function CardsContainer({ pokemons, handleClick }) {
    return (
        <main>
            <div className="container">
                {pokemons &&
                    pokemons.map((pokemon) => (
                        <Card
                            key={pokemon.id}
                            pokemon={pokemon}
                            onClick={() => handleClick(pokemon.id)}
                        />
                    ))}
            </div>
        </main>
    );
}
