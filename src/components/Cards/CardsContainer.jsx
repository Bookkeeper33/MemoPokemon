import Card from "./Card";
import "./CardsContainer.css";

export default function CardsContainer({ pokemons, isFlipped, handleClick }) {
    return (
        <main>
            <div className="container">
                {pokemons &&
                    pokemons.map((pokemon) => (
                        <Card
                            key={pokemon.id}
                            pokemon={pokemon}
                            isFlipped={isFlipped}
                            onClick={() => handleClick(pokemon.id)}
                        />
                    ))}
            </div>
        </main>
    );
}
