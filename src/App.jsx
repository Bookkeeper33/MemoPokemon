import { useState } from "react";

import GameScore from "./components/GameScore/GameScore";
import GameBoard from "./components/GameBoard";
import RulesButton from "./components/Rules/RulesButton";
import "./App.css";

function App() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(
        parseInt(localStorage.getItem("highScore")) || 0
    );

    return (
        <>
            <GameScore score={score} bestScore={bestScore} />
            <GameBoard
                score={score}
                bestScore={bestScore}
                setScore={setScore}
                setBestScore={setBestScore}
            />
            <RulesButton />
        </>
    );
}

export default App;
