import Tilt from "react-parallax-tilt";
import "./Card.css";

function Card({ pokemon, onClick }) {
    return (
        <Tilt
            tiltReverse={true}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareColor="#e57070"
            glarePosition="all"
        >
            <button className="card" onClick={onClick}>
                {pokemon && (
                    <>
                        <img
                            className="card-image"
                            src={pokemon.sprites.front_default}
                            alt={pokemon.name}
                        />
                        <div>
                            <h2>
                                {pokemon.name.charAt(0).toUpperCase() +
                                    pokemon.name.slice(1)}
                            </h2>
                        </div>
                    </>
                )}
            </button>
        </Tilt>
    );
}

export default Card;
