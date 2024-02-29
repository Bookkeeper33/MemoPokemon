import { useEffect, useState } from "react";

import shuffle from "../utils/shuffle";
import fetchPokemons from "../utils/fetchPokemons";

import CardsContainer from "./Cards/CardsContainer";
import Loading from "./Loading";
import GameModal from "./Modals/GameModal";

function GameBoard({ score, bestScore, setScore, setBestScore }) {
    const [pokemonList, setPokemonList] = useState([]);
    const [clickedPokemons, setClickedPokemons] = useState([]);
    const [isFetchingPokemons, setIsFetchingPokemons] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isGameWon, setIsGameWon] = useState(false);
    const [isFlipped, setIsFlipped] = useState(true);

    useEffect(() => {
        let ignore = false;

        const fetchPokemonData = async () => {
            setIsFetchingPokemons(true);

            try {
                const fetchedPokemonList = await fetchPokemons();

                if (!ignore) {
                    setPokemonList(fetchedPokemonList);
                }
            } catch (error) {
                console.error("Error fetching pokemons:", error);
            } finally {
                if (!ignore) {
                    setIsFetchingPokemons(false);
                }
            }
        };

        if (!isModalOpen) {
            fetchPokemonData();
        }
    }, [isModalOpen]);

    const startNextRound = () => {
        const shuffledPokemonList = shuffle(pokemonList);
        setIsFlipped(false);

        setTimeout(() => {
            setIsFlipped(true);
            setPokemonList(shuffledPokemonList);
        }, 2000);
        
        updateScore();
    };

    const updateScore = () => {
        const newBestScore = Math.max(score + 1, bestScore);

        setScore(score + 1);
        setBestScore(newBestScore);

        localStorage.setItem("highScore", newBestScore);
    };

    const resetGameState = () => {
        setScore(0);
        setClickedPokemons([]);
        setIsGameWon(false);
    };

    const resetGameBoard = () => {
        setClickedPokemons([]);
        setIsGameWon(false);
    };

    const openModal = (isWin) => {
        setIsModalOpen(true);
        setIsGameWon(isWin);
    };

    const closeModal = () => {
        setIsModalOpen(false);

        if (isGameWon) {
            resetGameBoard();
        } else {
            resetGameState();
        }
    };

    const handleCardClick = (id) => {
        const isDuplicate = clickedPokemons.includes(id);

        if (isDuplicate) {
            openModal(false);
        } else {
            const remainingCards = pokemonList.length - clickedPokemons.length;

            setClickedPokemons((prevPokemons) => [...prevPokemons, id]);

            if (remainingCards === 1) {
                openModal(true);
                updateScore();
            } else {
                startNextRound();
            }
        }
    };

    return (
        <>
            {isFetchingPokemons ? (
                <Loading />
            ) : (
                <>
                    <CardsContainer
                        isFlipped={isFlipped}
                        pokemons={pokemonList}
                        handleClick={handleCardClick}
                    />
                    <GameModal
                        openModal={isModalOpen}
                        closeModal={closeModal}
                        score={score}
                        isWin={isGameWon}
                    />
                </>
            )}
        </>
    );
}

export default GameBoard;
