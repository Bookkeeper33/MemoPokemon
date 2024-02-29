import { useRef } from "react";

import Tilt from "react-parallax-tilt";
import { CSSTransition } from "react-transition-group";

import cardBack from "../../assets/pokemon_back.jpg";
import "./Card.css";

function Card({ pokemon, isFlipped, onClick }) {
    const nodeRef = useRef(null);

    return (
        <Tilt tiltReverse={true} tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <div className="flippable-card-container">
                <CSSTransition
                    in={isFlipped}
                    timeout={400}
                    classNames="flip"
                    nodeRef={nodeRef}
                >
                    <div className="card" ref={nodeRef}>
                        <div className="card-back">
                            <img
                                className="card-image"
                                src={cardBack}
                                alt="pokemon-card"
                            />
                        </div>
                        <button className="card-front" onClick={onClick}>
                            {pokemon && (
                                <>
                                    <img
                                        className="card-image"
                                        src={pokemon.sprites.front_default}
                                        alt={pokemon.name}
                                    />
                                    <div>
                                        <h2>
                                            {pokemon.name
                                                .charAt(0)
                                                .toUpperCase() +
                                                pokemon.name.slice(1)}
                                        </h2>
                                    </div>
                                </>
                            )}
                        </button>
                    </div>
                </CSSTransition>
            </div>
        </Tilt>
    );
}

export default Card;
